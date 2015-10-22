'use strict';
let path = require('path');

module.exports = {
    entry: {
        app: ['./app/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                stage: 0
            }
        }]
    }
};
