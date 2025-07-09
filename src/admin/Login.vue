<template>
  <div class="login-page min-h-screen flex items-center justify-center bg-cream">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm border border-red-300">
      <h2 class="text-xl font-semibold mb-4 text-red-700 text-center">Login Admin</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="username" type="text" placeholder="Username"
               class="w-full p-2 border border-red-200 rounded mb-4 focus:outline-red-400" required />
        <input v-model="password" type="password" placeholder="Password"
               class="w-full p-2 border border-red-200 rounded mb-4 focus:outline-red-400" required />
        <button type="submit"
                class="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded">
          Login
        </button>
      </form>
      <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  if (username.value === 'admin' && password.value === 'admin123') {
    router.push('/admin/menu')
  } else {
    error.value = 'Username atau password salah'
  }
}
</script>

<style scoped>
.bg-cream {
  background-color: #fffaf0;
}
</style>
