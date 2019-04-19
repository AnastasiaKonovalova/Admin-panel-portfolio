module.exports = function() {
  return {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      historyApiFallback: {
        rewrites: [{ from: /./, to: 'http://localhost:8080/admin/' }]
      },
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
