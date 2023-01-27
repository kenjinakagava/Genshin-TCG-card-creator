/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    activea:
      "text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff",
    extend: {
      colors: {
        gold: "#c79240",
      },
      backgroundColor: {
        grey: "rgba(17,17,17,0.75)",
        beige: "#f7e8d5",
        vanilla: "#f9eee3",
        black: "rgb(31, 31, 38)",
        gold: "#c79240",
        footer: "#101010",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        under: "0 3px 7px 0 rgb(0 0 0 / 35%);",
      },
      screens: {
        fold: { max: "300px" },
      },
      textColor: {
        grey: "#ccc",
      },
      fontSize: {
        mobileTitle: "2.75rem",
      },
    },
  },
  plugins: [],
};
