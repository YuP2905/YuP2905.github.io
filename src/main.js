import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import elementIcon from './plugins/icons' // 引入element-plus图标(目录和js需要自己创建)
import 'element-plus/theme-chalk/dark/css-vars.css' // 引入element-plus样式

createApp(App).use(store).use(router).use(elementIcon).mount('#app')
