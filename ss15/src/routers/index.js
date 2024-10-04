import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import ProductReview from "@/views/ProductReview.vue";
import productView from "@/views/ProductView.vue";
import ProfileView from "@/views/ProfileView.vue";
import Bai1 from "@/views/baitap//Bai1.vue";
import Bai2 from "@/views/baitap//Bai2.vue";
import Bai3 from "@/views/baitap//Bai3.vue";
import Bai4 from "@/views/baitap//Bai4.vue";
import Bai5 from "@/views/baitap//Bai5.vue";

import Bai6 from "@/views/baitap/bai6/Bai6.vue";
import Home from "@/views/baitap/bai6/Home.vue";
import Contact from "@/views/baitap/bai6/Contact.vue";

import Bai7 from "@/views/baitap/bai7/Bai7.vue";
import Home7 from "@/views/baitap/bai7/Home.vue";
import Product from "@/views/baitap/bai7/Product.vue";
import Detail from "@/views/baitap/bai7/Detail.vue";

import Bai8 from "@/views/baitap/bai8/Bai8.vue";
import Product8 from "@/views/baitap/bai8/Product.vue";
import Account from "@/views/baitap/bai8/Account.vue";
import Dashboard from "@/views/baitap/bai8/Dashboard.vue";

import Bai9 from "@/views/baitap/bai9/ListUser.vue";
import bai9Detail from "@/views/baitap/bai9/UserDetail.vue";

import Register from "@/views/baitap/bai11/Register.vue";
import Login from "@/views/baitap/bai11/Login.vue";

import { createRouter, createWebHistory } from "vue-router";

// Định nghĩa các route
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/product',
        name: 'product',
        component: productView,
        children:[
            {
                path: "detail",
                name: 'product-detail',
                component: ProductDetail
            },
            {
                path: "review",
                name: 'product-review',
                component: ProductReview
            }
        ]
    },
    {
        path: '/profile/:id',
        name: 'profileView',
        component: ProfileView
    },
    {
        path: '/bai1',
        name: 'bai1',
        component: Bai1
    },
    {
        path: '/bai2',
        name: 'bai2',
        component: Bai2
    },
    {
        path: '/bai3',
        name: 'bai3',
        component: Bai3
    },
    {
        path: '/bai4',
        name: 'bai4',
        component: Bai4
    },
    {
        path: '/bai5',
        name: 'bai5',
        component: Bai5
    },
    {
        path: '/bai6',
        name: 'bai6',
        component: Bai6,
        children:[
            {
                path: "home",
                name: 'home',
                component: Home
            },
            {
                path: "contact",
                name: 'contact',
                component: Contact
            }
        ]
    },
    {
        path: '/bai7',
        name: 'bai7',
        component: Bai7,
        children:[
            {
                path: "home",
                name: 'home',
                component: Home7
            },
            {
                path: "product",
                name: 'product',
                component: Product
            },
            {
                path: "detail",
                name: 'detail',
                component: Detail
            }
        ]
    },
    {
        path: '/bai8',
        name: 'bai8',
        component: Bai8,
        children:[
            {
                path: "account",
                name: 'account',
                component: Account
            },
            {
                path: "product",
                name: 'product',
                component: Product8
            },
            {
                path: "dashboard",
                name: 'dashboard',
                component: Dashboard
            }
        ]
    },
    {
        path: '/bai9',
        name: 'bai9',
        component: Bai9,
    },
    {
        path: '/bai9/:id',
        name: 'bai9Detail',
        component: bai9Detail,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    }
]

// tạo cơ chế định tuyến cho ứng dụng
const router = createRouter({
    history: createWebHistory(),
    routes
})

// đẩy ra bên ngoài cho ứng dụng sử dụng
export default router;