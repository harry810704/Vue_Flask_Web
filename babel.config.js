// const IS_PRODUCTION = process.env.NODE_ENV === 'production'
// const path = require('path')
// entry: './src/main.js',
//   output: {
//     path: path.resolve(__dirname + '/dist'), // 打包生成檔案地址，必須是絕對路徑
//     filename: '[name].build.js', // 生成的檔名
//   },
//   publicPath: IS_PRODUCTION
//     ? 'https://harrywebapp.herokuapp.com/'
//     : '/',
//   devServer: {
//     proxy: {
//       '/api*': {
//         // Forward frontend dev server request for /api to flask dev server
//         target: 'http://localhost:5000/'
//       }
//     }
//   },

module.exports = {
  mode: 'production',
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
};
