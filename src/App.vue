<template>
  <div id="app">
    <Navbar v-if="$route.path !== '/login'" />

    <main class="main-content">
      <router-view />
    </main>

    <footer v-if="$route.path !== '/login'" class="app-footer">
      Pemrograman Berbasis Komponen 2025 @ Therecya Silitonga - 233510300
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background-image: url('/images/bg-home.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  color: white;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.app-footer {
  text-align: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 0.85rem;
  color: #ddd;
  width: 100%;
}
</style>
