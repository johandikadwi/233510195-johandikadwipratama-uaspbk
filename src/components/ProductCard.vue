<template>
  <div class="card">
    <!-- Notifikasi -->
    <div class="toast" v-if="showToast">
      {{ product.nama }} ditambahkan ke keranjang!
    </div>

    <!-- Gambar Produk -->
    <img :src="product.gambar" :alt="product.nama" class="product-image" />

    <!-- Info Produk -->
    <div class="info">
      <h3>{{ product.nama }}</h3>
      <p class="desc">{{ product.deskripsi }}</p>
      <p class="price">Rp {{ product.harga.toLocaleString('id-ID') }}</p>
      <button @click="addToCart">+ Tambah ke Keranjang</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../store/cartStore';
import { ref } from 'vue';

export default {
  props: {
    product: Object
  },
  setup(props) {
    const cart = useCartStore();
    const showToast = ref(false);

    const addToCart = () => {
      cart.addToCart(props.product);
      showToast.value = true;
      setTimeout(() => {
        showToast.value = false;
      }, 2000); // Sembunyikan setelah 2 detik
    };

    return { addToCart, showToast };
  }
};
</script>

<style scoped>
.card {
  background: linear-gradient(145deg, #add8ad, #0f172a);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  color: #f0fdf4;
  position: relative;
  animation: fadeInUp 0.8s ease;
  padding-top: 2rem; /* supaya toast tidak menutupi gambar */
}

.card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5);
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card:hover .product-image {
  transform: scale(1.05);
}

.info {
  padding: 1.2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.info h3 {
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffffff;
}

.desc {
  font-size: 0.95rem;
  color: #cbd5e1;
  line-height: 1.4;
  min-height: 60px;
}

.price {
  font-size: 1.1rem;
  font-weight: 600;
  color: #facc15;
}

button {
  background: linear-gradient(to right, #10b981, #059669);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
  background: linear-gradient(to right, #059669, #047857);
  transform: scale(1.05);
}

/* === Toast Notification === */
.toast {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #16a34a;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  animation: fadeInOut 2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translate(-50%, -10px);
  }
  10% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  90% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -10px);
  }
}
</style>