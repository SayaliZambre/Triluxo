/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#121212",
        darkCard: "#1E1E1E",
        darkText: "#EAEAEA",
        primary: "#BB86FC",
      },
    },
  },
  darkMode: "class", // Enable dark mode
  plugins: [],
};
