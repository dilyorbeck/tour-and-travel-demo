/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
      lightGray: '#B8BECD',
      lightOrange: '#FB8F1D',
      normalBlack: '#202336',
      lightYellow:  '#FFBB0C',
      whitishGray: '#F9F9FB',
      brightGray: '#848484'
      },
    },
  },
  plugins: [],
}