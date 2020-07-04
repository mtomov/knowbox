const hostname =
  'production' === process.env.NODE_ENV
    ? 'https://quiet-hamlet-76527.herokuapp.com'
    : 'http://localhost:3000'

export { hostname }
