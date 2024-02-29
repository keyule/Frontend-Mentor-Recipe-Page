/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'Rose-White': '#fff5fa',
      'Eggshell': '#f3e6d8',
      'Light-Grey': '#e4ded8',
      'Wenge-Brown': '#5f574e',
      'Dark-Charcoal': '#302d2c',
      'Nutmeg': '#854632',
      'Dark-Raspbery': '#7b284f',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      serif: ['Yong Serif', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

