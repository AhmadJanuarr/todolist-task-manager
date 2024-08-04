/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kreon: ["Kreon", "sans-serif"],
      },
      colors: {
        primary: "#515151",
        green: "#9AE2A5",
        red: "#EB9393",
        blue: "#D1EDF5",
        gray: "#C0C0C0",
      },
    },
  },
  plugins: [],
};
