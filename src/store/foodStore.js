// src/store/foodStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFoodStore = defineStore('food', {
    state: () => ({
        foods: [],
        cart: [],
        orders: [],
        isLoading: false,
        error: null
    }),

    getters: {
        totalCartItems: (state) => state.cart.length,
        totalCartPrice: (state) => state.cart.reduce((sum, item) => sum + item.price, 0)
    },

    actions: {
        async fetchFoods() {
            this.isLoading = true
            try {
                const res = await axios.get('http://localhost:3000/foods')
                this.foods = res.data
                this.error = null
            } catch (err) {
                this.error = 'Gagal memuat daftar makanan'
            } finally {
                this.isLoading = false
            }
        },

        async fetchCart() {
            try {
                const res = await axios.get('http://localhost:3000/cart')
                this.cart = res.data
            } catch (err) {
                console.error('Gagal memuat keranjang')
            }
        },

        async addToCart(food) {
            try {
                const res = await axios.post('http://localhost:3000/cart', food)
                this.cart.push(res.data)
            } catch (err) {
                console.error('Gagal menambahkan ke keranjang')
            }
        },

        async removeFromCart(id) {
            try {
                await axios.delete(`http://localhost:3000/cart/${id}`)
                this.cart = this.cart.filter(item => item.id !== id)
            } catch (err) {
                console.error('Gagal menghapus item keranjang')
            }
        },

        async placeOrder(orderData) {
            try {
                await axios.post('http://localhost:3000/orders', orderData)
                this.cart = []
            } catch (err) {
                console.error('Gagal membuat pesanan')
            }
        },

        async fetchOrders() {
            try {
                const res = await axios.get('http://localhost:3000/orders')
                this.orders = res.data
            } catch (err) {
                console.error('Gagal memuat pesanan')
            }
        }
    }
})