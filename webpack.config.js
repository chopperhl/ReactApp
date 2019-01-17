const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyESPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin('styles/[name][hash].css');
const extractLess = new ExtractTextPlugin('styles/[name][hash]-less.css');


const config = {
        mode: "development",
        entry: './src/index.js',
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            stats: "errors-only",
            hot: true,
            inline: true,
            disableHostCheck: true,
            historyApiFallback: true
        },
        output: {
            filename: '[hash].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            extensions: [".js", ".jsx", ".css", ".less"],
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name].[hash:7].[ext]'
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader', {
                        loader: "postcss-loader", options: {
                            plugins: [require("autoprefixer")("last 2 versions")]
                        }
                    }]
                },
                {
                    test: /\.less$/,
                    use: ['style-loader', 'css-loader', {
                        loader: "postcss-loader", options: {
                            plugins: [require("autoprefixer")("last 2 versions")]
                        }
                    }, {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            javascriptEnabled: true,
                        }
                    }]
                },
                {
                    test: /\.js|jsx$/, use: [{
                        loader: "babel-loader",
                        options: {
                            presets: [[
                                "env", {
                                    targets: {
                                        browsers: ['> 1%', 'last 2 versions']
                                    }
                                }], "react", "stage-2"
                            ]
                        }
                    }],
                    exclude: /node_modules/
                },
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new CleanWebpackPlugin(
                ['dist/*'], {
                    root: __dirname,
                    verbose: true,
                    dry: false
                }
            ),
            new UglifyESPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_console: true,
                        collapse_vars: true,
                        reduce_vars: true,
                    },
                    output: {
                        beautify: false,
                        comments: false,
                    }
                }
            }),
            new HtmlWebpackPlugin({template: './template/index.html'})
        ],
        optimization: {
            splitChunks: {
                chunks: 'initial',
                minSize: 30000,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '-',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        }
    }
;

module.exports = config;