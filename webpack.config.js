const path = require('path');
const merge = require('webpack-merge');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prod = require('./webpack/production.config');
const dev = require('./webpack/development.config');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const common = {
  entry: {
    index: PATHS.source + '/index.js',
  },
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: PATHS.source + '/index.html',
    }),
    new ClearWebpackPlugin({
      cleanOnceBeforeBuildPatterns: 'build',
    }),
    new MiniCSSExtractPlugin({
      filename: './css/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

module.exports = function(env) {
  if (env === 'production') {
    return merge([common, dev()]);
  }
  if (env === 'development') {
    return merge([common, dev()]);
  }
};
