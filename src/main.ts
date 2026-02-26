import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// 1. 创建 Vue 应用实例
const app = createApp(App);

// 2. 挂载路由
app.use(router);

// 3. 挂载到 DOM
app.mount('#app');



