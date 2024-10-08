import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin',
            component: import(/* webpackChunkName: "admin" */"@/views/Dashboard.vue"),
            name: 'admin'
        },
        {
            path: '/admin/manager-product',
            component: import(/* webpackChunkName: "managerProduct" */"@/views/Product.vue"),
            name: 'managerProduct'
        },
        {
            path: '/admin/manager-category',
            component: import(/* webpackChunkName: "managerCategory" */"@/views/Category.vue"),
            name: 'managerCategory'
        },
    ]
})

export default router;