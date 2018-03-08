
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        library: 'vueRule',
        libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        less: ExtractTextPlugin.extract({
                            use: ['css-loader?minimize', 'postcss-loader', 'less-loader'],
                            fallback: 'vue-style-loader'
                        }),
                        css: ExtractTextPlugin.extract({
                            use: ['css-loader', 'postcss-loader'],
                            fallback: 'vue-style-loader'
                        }),
                    }
                }
			},
			{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'postcss-loader'],
                    fallback: 'style-loader'
                })
            },

            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    use: ['postcss-loader', 'less-loader'],
                    fallback: 'style-loader'
                })
            },
			{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                },
                exclude: [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'bower_components')
				]
			},
			{
                test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
                loader: 'url-loader',
                query: {
                    limit: 30000,
                    name: '[name].[ext]?[hash]'
                }
            }
		]
	},
	plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
		}),
		new ExtractTextPlugin({
            filename: path.join('css/[name].[hash].css'),
            publicPath: __dirname + 'css',
            allChunks: true
        }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: path.join(__dirname, './index.html')
        // }),
    ],
	resolve: {
		extensions: ['.json', '.js', '.vue'],
		alias: {
            'vue': 'vue/dist/vue.esm.js',
            'src': path.resolve(__dirname, './src'),
        }
	},
	devtool: 'source-map',
	devServer: {
		publicPath: path.join('/dist/')
	}
};