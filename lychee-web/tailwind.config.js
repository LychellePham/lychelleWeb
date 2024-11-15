/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"]
      }
    },
    colors: {
      'my-yellow': '#FFF8DB',
      'my-pink': '#FFC7ED',
      'my-blue': '#7D8ABC',
      'my-navy': '#304463'
    },
  
  },
  plugins: [],
}

