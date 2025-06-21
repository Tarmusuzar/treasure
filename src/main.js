import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Font Awesome CSS (using the free version with classes)
import '@fortawesome/fontawesome-free/css/all.min.css'

// Create Vue app
const app = createApp(App)

// Use router
app.use(router)

// Mount the app
app.mount('#app')

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error:', err, info)
  // Add error tracking service here if needed
}

// Global properties
app.config.globalProperties.$filters = {
  formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value)
  },
  formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
}