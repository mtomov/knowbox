process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

const path = require('path')
environment.config.devServer.watchContentBase = true
environment.config.devServer.watchOptions = {
  aggregateTimeout: 600,
}
environment.config.devServer.contentBase = [
  path.join(__dirname, '../../app/views'),
]

const config = environment.toWebpackConfig()

config.resolve.alias = {
  'webextension-polyfill': './browser-dev-shim.js',
}

module.exports = config
