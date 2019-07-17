const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/scripts/',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
      test: /\.(js|jsx)$/,
      use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

