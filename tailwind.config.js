/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redbull-red': '#FF0000',
        'redbull-blue': '#0000FF',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'syncopate': ['Syncopate', 'sans-serif'],
        'chakra': ['Chakra Petch', 'sans-serif'],
      },
      animation: {
        'cursor-trail': 'trail 0.5s ease-out infinite',
      },
      keyframes: {
        trail: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} 