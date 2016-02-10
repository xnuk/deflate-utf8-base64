const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
	entry: './compiled/main.js',
	output: {
		path: 'dest',
		filename: 'main.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new HtmlWebpackPlugin({
			template: './static/index.jade',
			inject: 'body'
		})
	],
	module: {
		loaders: [
			{test: /\.jade$/, loader: 'jade-loader'}
		]
	}
}
