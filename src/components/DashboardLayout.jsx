// src/components/DashboardLayout.jsx
import React from "react";
import { useEVData } from "../hooks/useEVData";
import MetricCard from "./ui/MetricCard";
import LineChartComponent from "./charts/LineChartComponent";
import BarChartComponent from "./charts/BarChartComponent";
import PieChartComponent from "./charts/PieChartComponent";
import { getInsights } from "../utils/helpers";

export default function DashboardLayout() {
  const { data, loading } = useEVData();

  if (loading) {
    return <p className="py-10 text-center">Loading data...</p>;
  }

  const { totalEVs, avgRange, topState, evByYear, evTypes, topMakes, topCities } = getInsights(data);

  return (
    <main className="p-6 mx-auto space-y-8 max-w-7xl">
      {/* Metrics */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <MetricCard title="Total EVs" value={totalEVs.toLocaleString()} />
        <MetricCard title="Avg Range (mi)" value={Math.round(avgRange)} />
        <MetricCard title="Top State" value={topState} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <LineChartComponent data={evByYear} />
        <PieChartComponent data={evTypes} title="BEV vs PHEV" />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <BarChartComponent data={topMakes} title="Top 5 EV Makes" fill="#ffc658" />
        <BarChartComponent data={topCities} title="Top 5 Cities" fill="#82ca9d" />
      </div>

      <footer className="mt-12 text-sm text-center text-gray-500">
        Data Source: Kaggle EV Population Dataset | Dashboard built with React & Recharts
      </footer>
    </main>
  );
}