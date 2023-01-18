/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    activea:
      "text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff",
    extend: {
      backgroundImage: {},
      backgroundColor: {
        grey: "rgba(17,17,17,0.75)",
        black: "rgb(31, 31, 38)",
      },
      boxShadow: {
        under: "0 3px 7px 0 rgb(0 0 0 / 35%);",
      },
      height: {
        hamburgermenu: "calc(100vh - 64px)",
      },
      textColor: {
        grey: "#ccc",
      },
    },
  },
  plugins: [],
};
