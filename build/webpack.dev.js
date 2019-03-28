const path = require('path');
const BaseConfig = require('./webpack.base.js');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const es3ifyPlugin = require('es3ify-webpack-plugin');

const resolve = (dir) => (
    path.resolve(__dirname, dir)
)

module.exports = Merge(BaseConfig, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('../index.html')
        }),
        new es3ifyPlugin()
    ]
})
