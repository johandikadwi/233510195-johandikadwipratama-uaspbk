<template>
  <div>
    <h1>Keranjang Belanja</h1>
    <div v-if="cart.items.length === 0">
      <p>Keranjang kosong</p>
    </div>
    <div v-else class="cart-list">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="cart-item"
      >
        <img :src="item.gambar" :alt="item.nama" class="product-image" />
        <div class="item-info">
          <h3>{{ item.nama }}</h3>
          <p>{{ item.deskripsi }}</p>
          <p>Rp {{ item.harga.toLocaleString('id-ID') }} x {{ item.quantity }}</p>
          <div class="quantity-controls">
            <button @click="cart.decrement(item.id)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="cart.increment(item.id)">+</button>
            <button @click="cart.removeFromCart(item.id)" class="delete">Hapus</button>
          </div>
        </div>
      </div>

      <hr />
      <p><strong>Total: Rp {{ cart.totalPrice.toLocaleString('id-ID') }}</strong></p>
      <router-link to="/checkout">
        <button class="checkout-button">Checkout</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cartStore'
const cart = useCartStore()
</script>

<style scoped>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.cart-item {
  display: flex;
  background: #9bad9f;
  border: 1px solid #6c8f87;
  border-radius: 12px;
  padding: 1rem;
  gap: 1rem;
  align-items: center;
  color: #f0fdf4;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

.item-info {
  flex-grow: 1;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.quantity-controls button {
  background-color: #85a2b9;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.quantity-controls .delete {
  background-color: #090b66;
}

.checkout-button {
  background-color: #016363;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
}
</style>
