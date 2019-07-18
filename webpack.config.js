const path = require('path');
const htmlPlugin = require("html-webpack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/scripts/index.js'),
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
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve("./src")
    ],
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new workboxPlugin.GenerateSW({
      swDest: './dist/sw.js',
      runtimeCaching: [{
        urlPattern: /.*/,
        handler: 'cacheFirst',
        options: {
          networkTimeoutSeconds: 10
        }
      }]
    }),
    new htmlPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: './',
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },
  devtool: "source-map"
};

