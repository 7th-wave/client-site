// const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '5xl': '45px'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
          '7xl': '84.125rem',
       },
       width: {
        'm-1xl':'376px',
       },
      colors: {
        primary: {
          'DEFAULT': '#696E82',
          '50': '#CCCED6',
          '100': '#C1C3CD',
          '200': '#AAAEBB',
          '300': '#9498A8',
          '400': '#7D8296',
          '500': '#696E82',
          '600': '#505463',
          '700': '#373944',
          '800': '#1E1F25',
          '900': '#050506',
          'link':'696E82'
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
        },
        blue:{
          link:'#84f4ee',
        },
        pink: {
          'DEFAULT': '#D937BA'
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
