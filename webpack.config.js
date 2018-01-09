const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: "./src/index.js",
	output: {
    path: path.resolve(__dirname,"dist"),
		filename: "app.js"
	},
	devServer: {
		inline: true,
		contentBase: "./dist",
		port: 3000
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        use: 'json-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      path: path.resolve(__dirname, './dist')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: "eval"

}