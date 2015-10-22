'use strict';
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./app/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }]
  },

  plugins: [
    new ExtractTextPlugin("styles.css", { allchunks: true })
  ],

  postcss: [
    require('autoprefixer'),
    require('precss')
  ]
};
