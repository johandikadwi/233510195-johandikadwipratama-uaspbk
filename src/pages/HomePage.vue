<template>
  <div class="home-container animate-container">
    <img src="/images/logo.png" alt="Logo Jamu" class="logo animate-logo" />
    <h1 class="animate-text">
      <span>Selamat Datang di</span><br />
      <strong>Toko Perabotan <span class="highlight">Nusantara</span></strong>
    </h1>
    <p class="animate-text">
      perabotan dalam negeri dengan kualitas yang keren 
    </p>
    <router-link to="/produk" class="btn animate-btn">Lihat Produk</router-link>
  </div>
</template>


<style scoped>
.home-container {
  text-align: center;
  padding: 40px 15px;
  background: linear-gradient(rgba(47, 37, 17, 0.7), rgba(47, 37, 17, 0.7)), url('/images/bg-home.jpg') no-repeat center center;
  background-size: cover;
  border-radius: 12px;
  max-width: 640px;
  margin: 40px auto;
  color: #fff;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
}

.logo {
  width: 90px;
  margin-bottom: 1.5rem;
  border-radius: 50%;
  border: 3px solid #61a74c;
  box-shadow: 0 0 12px rgba(181, 209, 161, 0.5);
}

/* Animasi Logo */
.animate-logo {
  animation: floatLogo 3s ease-in-out infinite;
}

@keyframes floatLogo {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

h1 {
  font-size: 2.2rem;
  line-height: 1.3;
  font-family: 'Georgia', serif;
}

.highlight {
  color: #61a74c;
  font-style: italic;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

p {
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 300;
  max-width: 400px;
}

.btn {
  margin-top: 2rem;
  display: inline-block;
  padding: 0.7rem 1.4rem;
  background-color: #61a74c;
  color: #000;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn:hover {
  background-color: #1b5d0f;
  transform: scale(1.05);
}

/* Animasi Fade Masuk */
.animate-container {
  animation: fadeSlideUp 1.2s ease forwards;
  opacity: 0;
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-text {
  animation: fadeIn 2s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-btn {
  animation: fadeIn 2.4s ease forwards;
}
</style>