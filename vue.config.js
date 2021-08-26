const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const path = require('path')

module.exports = {
    publicPath: IS_PRODUCTION
        ? 'https://harrywebapp.herokuapp.com/'
        : '/',
    devServer: {
        proxy: {
            '/api*': {
                // Forward frontend dev server request for /api to flask dev server
                target: 'http://127.0.0.1:5000/'
            }
        }
    },
}