var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,use:[{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "env","react"
                        ]
                    }}],
                exclude:/node_modules/
            },
        ]
    }
};