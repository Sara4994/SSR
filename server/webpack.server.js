const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/server.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build')
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
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                  NODE_ENV: JSON.stringify("production")
                }
            })
        ],
    }
}