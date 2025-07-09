<template>
  <div class="login-page">
    <div class="login-card bounce-in">
      <h1>Login </h1>
      <form @submit.prevent="login">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit" class="glow-button">Masuk</button>
      </form>
      <p v-if="error" class="error shake">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'johan dika dwi pratama' && this.password === '233510195') {
        localStorage.setItem('isLoggedIn', 'true');
        this.$router.push('/beranda');
      } else {
        this.error = 'Username atau password salah!';
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(
      rgba(5, 150, 105, 0.85),
      rgba(15, 118, 110, 0.9)
    ),
    url('/images/bg-money.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: gradientFlow 12s ease infinite;
}

/* Card login */
.login-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  max-width: 380px;
  width: 100%;
  text-align: center;
  color: #f0fdf4;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  animation: bounceIn 0.8s ease;
}

/* Animasi gradasi */
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Bounce animasi saat muncul */
@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.7); }
  60% { transform: scale(1.05); }
  80% { transform: scale(0.98); }
  100% { opacity: 1; transform: scale(1); }
}

/* Input */
input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  color: #f0fdf4;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  transform: scale(1.03);
}

input::placeholder {
  color: #d1fae5;
}

/* Tombol */
button.glow-button {
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(to right, #10b981, #047857);
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.4);
  transition: all 0.3s ease;
}

.glow-button:hover {
  background: linear-gradient(to right, #1c956e, #065f46);
  box-shadow: 0 10px 24px rgba(33, 105, 81, 0.6);
  transform: scale(1.04);
}

/* Error */
.error {
  color: #f87171;
  margin-top: 1rem;
  font-weight: 500;
  animation: shake 0.4s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-6px); }
  40%, 80% { transform: translateX(6px); }
}
</style>