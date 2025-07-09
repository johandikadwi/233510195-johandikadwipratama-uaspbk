// src/store/cartStore.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    getters: {
        totalPrice(state) {
            return state.items.reduce((total, item) => total + item.harga * item.quantity, 0)
        }
    },
    actions: {
        addToCart(product) {
            const found = this.items.find(item => item.id === product.id)
            if (found) {
                found.quantity++
            } else {
                this.items.push({...product, quantity: 1 })
            }
        }
    }
})