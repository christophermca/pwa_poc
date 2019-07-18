const path = require('path');
const htmlPlugin = require("html-webpack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/scripts/',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins: [
    new workboxPlugin.GenerateSW({
      globDirectory: './dist',
      globPatterns: ['\*\*/\*.{html,js,css}'],
      swDest: './dist/sw.js',
      runtimeCaching: [{
        urlPattern: /.*/,
        handler: 'NetworkFirst',
        options: {
          networkTimeoutSeconds: 10
        }
      }]
    }),
    new htmlPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    modules: [
      path.resolve("./src")
    ],
    extensions: [".js", ".jsx"]
  }
};

