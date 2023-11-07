import Vue from 'vue'
import VueRouter from 'vue-router'

import masterData from './masterdata'
import authentication from './authentication'
import user from './user'
import university from './university'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/home/Dashboard.vue')
    },

    ...masterData,
    ...authentication,
    ...user,
    ...university
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
