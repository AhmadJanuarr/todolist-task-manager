/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "412px", // Mobile
        laptop: "980px", // Laptop
        desktop: "1444px", // Desktop
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        dark: "#222831",
        grayDark: "#FAF9F9",
        gray: "#EDEDED",
        primary: "#515151",
        green: "#9AE2A5",
        red: "#EB9393",
        blue: "#D1EDF5",
      },
    },
  },
  plugins: [],
};
