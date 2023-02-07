/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto, sans-serif',
        openSans: 'Open Sans, sans-serif',
      },
      backgroundImage: {
        hero: 'url(/bg-worlds-best.webp)',
      },
    },
  },
  plugins: [],
}
