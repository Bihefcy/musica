/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["{index.html, app.js}"],
  theme: {
    screens: {
      sm: '425px',
    },
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
    },
    colors: {
      'black': '#1E1E1E',
      'text-color': 'rgba(255, 255, 255, 0.25)',
    },
    extend: {},
  },
  plugins: [],
}
