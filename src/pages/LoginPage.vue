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
  background: linear-gradient(135deg, #0f172a, #1e3a8a);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  position: relative;
}

/* Efek blur + neon */
.login-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/images/bg-money.jpg') center/cover no-repeat;
  filter: blur(18px) brightness(0.4);
  z-index: -2;
}

.login-page::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.5), rgba(59, 130, 246, 0.3));
  backdrop-filter: blur(10px);
  z-index: -1;
}

/* Login card glassmorphism */
.login-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(18px);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  color: #e0f2fe;
  box-shadow: 0 12px 32px rgba(30, 64, 175, 0.4);
  animation: bounceIn 0.8s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Input */
input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: #e0f2fe;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 10px #3b82f6;
  transform: scale(1.03);
}

input::placeholder {
  color: #bae6fd;
}

/* Tombol glow */
button.glow-button {
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(to right, #2563eb, #3b82f6);
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(59, 130, 246, 0.4);
  transition: all 0.3s ease;
}

.glow-button:hover {
  background: linear-gradient(to right, #1d4ed8, #2563eb);
  box-shadow: 0 10px 24px rgba(59, 130, 246, 0.6);
  transform: scale(1.05);
}

/* Animasi muncul */
@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.7); }
  60% { transform: scale(1.05); }
  80% { transform: scale(0.98); }
  100% { opacity: 1; transform: scale(1); }
}

/* Error text */
.error {
  color: #031681;
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
