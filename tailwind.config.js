console.log(process.env.NODE_ENV)

module.exports = {
  // purge: ['./app/**/*.html.slim', './app/helpers/**/*.rb'],
  theme: {
    extend: {},
  },
  variants: {},
  corePlugins: [
    'margin',
    'padding',
    'backgroundColor',
    'textAlign',
    // ...
  ],
}
