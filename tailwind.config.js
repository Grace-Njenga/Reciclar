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
      // DARK-GREEN ---- Primary color
      // Can be used as a primary color, background color for sections, or in elements like buttons, headers, and footers.
      dark_green__primary: "#638A55",

      // light-green ---- Accent color
      // Can be used as an accent color, secondary background color, or for highlights and call-to-action buttons.
      light_green__secondary: "#9BBA74",

      // Soft Yellow-Green---- highlighting CTAs
      //  Can be used for highlighting important information, backgrounds, or in graphical elements and icons.
      light_yellow__highlight: "#CDDB86",

      // Pale Yellow --- Background color
      // Can be used as a background color for content sections, or to add a soft, light feel to certain elements.
      pale_yellow__background: "#FCE7B2",

      // light-brown ---- Complementary color
      // Can be used for backgrounds, borders, or as a complementary color to create a natural, earthy feel.
      light_brown__background: "#E1B083",

      //  Medium-brown ---- Secondary color
      // Can be used for text, headings, or as a secondary color for creating contrast with lighter background colors.
      medium_brown__complementary: "#C48D60",
    },
    extend: {
      fontFamily: {
        Cabin: [' "Cabin Sketch", sans-serif'],
        Gorditas: [' "Gorditas", serif'],
        Trykker: [' "Trykker", serif'],
      },
    },
  },
  plugins: [],
};

