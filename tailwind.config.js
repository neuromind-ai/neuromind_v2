/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "header-background-color":"#010213"
      },
      zIndex:{
        "1000":1000
      }
    },
  },
  plugins: [],
}