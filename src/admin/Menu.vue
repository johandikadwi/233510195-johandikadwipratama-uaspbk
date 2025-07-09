<template>
  <div class="min-h-screen bg-cream p-6">
    <h1 class="text-2xl font-bold text-red-800 mb-4">Admin Menu</h1>

    <div v-if="foods.length === 0" class="text-gray-500">Tidak ada data makanan.</div>

    <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <li v-for="food in foods" :key="food.id" class="bg-white p-4 rounded-lg shadow border border-red-100">
        <h3 class="text-lg font-semibold text-red-700">{{ food.name }}</h3>
        <p class="text-gray-700">Harga: Rp{{ food.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const foods = ref([])

const loadFoods = async () => {
  try {
    const res = await axios.get('http://localhost:3000/foods')
    foods.value = res.data
  } catch (error) {
    console.error('Gagal memuat menu:', error)
  }
}

onMounted(loadFoods)
</script>

<style scoped>
.bg-cream {
  background-color: #fffaf0;
}
</style>
