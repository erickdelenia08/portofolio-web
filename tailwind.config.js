/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
      colors: {
        "main-col": "#34353A",
        "scnd-col": "#3D3E42",
        "third-col": "#414244",
        "gray-col": "#A1A1A3",
        "white-col": "#E6E7E7",
        "gold-col": "#FFCD6D",
      },
    },
  },
  plugins: [],
};
