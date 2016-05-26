var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map', // not efficient for production builds
  // this is the main react app, replace when ours is named
  entry:  __dirname + "../client/app.js", 
  output: {
    // may change this depending on where we load this into our html
    path: __dirname + "/public", 
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'
        //supports css module configuration
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}; 