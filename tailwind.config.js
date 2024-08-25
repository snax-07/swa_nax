import theme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const deafaultTheme =  require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        "lato" : ['Orbitron' , 'sans-serif']
    }
    },
  },
  plugins: [],
}
