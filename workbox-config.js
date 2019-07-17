module.exports = {
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
};
