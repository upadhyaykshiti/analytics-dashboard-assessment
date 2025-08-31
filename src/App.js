// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from "react";
import Header from "./components/ui/headerUi";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <DashboardLayout />
    </div>
  );
}

// function App() {
//   return (
//     <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
//       <h1 className="text-3xl font-bold text-red-800">⚡ EV Dashboard</h1>
//       <p className="mt-2 text-green-600">Tailwind is working!</p>
//       <div className="p-4 mt-6 bg-white border rounded-lg shadow-md">
//         <p className="text-sm text-blue-500">This card should have padding, border, and shadow.</p>
//       </div>
//     </div>
//   );
// }



export default App;

