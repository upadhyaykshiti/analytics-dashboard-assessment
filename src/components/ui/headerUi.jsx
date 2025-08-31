// src/components/ui/Header.jsx
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Electric Vehicle Population Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Insights from U.S. EV Registration Data
        </p>
      </div>
    </header>
  );
}