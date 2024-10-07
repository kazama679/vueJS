import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            alias: ['/home'],
            component: import(/* webpackChunkName: "home" */"@/views/Home.vue"),
            name: 'home'
        },
        {
            path: '/about',
            component: import(/* webpackChunkName: "about" */"@/views/About.vue"),
            name: 'about'
        },
        {
            path: '/contact',
            alias: ['/get-in-touch'],
            component: import(/* webpackChunkName: "contact" */"@/views/Contact.vue"),
            name: 'contact'
        },
        {
            path: '/search',
            component: import(/* webpackChunkName: "search" */"@/views/Search.vue"),
            name: 'search'
        },
        {
            path: '/:pathMatch(.*)*',
            component: import(/* webpackChunkName: "notFound" */"@/views/NotFound.vue"),
            name: 'notFound'
        },
        {
            path: '/login',
            component: import(/* webpackChunkName: "login" */"@/views/Login.vue"),
            name: 'login'
        },
        {
            path: '/dashboard',
            component: import(/* webpackChunkName: "dashboard" */"@/views/Dashboard.vue"),
            name: 'dashboard',
            beforeEnter: (to, form, next)=>{
                const isLoggedIn = false;
                if(isLoggedIn){
                    next()
                }else{
                    next('/login')
                }
            }
        },
        {
            path: '/admin',
            component: import(/* webpackChunkName: "admin" */"@/views/bai6/Admin.vue"),
            name: 'admin',
            children:[
                {
                    path: '/admin/manager-user',
                    component: import(/* webpackChunkName: "managerUser" */"@/views/bai6/Users.vue"),
                    name: 'managerUser',
                },
                {
                    path: '/admin/manager-product',
                    component: import(/* webpackChunkName: "managerProduct" */"@/views/bai6/Products.vue"),
                    name: 'managerProduct',
                },
                {
                    path: '/admin/settings',
                    component: import(/* webpackChunkName: "settings" */"@/views/bai6/Settings.vue"),
                    name: 'settings',
                }
            ]
        },
        {
            path: '/posts',
            component: import(/* webpackChunkName: "listPost" */"@/views/bai7/ListPost.vue"),
            name: 'listPost'
        },
        {
            path: '/posts/:id',
            component: import(/* webpackChunkName: "postDetail" */"@/views/bai7/PostDetail.vue"),
            name: 'postDetail',
            beforeEnter: (to, form, next)=>{
                const check = true;
                if(check){
                    next()
                }else{
                    next('/post-not-found')
                }
            }
        },
        {
            path: '/post-not-found',
            component: import(/* webpackChunkName: "postNotFound" */"@/views/bai7/PostNotFound.vue"),
            name: 'postNotFound'
        },
        {
            path: '/list-product',
            component: import(/* webpackChunkName: "listProduct" */"@/views/bai8/ListProduct.vue"),
            name: 'listProduct'
        },
        {
            path: '/product-detail/:id',
            component: import(/* webpackChunkName: "productDeatil" */"@/views/bai8/ProductDeatil.vue"),
            name: 'productDeatil'
        }
    ]
})

export default router;