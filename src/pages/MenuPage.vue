<template>
  <div class="menu-container">
    <div class="header">🍽️ Menu Rumah Makan</div>

    <div v-if="store.isLoading" class="loading">Memuat menu...</div>
    <div v-else-if="store.error" class="error">{{ store.error }}</div>
    
    <div v-else class="menu-grid">
      <div v-for="food in store.foods" :key="food.id" class="menu-card">
       <img :src="`/images/${food.image}`" alt="Food" class="menu-img" />
        <h3 class="menu-title">{{ food.name }}</h3>
        <p class="menu-price">Rp{{ food.price.toLocaleString() }}</p>
        <button class="button" @click="addToCart(food)">Tambah ke Keranjang</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFoodStore } from '@/store/foodStore'
const store = useFoodStore()

onMounted(() => {
  store.fetchFoods()
})

function addToCart(food) {
  store.addToCart(food)
}
</script>

<style scoped>
.menu-container {
  background-color: #fff8f5; /* krem */
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.header {
  font-size: 2rem;
  color: #b71c1c;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
}

.loading,
.error {
  text-align: center;
  color: #b71c1c;
  font-size: 1.2rem;
  margin-top: 2rem;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.menu-card {
  background: #fff;
  border: 2px solid #f8d7da;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;
}

.menu-card:hover {
  transform: scale(1.02);
}

.menu-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
}

.menu-title {
  margin: 0.5rem 0;
  color: #b71c1c;
  font-size: 1.1rem;
}

.menu-price {
  color: #555;
  margin-bottom: 0.5rem;
}

.button {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

.button:hover {
  background-color: #b71c1c;
}
</style>
