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
      purple: {
        DEFAULT: '#ba74e0'
      },
      white: colors.white,
      section: "#f6f9fc",
      primary: {
        DEFAULT: "#747FE0",
        dark: "#4352d6"
      },
      bodyText: "#525f7f",
      darkBg: "#5a5d7a"
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      card: '0 50px 100px rgb(50 50 93 / 5%), 0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 10%)'
    },
    screens: {
      'bg-xs': '600px',
      'bg-sm': '1048px',
      'bg-md': '1518px', 
      'bg-lg': '2088px', 
      'bg-xl': '2550px', 
      'xs': '345px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      transitionProperty: {
       'height': 'height',
      },
      // backgroundImage: {
      //   'header-sm': "url('./static/animatedBgSM.svg')",
      //   'header-xs': "url('./static/animatedBgXS.svg')",
      //   'header-md': "url('./static/animatedBgMD.svg')",
      //   'header-norm': "url('./static/animatedbg.svg')",
      //   'header-lg': "url('./static/animatedBgLG.svg')",
      //   'header-xl': "url('./static/animatedBgXL.svg')",
      // },
    }
  },
  variants: {
    extend: {
      margin: ['last']
    },
  },
  plugins: [],
}
