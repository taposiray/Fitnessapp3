/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#0A0A0C',
        glassBg: 'rgba(18, 18, 24, 0.7)',
        neonGreen: '#39FF14',
        neonCyan: '#00F3FF',
        neonPurple: '#9D00FF'
      },
      boxShadow: {
        neonGlow: '0 0 15px rgba(0, 243, 255, 0.4), 0 0 30px rgba(157, 0, 255, 0.2)',
        greenGlow: '0 0 15px rgba(57, 255, 20, 0.4)'
      }
    },
  },
  plugins: [],
}