// src/utils/helpers.js
export const getInsights = (data) => {
  const toNum = (str) => parseFloat(str) || 0;

  // Total EVs
  const totalEVs = data.length;

  // Avg Range
  const avgRange =
    data.reduce((acc, row) => acc + toNum(row["Electric Range"]), 0) / totalEVs || 0;

  // Top State
  const stateCount = data.reduce((acc, row) => {
    acc[row.State] = (acc[row.State] || 0) + 1;
    return acc;
  }, {});
  const topState =
    Object.entries(stateCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  // EVs by Year
  const evByYear = Object.entries(
    data.reduce((acc, row) => {
      const year = row["Model Year"];
      if (year) acc[year] = (acc[year] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => a.year - b.year);

  // BEV vs PHEV
  const evTypes = [
    {
      name: "Battery Electric (BEV)",
      value: data.filter((r) => r["Electric Vehicle Type"]?.includes("Battery")).length,
    },
    {
      name: "Plug-in Hybrid (PHEV)",
      value: data.filter((r) => r["Electric Vehicle Type"]?.includes("Plug-in")).length,
    },
  ].filter(item => item.value > 0);

  // Top 5 Makes
  const makeCount = data.reduce((acc, row) => {
    acc[row.Make] = (acc[row.Make] || 0) + 1;
    return acc;
  }, {});
  const topMakes = Object.entries(makeCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([make, count]) => ({ name: make, count }));

  // Top 5 Cities
  const cityCount = data.reduce((acc, row) => {
    acc[row.City] = (acc[row.City] || 0) + 1;
    return acc;
  }, {});
  const topCities = Object.entries(cityCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([city, count]) => ({ name: city, count }));

  return {
    totalEVs,
    avgRange,
    topState,
    evByYear,
    evTypes,
    topMakes,
    topCities,
  };
};