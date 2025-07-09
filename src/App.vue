<template>
  <div class="app bg-cream min-h-screen">
    <nav class="p-4 shadow-md bg-red-600 text-white flex justify-between items-center">
      <h1 class="text-xl font-bold">🍽️ WarungKita</h1>
      <div class="flex space-x-4">
        <router-link to="/" class="nav-btn">Beranda</router-link>
        <router-link to="/menu" class="nav-btn">Menu</router-link>
        <router-link to="/cart" class="nav-btn">Keranjang</router-link>
        <router-link to="/orders" class="nav-btn">Pesanan</router-link>
        <router-link to="/admin/login" class="nav-btn">Admin</router-link>
      </div>
    </nav>
    <router-view class="p-6" />
  </div>
</template>

<style scoped>
.bg-cream {
  background-color: #fdf4dc;
}
.nav-btn {
  background-color: #fdf4dc;
  color: #7c0c0c;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s, color 0.3s;
}
.nav-btn:hover {
  background-color: #fff;
  color: #b91c1c;
}
</style>
