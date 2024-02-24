import { createRouter, createWebHistory } from 'vue-router'
const Shop = () => import('../components/pages/Shop.vue');
const ContactUs = () => import('../components/pages/ContactUs.vue');
const Blog = () => import('../components/pages/Blog.vue');
const BlogSingle = () => import('../components/pages/BlogSingle.vue');
const ProductDetails = () => import('../components/pages/ProductDetails.vue');
const NotFound = () => import('../components/pages/NotFound.vue');
const Home = () => import('../components/pages/Home.vue');

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        alias: '/home'
    },
    {
        path: '/shop',
        name: 'shop',
        component: Shop,
        alias: '/products'
    },
    {
        path: '/product-details',
        name: 'productDetails',
        component: ProductDetails,
    },
    {
        path: '/contact-us',
        name: 'contactUs',
        component: ContactUs
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: '/blog/single',
        name: 'singleBlog',
        component: BlogSingle
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