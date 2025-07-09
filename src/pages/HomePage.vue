<template>
  <div class="home-container animate-container">
    <img src="/images/logo.png" alt="Logo Jamu" class="logo animate-logo" />
    <h1 class="animate-text">
      <span>Selamat Datang di</span><br />
      <strong> MAKANAN KITA MAKANAN <span class="highlight">Nusantara</span></strong>
    </h1>
    <p class="animate-text">
      LAPAR MAKAN TEMAN KU  
    </p>
    <router-link to="/produk" class="btn animate-btn">Lihat Produk</router-link>
  </div>
</template>



<style scoped>
.home-container {
  text-align: center;
  padding: 2.5rem 1rem;
  background: linear-gradient(135deg, #cce7ff, #e0f7fa);
  border-radius: 20px;
  max-width: 720px;
  margin: 60px auto;
  color: #0f172a;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

/* Logo */
.logo {
  width: 100px;
  margin-bottom: 1.5rem;
  border-radius: 50%;
  border: 3px solid #38bdf8;
  box-shadow: 0 0 16px rgba(56, 189, 248, 0.4);
  background-color: white;
}

/* Logo floating */
.animate-logo {
  animation: floatLogo 3s ease-in-out infinite;
}

@keyframes floatLogo {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Title */
h1 {
  font-size: 2.4rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  line-height: 1.4;
}

.highlight {
  color: #0ea5e9;
  font-style: normal;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(14, 165, 233, 0.2);
}

p {
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 400;
  color: #334155;
  max-width: 480px;
}

/* Button */
.btn {
  margin-top: 2rem;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #3b82f6, #06b6d4);
  color: white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 8px 16px rgba(14, 165, 233, 0.4);
  transition: transform 0.3s ease, background 0.3s ease;
}

.btn:hover {
  background: linear-gradient(to right, #2563eb, #0891b2);
  transform: scale(1.05);
}

/* Animasi masuk */
.animate-container {
  animation: fadeSlideUp 1.2s ease forwards;
  opacity: 0;
}

@keyframes fadeSlideUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-text {
  animation: fadeIn 1.6s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-btn {
  animation: fadeIn 2s ease forwards;
}
</style>
