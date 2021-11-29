const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: '325px',
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        '7xl': '5.2rem',
        '5xl': '2.85rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
