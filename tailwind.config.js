const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      green: {
        light: "#8EE4AF",
        DEFAULT: "#92eac0",
        dark: "#379683"
      },
      white: colors.white,
      section: "#f6f9fc",
      primary: {
        DEFAULT: "#747FE0",
        dark: "#4b57c3"
      },
      bodyText: "#525f7f"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
