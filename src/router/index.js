import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'create',
        component: () => import('/src/views/Create.vue'),
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('/src/views/List.vue'),
    },
<<<<<<< HEAD
=======
    {
        path: '/task/:id',
        name: 'task',
        component: () => import('@/views/Task.vue'),
    },
>>>>>>> e8c8bd6fad38b57c3f176d0e0107aad895bc3c31
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
