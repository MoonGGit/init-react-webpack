const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
	mode: prod ? 'production' : 'development',
	devtool: prod ? 'hidden-source-map' : 'source-map',
	entry: path.join(__dirname, 'src', 'index.tsx'),

	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'ts-loader'],
			},
		],
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
	},

	devServer: {
		historyApiFallback: true,
		port: 3000,
		hot: true,
	},

	plugins: [
		new webpack.ProvidePlugin({
			React: 'react',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			title: '웹팩 세팅',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
