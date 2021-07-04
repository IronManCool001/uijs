const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'ui.core.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /\/node_modules\//,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}