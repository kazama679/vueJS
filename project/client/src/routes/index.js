import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            alias: ['/home', '/homePage', '/trang-chu'],
            component: import(/* webpackChunkName: "home" */"@/views/user/Home.vue"),
            name: 'home'
        },
        {
            path: '/cart',
            component: import(/* webpackChunkName: "cart" */"@/views/user/Cart.vue"),
            name: 'cart'
        },
        {
            path: '/card',
            component: import(/* webpackChunkName: "card" */"@/views/user/Card.vue"),
            name: 'card'
        },
        {
            path: '/login',
            component: import(/* webpackChunkName: "login" */"@/views/user/Login.vue"),
            name: 'login'
        },
        {
            path: '/myLike',
            component: import(/* webpackChunkName: "myLike" */"@/views/user/MyLike.vue"),
            name: 'myLike'
        },
        {
            path: '/myOrder',
            component: import(/* webpackChunkName: "myOrder" */"@/views/user/MyOrder.vue"),
            name: 'myOrder'
        },
        {
            path: '/pay',
            component: import(/* webpackChunkName: "pay" */"@/views/user/Pay.vue"),
            name: 'pay'
        },
        {
            path: '/profile',
            component: import(/* webpackChunkName: "profile" */"@/views/user/Profile.vue"),
            name: 'profile'
        },
        {
            path: '/register',
            component: import(/* webpackChunkName: "register" */"@/views/user/Register.vue"),
            name: 'register'
        },
        {
            path: '/admin',
            alias: ['/admin/dashboard'],
            component: import(/* webpackChunkName: "dashboard" */"@/views/admin/Dashboard.vue"),
            name: 'dashboard'
        },
        {
            path: '/admin/orders',
            component: import(/* webpackChunkName: "orders" */"@/views/admin/Orders.vue"),
            name: 'orders'
        },
        {
            path: '/admin/category',
            component: import(/* webpackChunkName: "category" */"@/views/admin/Category.vue"),
            name: 'category'
        },
        {
            path: '/admin/customer',
            component: import(/* webpackChunkName: "customer" */"@/views/admin/Customer.vue"),
            name: 'customer'
        },
        {
            path: '/admin/products',
            component: import(/* webpackChunkName: "products" */"@/views/admin/Products.vue"),
            name: 'products'
        },
        {
            path: '/admin/setting',
            component: import(/* webpackChunkName: "setting" */"@/views/admin/Setting.vue"),
            name: 'setting'
        },
        // {
        //     path: '/user/:id',
        //     component: User,
        //     name: 'user',
        //     redirect: (to) => `/profile/${to.params.id}`
        // },
        // {
        //     path: '/profile/:id',
        //     component: Profile,
        //     name: 'profile'
        // }
    ]
})

export default router;