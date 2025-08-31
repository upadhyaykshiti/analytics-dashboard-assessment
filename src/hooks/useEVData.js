// src/hooks/useEVData.js
import { useState, useEffect } from "react";
import Papa from "papaparse";

const DATA_URL = "/data-to-visualize/Electric_Vehicle_Population_Data.csv"; 
export const useEVData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DATA_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const cleaned = result.data.filter((row) => row["Model Year"]);
            setData(cleaned);
            setLoading(false);
          },
          error: (error) => {
            console.error("CSV Parse Error:", error);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  return { data, loading };
};