<template>
  <div>
    <div v-if="product">
      <img :src="product.gambar" :alt="product.nama" style="width: 100%; max-width: 400px;" />
      <h2>{{ product.nama }}</h2>
      <p>{{ product.deskripsi }}</p>
      <p>Harga: Rp {{ product.harga.toLocaleString() }}</p>
      <button @click="tambahKeKeranjang">Tambah ke Keranjang</button>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import { useCartStore } from '../store/cartStore';

export default {
  components: { Navbar },
  setup() {
    const route = useRoute();
    const product = ref(null);
    const store = useCartStore();

    const tambahKeKeranjang = () => {
      store.addToCart(product.value);
    };

    onMounted(async () => {
      const res = await axios.get(`http://localhost:3000/produk/${route.params.id}`);
      product.value = res.data;
    });

    return { product, tambahKeKeranjang };
  }
};
</script>