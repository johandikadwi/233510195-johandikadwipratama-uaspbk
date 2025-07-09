<template>
  <div class="page-wrapper">
    <h1 class="title">Daftar Menu</h1>
    <div class="scroll-menu-wrapper">
      <div
        v-for="product in products"
        :key="product.id"
        class="scroll-item"
      >
        <div class="card">
          <img :src="product.gambar" :alt="product.nama" class="product-image" />
          <div class="product-info">
            <h2>{{ product.nama }}</h2>
            <p>{{ product.deskripsi }}</p>
            <h3>Rp {{ product.harga.toLocaleString('id-ID') }}</h3>
            <button @click="addToCart(product)" class="add-button">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../store/cartStore'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const cart = useCartStore()

    const addToCart = (product) => {
      cart.addToCart(product)
    }

    return {
      addToCart
    }
  },
  data() {
    return {
      products: [
        {
          id: 1,
          nama: "Nasi Goreng Spesial",
          deskripsi: "Nasi goreng dengan ayam, telur, dan kerupuk lengkap.",
          harga: 25000,
          gambar: "/images/nasi-goreng.jpg"
        },
        {
          id: 2,
          nama: "Ayam Geprek Level 5",
          deskripsi: "Ayam crispy dengan sambal pedas menggugah selera.",
          harga: 22000,
          gambar: "/images/ayam-geprek.jpg"
        },
        {
          id: 3,
          nama: "Mie Goreng Jawa",
          deskripsi: "Mie goreng khas Jawa dengan sayuran dan telur.",
          harga: 20000,
          gambar: "/images/mie-goreng.jpg"
        },
        {
          id: 4,
          nama: "Sate Ayam",
          deskripsi: "10 tusuk sate ayam dengan bumbu kacang dan lontong.",
          harga: 30000,
          gambar: "/images/sate-ayam.jpg"
        },
        {
          id: 5,
          nama: "Bakso Urat Komplit",
          deskripsi: "Bakso urat, bakso halus, tahu, mie, dan kuah gurih.",
          harga: 23000,
          gambar: "/images/bakso.jpg"
        },
        {
          id: 6,
          nama: "Soto Ayam Lamongan",
          deskripsi: "Soto ayam dengan koya, telur, dan sambal pedas.",
          harga: 25000,
          gambar: "/images/soto.jpg"
        },
        {
          id: 7,
          nama: "Nasi Padang Komplit",
          deskripsi: "Nasi dengan rendang, sayur nangka, sambal, dan kerupuk.",
          harga: 28000,
          gambar: "/images/nasi-padang.jpg"
        },
        {
          id: 8,
          nama: "Gado-Gado",
          deskripsi: "Sayuran rebus, lontong, telur, dan saus kacang.",
          harga: 20000,
          gambar: "/images/gado-gado.jpg"
        },
        {
          id: 9,
          nama: "Es Teh Manis",
          deskripsi: "Minuman segar teh manis dingin.",
          harga: 5000,
          gambar: "/images/es-teh.jpg"
        },
        {
          id: 10,
          nama: "Es Campur",
          deskripsi: "Minuman es dengan campuran buah dan sirup manis.",
          harga: 15000,
          gambar: "/images/es-campur.jpg"
        }
      ]
    }
  }
}
</script>

<style scoped>
.scroll-menu-wrapper {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background: linear-gradient(180deg, #d0eaff, #a4cafe);
}

.scroll-item {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  box-sizing: border-box;
}

.card {
  background: rgb(50, 127, 141);
  max-width: 600px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding-bottom: 1.5rem;
}

.product-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
}

h2 {
  font-size: 1.8rem;
  color: #091536;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.2rem;
  color: #1a3a7e;
  margin-bottom: 1rem;
}

.add-button {
  background-color: #3b82f6;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #1d4ed8;
}
</style>
