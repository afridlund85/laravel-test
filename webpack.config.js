const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const _root = path.resolve(__dirname)

function rootPath(args) {
  args = Array.prototype.slice.call(arguments, 0)
  return path.join.apply(path, [_root].concat(args))
}

module.exports = {
  entry: [
    rootPath('resources/assets/js/app.js')
  ],
  output: {
    path: rootPath('public'),
    filename: 'js/app.js'
  },
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 500
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/app.css')
  ]
}