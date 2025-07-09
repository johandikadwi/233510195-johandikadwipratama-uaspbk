<template>
  <div>
    <h1>Menu Makanan</h1>
    <div class="menu-list">
      <div
        class="menu-card"
        v-for="item in menu"
        :key="item.id"
        @click="goToDetail(item.id)"
      >
        <img :src="item.gambar" :alt="item.nama" />
        <h3>{{ item.nama }}</h3>
        <p>{{ item.deskripsi }}</p>
        <p><strong>Rp{{ item.harga.toLocaleString('id-ID') }}</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Menu',
  data() {
    return {
      menu: []
    };
  },
  mounted() {
    this.getMenu();
  },
  methods: {
    async getMenu() {
      try {
        const res = await axios.get('http://localhost:3000/products');
        this.menu = res.data;
      } catch (error) {
        console.error('Gagal ambil data:', error);
      }
    },
    goToDetail(id) {
      this.$router.push(`/produk/${id}`);
    }
  }
};
</script>

<style scoped>
.menu-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.menu-card {
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
  text-align: center;
}

.menu-card:hover {
  transform: scale(1.03);
}

.menu-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
