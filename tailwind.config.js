/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e30613",
        black: "#000000",
        grayLight: "#f1f2f2",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "1141px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
