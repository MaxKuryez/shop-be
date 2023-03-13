const path = require('path');
const  FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

module.exports = {
  entry: [
    'regenerator-runtime/runtime',
    './src/app.ts'
  ],
  target: 'node',
  devtool: 'source-map',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'index.js',
      publicPath: 'build/'
  },
  module: {
    rules: [
        {
          use: ['babel-loader', 'ts-loader'],
          exclude: /(node_modules)/,
          test: /\.(js|jsx|tsx|ts)$/,
        }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.ts'],
  },
  plugins: [
    new FilterWarningsPlugin({
        exclude: [/Critical dependency/]
    })
]
}
