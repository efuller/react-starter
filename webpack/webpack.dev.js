const webpack = require('webpack');

const config = {
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true
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
				use: [
					{
						loader: 'style-loader'
					},
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
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;
