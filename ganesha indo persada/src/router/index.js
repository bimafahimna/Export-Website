import { createRouter, createWebHistory } from 'vue-router'

import HomeLayout from '../layout/HomeLayout.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeLayout
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

export default router