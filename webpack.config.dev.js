const webpack = require('webpack')
const path = require('path')
const CleanPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom'],
    bundle: './src/index.js'
  },
  output: {
    filename: '[hash:5].[name].js',
    path: path.resolve('./dev'),
    chunkFilename: '/[hash:5].[name].chunk.js'
  },
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        loader: ['style-loader!css-loader?modules&localIdentName=[name]--[local]--[hash:base64:5]']
      })
    }
  ]
  },
  plugins: [
    new CleanPlugin(['dev'], {
      root: path.join(__dirname),
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'static', 'index_default.html'),
      title: 'backups',
      keywords: 'backup',
      description: 'backup'
    }),
    new ExtractTextPlugin({
      filename: 'static/[hash:5].[name].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ]
}
