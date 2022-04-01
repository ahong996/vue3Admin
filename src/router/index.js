import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            alias:'/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        }
    ]
})

export default router