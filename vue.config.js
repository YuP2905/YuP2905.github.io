const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack').default; // 使用 default 导出
const Components = require('unplugin-vue-components/webpack').default; // 同样使用 default
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const path = require('path'); // 引入 path 模块

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,  // post
    proxy: {

    }
  },

  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },

  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'YuPeng\'s Homepage'; // 设置网页标题
      args[0].favicon = path.resolve(__dirname, "public/favicon.ico"); // 设置路径
      return args;
    });
  },
  publicPath: './'

});