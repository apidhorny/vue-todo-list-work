import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Create',
        component: () => import('/src/views/Create.vue'),
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
