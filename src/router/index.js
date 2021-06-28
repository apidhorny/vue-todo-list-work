import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/list',
        name: 'List',
        component: () => import('/src/views/List.vue'),
    },
    {
        path: '/task/:id',
        name: 'task',
        component: () => import('/src/views/Task.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
