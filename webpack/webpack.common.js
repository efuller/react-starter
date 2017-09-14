const commonPaths = require('./common-paths');
const ProgressBar = require('progress-bar-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

	entry: './src/',
	output: {
		filename: 'bundle.js',
		path: commonPaths.outputPath
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-resources-loader',
							options: {
								resources: './src/scss/**/*.scss'
							}
						}
					]
				})
			}
		]
	},
	plugins: [
		new ProgressBar(),
		new HTMLWebpackPlugin({
			template: 'src/index.html'
		}), // Builds and injects an HTML file into the dist folder.
		new ExtractTextPlugin('../dist/main.css')
	]
};

module.exports = config;
