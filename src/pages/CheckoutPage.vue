<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Checkout</h1>

    <div v-if="cart.items.length === 0">
      <p class="text-gray-600">Tidak ada produk untuk checkout</p>
    </div>

    <div v-else class="space-y-6">
      <!-- Daftar Item -->
      <div class="cart-list">
  <div
    v-for="item in cart.items"
    :key="item.id"
    class="cart-item"
  >
    <img :src="item.gambar" :alt="item.nama" class="product-image" />
    <div class="item-info">
      <h3 class="font-bold text-lg">{{ item.nama }}</h3>
      <p>{{ item.quantity }} x Rp {{ item.harga.toLocaleString('id-ID') }}</p>
    </div>
  </div>
</div>


      <hr class="my-4 border-gray-400" />

      <p class="text-xl font-semibold">
        Total Bayar: Rp {{ cart.totalPrice.toLocaleString('id-ID') }}
      </p>

      <!-- Form Pembayaran -->
      <form @submit.prevent="prosesPembayaran" class="space-y-4">
        <div>
          <label class="font-semibold block mb-1">Pilih Metode Pembayaran:</label>
          <select v-model="metode" class="w-full border rounded p-2">
            <optgroup label="Kartu">
              <option value="kartu-bri">Kartu BRI</option>
              <option value="kartu-bca">Kartu BCA</option>
              <option value="kartu-bni">Kartu BNI</option>
              <option value="kartu-mandiri">Kartu Mandiri</option>
            </optgroup>
            <option value="virtual">Virtual Account</option>
            <option value="cod">COD (Bayar di Tempat)</option>
            <option value="qris">QRIS</option>
          </select>
        </div>

        <div v-if="metode.startsWith('kartu')" class="space-y-2">
          <input v-model="kartu.nama" placeholder="Nama di Kartu" class="w-full border p-2 rounded" />
          <input v-model="kartu.nomor" placeholder="Nomor Kartu" class="w-full border p-2 rounded" />
          <div class="flex space-x-2">
            <input v-model="kartu.exp" placeholder="MM/YY" class="w-1/2 border p-2 rounded" />
            <input v-model="kartu.cvv" placeholder="CVV" class="w-1/2 border p-2 rounded" />
          </div>
        </div>

        <button
          type="submit"
          class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Konfirmasi Pembayaran
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useCartStore } from '../store/cartStore'

const cart = useCartStore()
const router = useRouter()
const metode = ref('')
const kartu = ref({
  nama: '',
  nomor: '',
  exp: '',
  cvv: ''
})

function prosesPembayaran() {
  if (!metode.value) {
    alert('Pilih metode pembayaran terlebih dahulu.')
    return
  }

  if (metode.value.startsWith('kartu')) {
    if (!kartu.value.nama || !kartu.value.nomor || !kartu.value.exp || !kartu.value.cvv) {
      alert('Lengkapi semua data kartu.')
      return
    }
  }

  alert('Pembayaran berhasil dengan metode: ' + metode.value)
  cart.clearCart()
  router.push('/beranda')
}
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
  background: #7b9a81; /* bg-gray-800 */
  border: 1px solid #838a71; /* border-gray-700 */
  border-radius: 12px;
  padding: 1rem;
  gap: 1rem;
  align-items: center;
  color: #f0fdf4; /* text-green-50 */
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
}

.product-image:hover {
  transform: scale(1.05);
}

.item-info {
  flex-grow: 1;
}

input {
  outline: none;
}
</style>

