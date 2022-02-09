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
          900: "#134E4A",
          800: "#115E59",
          700: "#0F766E",
          600: "#0D9488",
          500: "#14B8A6",
          400: "#2DD4BF",
          300: "#5EEAD4",
          200: "#99F6E4",
          100: "#CCFBF1",
          50: "#F0FDFA",
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
