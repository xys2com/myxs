const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite:{
          '^/api':'/'
        }
      },
    },
  },
  productionSourceMap: !process.env.NODE_ENV === 'production',
  chainWebpack (config) {
    // #添加路径别名
    config.resolve.alias
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@styles', resolve('src/assets/styles'))
      .set('@ipfs', resolve('src/assets/js/ipfs-index.js'))

    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },

  pluginOptions: {
    // #全局样式
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolve('src/assets/styles/scss/theme.scss')]
    }
  }
}
