/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        azulado : "#253D5B"
      },
      backgroundImage:{
        fondo: "url(/public/download.jpg)"
      }
    },
  },
  plugins: [],
}