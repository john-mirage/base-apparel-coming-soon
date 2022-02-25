const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      'transparent': 'transparent',
      'desaturated-red': 'hsl(0, 36%, 70%)',
      'soft-red': 'hsl(0, 93%, 68%)',
      'dark-grayish-red': 'hsl(0, 6%, 24%)',
    },
    extend: {
      fontFamily: {
        sans: [
          'Josefin Sans',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    },
  },
  plugins: [],
}
