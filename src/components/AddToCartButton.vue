<template>
  <button
    class="bg-red-600 text-cream-100 hover:bg-red-700 px-4 py-2 rounded-xl shadow-md transition"
    @click="$emit('add-to-cart')"
  >
    Tambah ke Keranjang
  </button>
</template>

<script setup>
// Tidak ada props saat ini, hanya emit event
</script>

<style scoped>
/* Jika ingin custom warna cream */
.text-cream-100 {
  color: #fff8e7;
}
.bg-cream-100 {
  background-color: #fff8e7;
}
</style>
