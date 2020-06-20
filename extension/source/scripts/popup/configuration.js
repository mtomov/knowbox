let host = ''

if ('production' === process.env.NODE_ENV) {
  host = 'https://app.klutch.ai'
} else if ('staging' === process.env.NODE_ENV) {
  host = 'https://app-staging.klutch.ai'
} else {
  host =
    window.location.host.includes('localhost') ||
    window.location.host.includes('127.0.0.1')
      ? 'http://knowbox.com:3000'
      : 'http://knowbox.com:3000'
}

const hostname = host

export { hostname }
