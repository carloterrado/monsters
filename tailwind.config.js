/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
      },
      background: {
        'linear': 'linear-gradient(to left, rgba(7, 27, 82, 1) 0%, rgba(0, 128, 128, 1) 100%)',
      }
    },
    fontFamily: {
      'bigelow': ['Bigelow Rules', 'cursive'],
    },
    
  },
  plugins: [],
}

