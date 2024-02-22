/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    colors: {
      primary: "#287a28",
      secondary: "#d6f4ff",
      accent: "#007348",
      // green 
      main: "#003500",
      hover: "#ffd885",
      white: "#f8f2f2"
   },
    extend: {},
  },
  plugins: [],
}

