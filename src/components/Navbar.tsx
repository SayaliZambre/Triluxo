"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="p-4 bg-darkCard flex justify-between items-center">
      <h1 className="text-lg font-bold">Dashboard</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-primary text-black rounded-lg"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}
