const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 1226, // 设置新端口号
    host: 'lee.seer.com.cn',
    open: true   // 可选：自动打开浏览器
  },
  chainWebpack: config => {
    config.module
        .rule('hdr')
        .test(/.hdr$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: 'assets/[name].[hash:8].[ext]'
        })
  }
})




