/** @type {import('tailwindcss').Config} */

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
        primary: ["var(--head-font)", "sans-serif"],
        sans: ["var(--sans-font)", "sans-serif"],
      },
      colors: {
        primary: "emerald",
      },
    },
  },
  plugins: [],
};
