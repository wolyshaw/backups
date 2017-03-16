const express = require('express')
const path = require('path')
const compression = require('compression')
const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevConfig = require('./webpack.config.dev')
const compiler = webpack(webpackDevConfig)
app.use(compression())
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}))

app.use(webpackHotMiddleware(compiler))
app.use('/dev', express.static('dev'))
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dev', 'index.html'))
})
let PORT = process.env.PORT || 8000
app.listen(PORT, function() {
  console.log(`server running at localhost: ${PORT}`)
})
