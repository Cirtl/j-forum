import { createRouter,createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
    {
        path: '/',
        component: HelloWorld,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
