/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
      },
    },
    fontFamily: {
      'bigelow': ['Bigelow Rules', 'cursive'],
    },
    
  },
  plugins: [],
}

