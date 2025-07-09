<template>
  <div>
    <h1>Daftar Produk</h1>
    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          id: 1,
          nama: "Meja Makan Minimalis",
          deskripsi: "Meja kayu jati 6 kursi cocok untuk ruang makan modern.",
          harga: 2500000,
          gambar: "/images/meja.jpg"
        },
        {
          id: 2,
          nama: "Sofa L-Shape Abu",
          deskripsi: "Sofa berbentuk L berbahan kain linen halus dan empuk.",
          harga: 3200000,
          gambar: "/images/sofa.jpg"
        },
        {
          id: 3,
          nama: "Rak Buku Kayu 5 Susun",
          deskripsi: "Rak buku vertikal hemat ruang dengan desain industrial.",
          harga: 750000,
          gambar: "/images/rak-buku.jpg"
        },
        {
          id: 4,
          nama: "Lemari Pakaian 3 Pintu",
          deskripsi: "Lemari modern dengan kaca tengah dan banyak ruang penyimpanan.",
          harga: 1800000,
          gambar: "/images/lemari.jpg"
        },
        {
          id: 5,
          nama: "Meja Belajar Anak",
          deskripsi: "Meja belajar anak dengan laci dan papan tulis kecil.",
          harga: 650000,
          gambar: "/images/meja-belajar.jpg"
        },
        {
          id: 6,
          nama: "Buffet TV Minimalis",
          deskripsi: "Meja TV rendah dengan kabinet penyimpanan serbaguna.",
          harga: 1100000,
          gambar: "/images/tv.jpg"
        },
        {
          id: 7,
          nama: "Kursi Kerja Ergonomis",
          deskripsi: "Kursi kerja dengan sandaran fleksibel dan bisa diatur.",
          harga: 900000,
          gambar: "/images/kursi.jpg"
        },
        {
          id: 8,
          nama: "Meja Kopi Bundar",
          deskripsi: "Meja ruang tamu bulat dengan desain elegan.",
          harga: 550000,
          gambar: "/images/kopi.jpg"
        },
        {
          id: 9,
          nama: "Lemari Dapur Gantung",
          deskripsi: "Lemari dapur kayu untuk penyimpanan di dinding.",
          harga: 1200000,
          gambar: "/images/dapur.jpg"
        },
        {
          id: 10,
          nama: "Rak Sepatu 4 Susun",
          deskripsi: "Rak sepatu hemat tempat dengan kapasitas hingga 12 pasang.",
          harga: 400000,
          gambar: "/images/sepatu.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}
</style>