const path = require('path');
const BaseConfig = require('./webpack.base.js');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (dir) => (
    path.resolve(__dirname, dir)
)

module.exports = Merge(BaseConfig, {
    mode: 'production',
    devtool: null,
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('../index.html')
        })
    ]
})