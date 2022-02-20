// const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        teal: {
          '50': '#31C7FF',
          '100': '#21C1FF',
          '200': '#03B3FF',
          '300': '#009AE3',
          '400': '#0081C5',
          '500': '#006AA6',
          '600': '#005182',
          '700': '#00395F',
          '800': '#00223B',
          '900': '#000D17'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    require("@tailwindcss/forms"),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
