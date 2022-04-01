import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/el-loading.css'
import router from './router'
import store from '@/store'

createApp(App).use(router).use(store).mount('#app')
