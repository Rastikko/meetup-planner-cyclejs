var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',

  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/dev-server',
      './code/app'
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build'),
    publicPath: '/build/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['code', 'node_modules']
  },

  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], include: path.join(__dirname, 'code'), exclude: /node_modules/ }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
