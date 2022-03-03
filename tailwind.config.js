// const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          '50': '#31C7FF',
          '100': '#21C1FF',
          '200': '#03B3FF',
          '300': '#009AE3',
          '400': '#0081C5',
          '500': '#006AA6',
          '600': '#005182',
          '700': '#00395F',
          '800': '#00223B',
          '900': '#000D17',
        },
        secondary: {
          '50': '#ABF4DF',
          '100': '#99F2D8',
          '200': '#75EECA',
          '300': '#51E9BC',
          '400': '#2CE4AE',
          '500': '#1ACE99',
          '600': '#149C74',
          '700': '#0D6A4F',
          '800': '#07392A',
          '900': '#010705'
        },
        gray:{
          '100': '#F3F4F6',
          '600':'#4B5563',
          '700':'#374151',
          '900':'#111827',
        },
        red: {
          '50': '#FBBBBF',
          '100': '#FAA8AC',
          '200': '#F88187',
          '300': '#F65A63',
          '400': '#F4343E',
          '500': '#F20D19',
          '600': '#BD0A13',
          '700': '#88070E',
          '800': '#520408',
          '900': '#1D0203'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss'),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require("@tailwindcss/forms"),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
