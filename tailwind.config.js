const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Compotents/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {

    extend: {},
    colors: {
      ...colors,
      background: "#0D0C1D",
      primary: "#161B33",
      second: "#282f4c",
      button:"#6063ff"

    },
    fontFamily: {
      poppins: [
        'Poppins',
        'sans-serif'

      ]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}