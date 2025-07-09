import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    actions: {
        addToCart(product) {
            const existing = this.items.find(item => item.id === product.id)
            if (existing) {
                existing.quantity++
            } else {
                this.items.push({...product, quantity: 1 })
            }
        },
        removeFromCart(id) {
            this.items = this.items.filter(item => item.id !== id)
        },
        increment(id) {
            const item = this.items.find(i => i.id === id)
            if (item) item.quantity++
        },
        decrement(id) {
            const item = this.items.find(i => i.id === id)
            if (item && item.quantity > 1) item.quantity--
                else this.removeFromCart(id)
        },
        clearCart() {
            this.items = []
        }
    },
    getters: {
        totalPrice(state) {
            return state.items.reduce((sum, item) => sum + item.harga * item.quantity, 0)
        }
    }
})