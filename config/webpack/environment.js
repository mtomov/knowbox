const path = require('path')
const { environment } = require('@rails/webpacker')

environment.loaders
  .get('sass')
  .use.find((item) => item.loader === 'sass-loader').options.includePaths = [
  'node_modules',
]

const config = environment.toWebpackConfig()

config.resolve.alias = {
  jquery: 'jquery/src/jquery',
}

module.exports = environment
