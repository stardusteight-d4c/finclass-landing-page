/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // ex.: => @media (min-width: 640px) { ... }
      xs: '500px',
      sm: '640px',
      md: '768px',
      mmd: '900px',
      lg: '1024px',
      xxl: '1130px',
      xl: '1280px',
      '2xl': '1536px',
    },
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
