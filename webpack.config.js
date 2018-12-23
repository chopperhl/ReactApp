const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

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
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.less$/,
                    use: ['style-loader', 'css-loader', {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            modifyVars: {
                                'primary-color': '#1DA57A',
                                'link-color': '#1DA57A',
                                'border-radius-base': '2px',
                            },
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
        plugins:
            [
                new webpack.HotModuleReplacementPlugin(),
                new HtmlWebpackPlugin({template: './template/index.html'})
            ]
    }
;

module.exports = config;