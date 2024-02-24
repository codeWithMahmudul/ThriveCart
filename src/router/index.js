import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/Home.vue'
import NotFound from '../components/pages/NotFound.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        alias: '/home'
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0, behavior: 'smooth' }
    }
})

export default router