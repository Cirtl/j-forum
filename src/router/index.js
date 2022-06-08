import { createRouter,createWebHistory } from 'vue-router'

import AuthLayout from '@/layout/AuthLayout.vue'
import MainLayout from '@/layout/MainLayout.vue'

import Login from '@/view/auth/Login.vue'
import Register from '@/view/auth/Register.vue'

import Index from '@/view/main/Index.vue'

const AuthRouteChild = [
    {
        path: '/auth/sign-in',
        component: Login
    },
    {
        path: '/auth/sign-for',
        component: Register
    }
]

const MainRouteChild = [
    {
        path: '/',
        component: Index
    },
]

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: MainRouteChild
    },
    {
        path: '/auth',
        component: AuthLayout,
        children: AuthRouteChild
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
