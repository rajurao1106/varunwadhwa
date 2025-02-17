/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Minion: ['MinionPro', 'sans-serif'],
        europa: ['europa']
      },
      rotate: {
        '10': '10deg', // custom 10-degree tilt
        '15': '15deg',
        '-15': '-15deg',
      },
    },
  },
  plugins: [],
}