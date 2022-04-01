import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/el-loading.css'
import router from './router'

createApp(App).use(router).mount('#app')
