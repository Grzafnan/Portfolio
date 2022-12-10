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
    colors: {
      'primary': '#0077b6',
      'secondary': '#ffee32',
      'dark': '#202020',
      'darkGray': '#333533',
      'white': '#ffffff',
      'accent': '#f3eff5'
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}
