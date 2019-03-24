const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
  return {
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            // 'style-loader',
            'css-loader',
          ],
        },
      ],
    },
  };
};
