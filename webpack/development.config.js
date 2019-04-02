const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
  return {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      publicPath: 'http://localhost:8080/admin/',
      openPage: 'admin/',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            // {
            //   loader: MiniCSSExtractPlugin.loader,
            //   options: {
            //     publicPath: '../',
            //   },
            // },
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },
  };
};
