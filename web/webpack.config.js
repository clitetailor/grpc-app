const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'index.js',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'public'),
    ],
  },
}
