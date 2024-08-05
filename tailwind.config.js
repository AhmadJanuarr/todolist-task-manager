/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "640px", // Mobile
        laptop: "1024px", // Laptop
        desktop: "1280px", // Desktop
      },
      fontFamily: {
        kreon: ["Kreon", "sans-serif"],
      },
      colors: {
        gray: "#929292",
        primary: "#515151",
        green: "#9AE2A5",
        red: "#EB9393",
        blue: "#D1EDF5",
      },
    },
  },
  plugins: [],
};
