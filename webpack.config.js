const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
};

module.exports = {
  context: __dirname,
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: {
    app: [PATHS.src]
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};

module.exports.serve = {
  port: 8080,
};