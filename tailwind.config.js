/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  fontFamily: {
    Poppins: ['Poppins', 'sans-serif'],
    Josefin: ['Josefin Sans', 'sans-serif'],
    Montserrat: ['Montserrat', 'sans-serif'],
    Raleway: ['Raleway', 'sans-serif'],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}
