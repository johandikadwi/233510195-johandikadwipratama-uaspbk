<template>
  <div class="p-4">
    <h1 class="text-xl text-red-700 mb-2">Daftar Pesanan</h1>
    <ul>
      <li v-for="order in store.orders" :key="order.id" class="border p-2 rounded mb-1">
        {{ order.name }} - Total Rp {{ order.total }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFoodStore } from '@/store/foodStore'
const store = useFoodStore()
onMounted(() => store.fetchOrders())
</script>
