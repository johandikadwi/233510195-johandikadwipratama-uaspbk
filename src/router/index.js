import { createRouter, createWebHistory } from 'vue-router'

// Import komponen halaman
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import ProductList from '../pages/ProductList.vue'
import CartPage from '../pages/CartPage.vue'
import CheckoutPage from '../pages/CheckoutPage.vue'

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/beranda',
        name: 'Beranda',
        component: HomePage
    },
    {
        path: '/produk',
        name: 'Produk',
        component: ProductList
    },
    {
        path: '/keranjang',
        name: 'Keranjang',
        component: CartPage
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: CheckoutPage
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/beranda' // Jika path tidak ditemukan
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Navigation Guard untuk autentikasi
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

    if (to.name !== 'Login' && !isLoggedIn) {
        next({ name: 'Login' })
    } else if (to.name === 'Login' && isLoggedIn) {
        next({ name: 'Beranda' })
    } else {
        next()
    }
})

export default router