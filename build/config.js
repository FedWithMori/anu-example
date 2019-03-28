/* eslint-disable */ 
module.exports = {
    dev: {
        host: 'anu-example.com',
        protocol: 'http',
        port: 9010,
        autoOpenBrowser: process.env.NODE_ENV === 'development',
        assetsSubDirectory: '/',
        assetsPublicPath: '/',
        proxyTable: {
            '/api': {
                target: 'http://192.168.128.111:8081',
                pathRewrite: {
                    '^/api': '/mockjsdata/106'
                },
                changeOrigin: true
            }
        },
        cssSourceMap: false
    },

    build: {
        host: 'anu-example.com',
        protocol: 'https',
        port: '',
        autoOpenBrowser: process.env.NODE_ENV === 'production',
        assetsSubDirectory: '/',
        assetsPublicPath: '/',
        proxyTable: {}
    }
};
