<template>
  <div class="cart-page">
    <h2 class="title">🛒 Keranjang Anda</h2>

    <div v-if="store.cart.length === 0" class="empty">Keranjang masih kosong.</div>
    <div v-else class="cart-list">
      <div v-for="item in store.cart" :key="item.id" class="cart-item">
        <p>{{ item.name }} - Rp{{ item.price.toLocaleString() }}</p>
        <button class="btn-remove" @click="remove(item.id)">Hapus</button>
      </div>

      <p class="total">Total: Rp{{ store.totalCartPrice.toLocaleString() }}</p>

      <button class="btn-order" @click="pesan">Pesan Sekarang</button>
    </div>
  </div>
</template>

<script setup>
import { useFoodStore } from '@/store/foodStore'
import { useRouter } from 'vue-router'

const store = useFoodStore()
const router = useRouter()

function remove(id) {
  store.removeFromCart(id)
}

function pesan() {
  const orderData = {
    items: [...store.cart],
    total: store.totalCartPrice,
    timestamp: new Date().toISOString()
  }

  store.placeOrder(orderData)
  router.push('/orders')
}
</script>

<style scoped>
.cart-page {
  background-color: #fff8f5;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.title {
  font-size: 2rem;
  color: #b71c1c;
  text-align: center;
  margin-bottom: 1.5rem;
}

.empty {
  text-align: center;
  color: #999;
  font-size: 1.2rem;
}

.cart-list {
  max-width: 500px;
  margin: 0 auto;
}

.cart-item {
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 2px solid #f8d7da;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-remove {
  background-color: #e57373;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
}

.btn-remove:hover {
  background-color: #c62828;
}

.total {
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
}

.btn-order {
  margin-top: 1rem;
  width: 100%;
  background-color: #d32f2f;
  color: white;
  padding: 0.6rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-order:hover {
  background-color: #b71c1c;
}
</style>
