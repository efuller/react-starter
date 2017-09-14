const commonPaths = require('./common-paths');
const ProgressBar = require('progress-bar-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {

	entry: './src/',
	output: {
		filename: 'bundle.js',
		path: commonPaths.outputPath
	},
	plugins: [
		new ProgressBar(),
		new HTMLWebpackPlugin({
			template: 'src/index.html'
		}) // Builds and injects an HTML file into the dist folder.
	]
};

module.exports = config;
