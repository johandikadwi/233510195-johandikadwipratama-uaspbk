<template>
  <div class="bg-cream min-h-screen">
    <!-- NAVBAR -->
    <nav class="bg-red-700 text-white px-6 py-4 flex justify-center gap-4 shadow-md">
      <router-link to="/" class="nav-btn" active-class="nav-btn-active">🏠 Beranda</router-link>
      <router-link to="/menu" class="nav-btn" active-class="nav-btn-active">🍔 Menu</router-link>
      <router-link to="/cart" class="nav-btn" active-class="nav-btn-active">🛒 Keranjang</router-link>
      <router-link to="/orders" class="nav-btn" active-class="nav-btn-active">📦 Pesanan</router-link>
      <router-link to="/admin/login" class="nav-btn" active-class="nav-btn-active">🔐 Admin</router-link>
    </nav>

    <!-- Halaman Konten -->
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>
<style scoped>
.bg-cream {
  background-color: #fdf4dc;
}

.nav-btn {
  @apply px-4 py-2 bg-white text-red-700 font-semibold rounded-full shadow transition duration-300 hover:bg-red-100;
}

.nav-btn-active {
  @apply bg-red-900 text-white;
}
</style>
