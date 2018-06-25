const webpack = require("webpack");
const HTMLWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: [
		'./src/index.js'
	],
	module: {
		rules: [
			{
				test: '/\.js$/',
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: []
					}
				}
			},
			{
				test: '/\.html$/',
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: '/.\css$/',
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HTMLWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
};