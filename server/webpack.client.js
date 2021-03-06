const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'node',
    entry: './src/client/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions'] } } ]
                    ]
                }
            }
        ],

    }
}