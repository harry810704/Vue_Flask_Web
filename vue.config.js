const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const path = require('path')

module.exports = {
    publicPath: IS_PRODUCTION
        ? '/harrywebapp/'
        : '/',
    devServer: {
        proxy: {
            '/': {
                // Forward frontend dev server request for /api to flask dev server
                target: 'http://localhost:5000/'
            }
        }
    },
}