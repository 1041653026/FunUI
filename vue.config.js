const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    //...
    publicPath: '/',
    //关闭eslint
    lintOnSave: false,
    //...
    chainWebpack: (config) => {
        config.resolve.alias
        .set('@', resolve('src'));
    },
    // devServer: {
    //     proxy: {
    //         '/api' : {
    //             target: 'http://192.168.1.186:30002',
    //             ws: true,
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     }
    // }
}