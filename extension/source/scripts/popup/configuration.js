let host = ''

if ('production' === process.env.NODE_ENV) {
  host = 'https://quiet-hamlet-76527.herokuapp.com'
} else if ('staging' === process.env.NODE_ENV) {
  host = 'https://quiet-hamlet-76527.herokuapp.com'
} else {
  host =
    window.location.host.includes('localhost') ||
    window.location.host.includes('127.0.0.1')
      ? 'http://localhost:3000'
      : 'http://localhost:3000'
}

const hostname = host

export { hostname }
