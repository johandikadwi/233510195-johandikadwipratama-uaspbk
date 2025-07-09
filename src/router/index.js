// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import MenuPage from '@/pages/MenuPage.vue'
import CartPage from '@/pages/CartPage.vue'
import OrderPage from '@/pages/OrderPage.vue'
import AdminLogin from '@/admin/Login.vue'
import AdminMenu from '@/admin/Menu.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/menu', name: 'Menu', component: MenuPage },
    { path: '/cart', name: 'Cart', component: CartPage },
    { path: '/order', name: 'Order', component: OrderPage },
    { path: '/admin/login', name: 'AdminLogin', component: AdminLogin },
    { path: '/admin/menu', name: 'AdminMenu', component: AdminMenu }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router