const webpack = require('webpack');
const path = require('path');

module.exports = {
    target: 'web',
    output:{
        path: path.resolve(__dirname + '/dist'), // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/index')
    ],
    resolve: {
        extensions: ['.ts', '.tsx' , '.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'awesome-typescript-loader'},
            { test: /\.jsx?$/, include: path.join(__dirname, 'src'), use: 'babel-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader'},
            { test: /\.(woff|woff2)$/, resourceQuery: 'url?prefix=font/&limit=5000', use: 'file-loader'},
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, resourceQuery: 'url?limit=10000&mimetype=application/octet-stream', use: 'file-loader'},
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, resourceQuery: 'url?limit=10000&mimetype=image/svg+xml', use: 'file-loader'},
            { test: /(\.css)$/, use: ['style-loader', 'css-loader']}
        ]
    }
};