module.exports = {
  purge: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
        // => @media  print { ... }
      },
    },
  },
  variants: {},
  plugins: [],
}
