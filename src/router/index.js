import { createRouter,createWebHistory } from 'vue-router'

import AuthLayout from '@/layout/AuthLayout.vue'
import MainLayout from '@/layout/MainLayout.vue'

import Login from '@/view/auth/Login.vue'
import Register from '@/view/auth/Register.vue'

import Index from '@/view/main/Index.vue'
import TopicBody from '@/view/main/TopicBody.vue'

import Default from '@/view/main/Default.vue'
import Searching from '@/view/main/Searching.vue'

const MainRouteChild = [
    {
        path: '/',
        component: Index,
        alias: '/home',
        children: [
            {
                path: '/',
                component: Default,
                alias: 'home',
            },
            {
                path: '/search',
                component: Searching
            }
        ]
    },
    {
        path: '/post',
        component: TopicBody
    }
]

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
