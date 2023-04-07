/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT")

module.exports = withMT({
  content: [ "./src/**/*.{html,ts}",'./pages/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
    colors: {
      'light': '#F9F9F9',
      'blue': '#3C91E6',
      'bluuee': '#22d3ee',
      'light-blue': '#CFE8FF',
      'grey': '#eee',
      'dark-grey': '#AAAAAA',
      'dark': '#342E37',
      'red': '#DB504A',
      'yellow': '#FFCE26',
      'light-yellow': '#FFF2C6',
      'orange': '#FD7258',
      'light-orange': '#FFE0D3'
    },
    fontFamily: {
      'lato': ['lato', 'sans-serif']
    }

  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
})
