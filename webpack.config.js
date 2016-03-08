var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',

  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/dev-server',
      './src/app'
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build'),
    publicPath: '/build/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules']
  },

  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], include: path.join(__dirname, 'src'), exclude: /node_modules/ }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
