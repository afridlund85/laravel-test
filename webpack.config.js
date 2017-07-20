const webpack = require('webpack')
const path = require('path')

const _root = path.resolve(__dirname, '..')

function rootPath(args) {
  args = Array.prototype.slice.call(arguments, 0)
  return path.join.apply(path, [_root].concat(args))
}

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080'
  ],
  devServer: {
    contentBase: rootPath('public'),
    publicPath: '',
    port: 8080,
    host: '0.0.0.0',
    inline: true
  }
}