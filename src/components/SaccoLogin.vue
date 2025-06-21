<template>
  <div class="auth-container" :class="{ 'dark-mode': darkMode }">
    <div class="auth-card">
      <div class="auth-header">
        <h2>Welcome to Treasure SACCO</h2>
        <p>Banking that grows with you</p>
      </div>

      <div class="auth-options">
        <button class="auth-option" @click="selectedMethod = 'email'">
          <i class="fas fa-envelope"></i>
          <span>Continue with Email</span>
        </button>
        
        <button class="auth-option" @click="selectedMethod = 'google'">
          <i class="fab fa-google"></i>
          <span>Continue with Google</span>
        </button>
        
        <button class="auth-option" @click="selectedMethod = 'phone'">
          <i class="fas fa-mobile-alt"></i>
          <span>Continue with Phone</span>
        </button>
      </div>

      <!-- Email Form -->
      <div class="auth-form" v-if="selectedMethod === 'email'" :class="{ 'form-visible': selectedMethod === 'email' }">
        <h3>Sign {{ isLogin ? 'In' : 'Up' }} with Email</h3>
        <input type="email" v-model="email" placeholder="your@email.com">
        <div class="form-actions">
          <button @click="handleAuth">Continue</button>
          <a href="#" @click.prevent="isLogin = !isLogin">
            {{ isLogin ? 'Need an account? Sign up' : 'Have an account? Sign in' }}
          </a>
        </div>
      </div>

      <!-- Phone Form -->
      <div class="auth-form" v-if="selectedMethod === 'phone'" :class="{ 'form-visible': selectedMethod === 'phone' }">
        <h3>Sign {{ isLogin ? 'In' : 'Up' }} with Phone</h3>
        <div class="phone-input">
          <select v-model="countryCode">
            <option v-for="country in countries" :value="country.code" :key="country" >
              {{ country.flag }} {{ country.code }}
            </option>
          </select>
          <input type="tel" v-model="phoneNumber" placeholder="Phone number">
        </div>
        <div class="form-actions">
          <button @click="handleAuth">Continue</button>
          <a href="#" @click.prevent="isLogin = !isLogin">
            {{ isLogin ? 'Need an account? Sign up' : 'Have an account? Sign in' }}
          </a>
        </div>
      </div>

      <div class="auth-footer">
        <p>By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeAdaptiveAuth',
  props: {
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedMethod: null,
      isLogin: true,
      email: '',
      phoneNumber: '',
      countryCode: '+254',
      countries: [
        { code: '+254', name: 'Kenya', flag: '🇰🇪' },
        { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
        { code: '+256', name: 'Uganda', flag: '🇺🇬' },
        { code: '+250', name: 'Rwanda', flag: '🇷🇼' },
        { code: '+257', name: 'Burundi', flag: '🇧🇮' }
      ]
    }
  },
  methods: {
    handleAuth() {
      if (this.selectedMethod === 'google') {
        this.$emit('google-auth')
        return
      }

      const payload = {
        method: this.selectedMethod,
        isLogin: this.isLogin,
        email: this.email,
        phone: this.countryCode + this.phoneNumber
      }
      this.$emit('submit', payload)
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  padding-top: 6rem; /* Space for navbar */
  background-color: var(--neutral-100);
  transition: background-color 0.3s ease;
}

.auth-card {
  width: 100%;
  max-width: 400px;
  background: var(--neutral-100);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--neutral-200);
  transition: all 0.3s ease;
}

.auth-header {
  margin-bottom: 2rem;
  text-align: center;
}

.auth-header h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--neutral-900);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.auth-header p {
  color: var(--neutral-600);
  font-size: 1rem;
  transition: color 0.3s ease;
}

/* Auth Options */
.auth-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.auth-option {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.875rem;
  border: 1px solid var(--neutral-300);
  border-radius: 8px;
  background: var(--neutral-100);
  color: var(--neutral-800);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.auth-option:hover {
  border-color: var(--neutral-400);
  background: var(--neutral-200);
}

.auth-option i {
  font-size: 1.25rem;
}

/* Forms */
.auth-form {
  margin-top: 1.5rem;
  text-align: left;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.auth-form.form-visible {
  opacity: 1;
  max-height: 500px;
}

.auth-form h3 {
  font-size: 1.25rem;
  color: var(--neutral-900);
  margin-bottom: 1.5rem;
  text-align: center;
  transition: color 0.3s ease;
}

.auth-form input,
.auth-form select {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid var(--neutral-300);
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;
  background: var(--neutral-100);
  color: var(--neutral-900);
  transition: all 0.2s ease;
}

.auth-form input:focus,
.auth-form select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.1);
}

.phone-input {
  display: flex;
  gap: 0.5rem;
}

.phone-input select {
  flex: 0 0 100px;
  cursor: pointer;
}

/* Form Actions */
.form-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.form-actions button {
  width: 100%;
  padding: 0.875rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-actions button:hover {
  background: var(--primary-dark);
}

.form-actions a {
  color: var(--neutral-600);
  font-size: 0.875rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
}

.form-actions a:hover {
  color: var(--primary);
}

/* Footer */
.auth-footer {
  margin-top: 2rem;
  font-size: 0.75rem;
  color: var(--neutral-600);
  text-align: center;
  transition: color 0.3s ease;
}

.auth-footer a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.auth-footer a:hover {
  text-decoration: underline;
}

/* Dark Mode */
.dark-mode .auth-card {
  border-color: var(--neutral-700);
}

.dark-mode .auth-option {
  border-color: var(--neutral-700);
  background: var(--neutral-800);
  color: var(--neutral-200);
}

.dark-mode .auth-option:hover {
  border-color: var(--neutral-600);
  background: var(--neutral-700);
}

.dark-mode .auth-form input,
.dark-mode .auth-form select {
  border-color: var(--neutral-700);
  background: var(--neutral-800);
  color: var(--neutral-100);
}

/* Responsive */
@media (max-width: 480px) {
  .auth-container {
    padding-top: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .auth-card {
    padding: 1.5rem;
  }
  
  .phone-input {
    flex-direction: column;
  }
  
  .phone-input select {
    flex: 1;
    width: 100%;
  }
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>