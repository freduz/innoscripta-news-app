/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screen:{
    sm:"480px",
    md:"768px",
    lg:"976px",
    xl:"1440px"
    },
    fontFamily:{
      playfair : ['Playfair Display', 'serif']
    },
    extend: {
     },
  },
  plugins: [],
}