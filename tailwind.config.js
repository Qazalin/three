/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--sans-font)", "sans-serif"],
      },
      colors: {
        primary: "emerald",
        secondary: "blue",
        "secondary-text": colors.zinc[400],
        "tertiary-text": colors.zinc[500],
      },
    },
  },
  plugins: [],
};
