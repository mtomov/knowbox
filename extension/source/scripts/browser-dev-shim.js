console.log('Hello from dev-shim!')

const browser = {
  tabs: {
    query: () => Promise.resolve([]),
  },
  runtime: {
    sendMessage: () => Promise.resolve([]),
  },
}
export default browser
