const path = require('path');
const Webpack = require('webpack');

module.exports = {
  entry: './src/mikavue.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'mikavue.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
        contentBase:path.resolve(__dirname,''),
        host:'localhost',
        port:8080,
		stats: 'errors-only',
        overlay: true,
        open:true,
        hot:true	
  }, 
  performance: {
    hints: false
  },
  devtool: '#cheap-module-eval-source-map'
}
