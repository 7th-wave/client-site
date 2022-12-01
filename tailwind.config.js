// const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.vue"],
  darkMode: 'class',
  important: true,
  theme: {
      screens: {
          xs: "540px",
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
      },
      fontFamily: {
          'urbanist': ['"Urbanist", sans-serif']
      },
      container: {
          center: true,
          padding: {
              DEFAULT: '12px',
              sm: '1rem',
              lg: '45px',
              xl: '5rem',
              '2xl': '13rem',
          },

      },
      extend: {
          colors: {
              'dark': '#3c4858',
              'black': '#161c2d',
              'dark-footer': '#192132',
              primary: {
                DEFAULT:'#6A5999',
                '50': '#E9FFFF',
                '100': '#D9FFFF',
                '200': '#BBFFFF',
                '300': '#9CFFFF',
                '400': '#7EFFFF',
                '500': '#5FFFFF',
                '600': '#22FFFF',
                '700': '#00E4E4',
                '800': '#2EC8CF',
                '900': '#108181',
                'link': '#5FFFFF'
              },
              secondary: {
                'default': '#D6742A',
                '50': '#F4D8C4',
                '100': '#F0CDB3',
                '200': '#EAB791',
                '300': '#E3A16E',
                '400': '#DD8A4C',
                '500': '#D6742A',
                '600': '#A85B20',
                '700': '#794117',
                '800': '#4A280E',
                '900': '#1A0E05'
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
              green:{
                '50': '#108181',
              },
              blue:{
                link:'#84f4ee',
              },
          },

          boxShadow: {
              sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
              DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
              md: '0 5px 13px rgb(60 72 88 / 0.20)',
              lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
              xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
              '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
              inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
              testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
          },
          fontSize: {
              sm: ['14px', '20px'],
              base: ['17px', '24px'],
              lg: ['20px', '28px'],
              xl: ['22px', '30px'],
          },

          spacing: {
              0.75: '0.1875rem',
              3.25: '0.8125rem'
          },

          maxWidth: ({
              theme,
              breakpoints
          }) => ({
              '1200': '71.25rem',
              '992': '60rem',
              '768': '45rem',
          }),

          zIndex: {
              1: '1',
              2: '2',
              3: '3',
              999: '999',
          },
      },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("@tailwindcss/forms"),
  ],
};