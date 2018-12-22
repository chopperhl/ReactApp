const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


const config = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: '[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js|jsx$/, use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                }],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './template/index.html'})
    ]
};

module.exports = config;