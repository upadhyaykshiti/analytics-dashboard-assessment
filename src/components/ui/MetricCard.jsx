// src/components/ui/MetricCard.jsx
export default function MetricCard({ title, value, subtitle }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-2xl font-bold text-blue-600 mt-1">{value}</p>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );
}