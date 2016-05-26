var webpack = require('webpack');

module.exports = {
  // this is the main react app, replace when ours is named
  entry:  [
    "./client/app.jsx"
  ], 
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    // may change this depending on where we load this into our html
    path: __dirname + '/public', 
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname +'/public'
  }
}; 