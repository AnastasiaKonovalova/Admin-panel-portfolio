module.exports = function() {
  return {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      publicPath: 'http://localhost:8080/admin/',
      openPage: 'admin/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  };
};
