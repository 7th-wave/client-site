const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

// vue.config.js
module.exports = {
    configureWebpack: {
      plugins: [
        new NodePolyfillPlugin()
      ]
    }
  }