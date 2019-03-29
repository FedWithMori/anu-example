const path = require('path');

const resolve = (dir) => (
    path.resolve(__dirname, dir)
)

module.exports = {
    entry: {
        app: resolve('../src/main.js')
    },
    output: {
        path: resolve('../dist'),
        publicPath: '/',
        filename: 'js/[name]-[hash:6].js',
        chunkFilename: 'js/[name]-[chunkhash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: [
                    'thread-loader',
                    'babel-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'thread-loader',
                    'style-loader',
                    'css-lodaer',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'thread-loader',
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8012
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css'],
        alias: {
            // 替换react
            react: 'anujs/dist/ReactIE.js',
            'react-dom': 'anujs/dist/ReactIE.js',
            'prop-types': 'anujs/lib/ReactPropTypes',
            'create-react-class': 'anujs/lib/createClass.js',
            less: resolve('../src/styles'),
            utils: resolve('../src/utils'),
            components: resolve('../src/components'),
            containers: resolve('../src/containers'),
            '@redux': resolve('../src/redux'),
            '@': resolve('../src')
        }
    }
}