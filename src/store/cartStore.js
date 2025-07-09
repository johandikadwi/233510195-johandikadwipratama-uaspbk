import CartPage from '../pages/CartPage.vue';

const routes = [
    { path: '/', component: ProductList },
    { path: '/produk/:id', component: ProductDetail },
    { path: '/cart', component: CartPage }
];