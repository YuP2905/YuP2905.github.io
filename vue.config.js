const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack').default; // 使用 default 导出
const Components = require('unplugin-vue-components/webpack').default; // 同样使用 default
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

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
  
});