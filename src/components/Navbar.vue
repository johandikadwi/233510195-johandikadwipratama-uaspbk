<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/images/logo.png" alt="Logo" />
      <span>Toko Perabot Nusantara</span>
    </div>
    <div class="nav-links">
      <router-link to="/beranda">Beranda</router-link>
      <router-link to="/produk">Produk</router-link>
      <router-link to="/keranjang">Keranjang</router-link>
      <router-link to="/checkout">Checkout</router-link>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
      <router-link v-else to="/login" class="login-link">Login</router-link>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const isLoggedIn = ref(false);

    onMounted(() => {
      // Ambil status login dari localStorage saat komponen dimuat
      isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true';
    });

    const logout = () => {
      localStorage.removeItem('isLoggedIn');
      isLoggedIn.value = false;
      router.push('/login');
    };

    return { isLoggedIn, logout };
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1d748a; /* fresh green */
  padding: 1rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: #ffffff;
}

.logo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-links a,
.nav-links .login-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: background-color 0.3s ease, transform 0.2s;
}

.nav-links a:hover,
.nav-links .login-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

button {
  background-color: #ef4444; /* red */
  color: #ffffff;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s;
}

button:hover {
  background-color: #dc2626;
  transform: scale(1.05);
}
</style>