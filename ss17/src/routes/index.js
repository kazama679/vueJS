import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import Feedback from '@/views/Feedback.vue'
import HomePage from '@/views/HomePage.vue'
import Profile from '@/views/Profile.vue'
import User from '@/views/User.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            alias: ['/home', '/homePage', '/trang-chu'],
            component: import(/* webpackChunkName: "home" */"@/views/HomePage.vue"),
            name: 'home',
        },
        {
            path: '/about',
            component: import(/* webpackChunkName: "about" */"@/views/AboutPage.vue"),
            name: 'about'
        },
        {
            path: '/contact',
            component: import(/* webpackChunkName: "contact" */"@/views/ContactPage.vue"),
            name: 'contact',
        },
        {
            path: '/feedback',
            component: import(/* webpackChunkName: "feedback" */"@/views/Feedback.vue"),
            name: 'feedback'
        },
        {
            path: '/user/:id',
            component: import(/* webpackChunkName: "user" */"@/views/User.vue"),
            name: 'user',
            redirect: (to) => `/profile/${to.params.id}`
        },
        {
            path: '/profile/:id',
            component: import(/* webpackChunkName: "profile" */"@/views/Profile.vue"),
            name: 'profile'
        },
        {
            path: '/listProduct',
            component: import(/* webpackChunkName: "listProduct" */"@/views/ListProduct.vue"),
            name: 'listProduct',
        },
        {
            path: '/:pathMatch(.*)*',
            component: import(/* webpackChunkName: "listProduct" */"@/views/NotFound.vue"),
            name: 'notFound',
        },
        {
            path: '/admin',
            component: import(/* webpackChunkName: "admin" */"@/views/AdminIndex.vue"),
            name: 'admin',
            beforeEnter: (to, from, next)=>{
                const isAuthenticcation =true;
                if(isAuthenticcation){
                    //cho phép chuyển vào admin
                    next()
                }else{
                    next('/')   
                }
            },
            children: [
                {
                    path: 'dashboard',
                    component: import(/* webpackChunkName: "dashboard" */"@/views/Dashboard.vue"),
                    name: 'dashboard'
                },
                {
                    path: 'manager-user',
                    component: import(/* webpackChunkName: "managerUser" */"@/views/ManagerUser.vue"),
                    name: 'managerUser'
                },
                {
                    path: 'manager-product',
                    component: import(/* webpackChunkName: "managerProduct" */"@/views/ManagerProduct.vue"),
                    name: 'managerProduct'
                }
            ]
        }
    ]
})

export default router;