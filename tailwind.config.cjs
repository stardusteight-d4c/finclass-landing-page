/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // ex.: => @media (min-width: 640px) { ... }
      xxs: '480px',
      xs: '500px',
      sm: '640px',
      md: '768px',
      mdd: '800px',
      mmd: '900px',
      lg: '1024px',
      xxll: '1100px',
      xxl: '1130px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        noto: 'Noto Sans Display, sans-serif',
      },
      backgroundImage: {
        hero: 'url(/bg-worlds-best.webp)',
      },
      gridTemplateColumns: {
        feedbackColumns: '400px 48px auto',
        mediumFeedbackColumns: '1fr 1.5fr',
        tabFaqColumns: '1fr 1fr 1fr',
        footerColumns: '1fr 1fr 1fr 1fr 1fr',
      },
      gridTemplateRows: {
        mediumRows: '48px auto',
        smallRows: 'auto auto auto',
      },
    },
  },
  plugins: [],
}
