<template>
  <section class="utilities-section">
    <h2 class="section-title">Pay Utilities with Crypto</h2>
    <p class="section-subtitle">Quick and secure utility payments powered by blockchain</p>
    
    <div class="utilities-grid">
      <div class="utility-card" v-for="utility in utilities" :key="utility.id">
        <div class="utility-icon">
          <i :class="utility.icon"></i>
        </div>
        <h3>{{ utility.name }}</h3>
        <p>{{ utility.description }}</p>
        <button class="pay-btn" @click="openPaymentModal(utility)">
          Pay Now
        </button>
      </div>
    </div>
    
    <PaymentModal 
      v-if="showPaymentModal" 
      :utility="selectedUtility"
      @close="showPaymentModal = false"
    />
  </section>
</template>

<script>
import PaymentModal from '@/components/dapps/PaymentModal.vue'

export default {
  name: 'UtilitiesSection',
  components: {
    PaymentModal
  },
  data() {
    return {
      utilities: [
        {
          id: 1,
          name: 'Electricity Bills',
          icon: 'fas fa-bolt',
          description: 'Pay your electricity bills instantly with crypto',
          paymentOptions: ['BTC', 'ETH', 'USDT']
        },
        {
          id: 2,
          name: 'Water Bills',
          icon: 'fas fa-tint',
          description: 'Settle your water bills securely',
          paymentOptions: ['BTC', 'ETH', 'USDT']
        },
        {
          id: 3,
          name: 'Internet',
          icon: 'fas fa-wifi',
          description: 'Renew your internet subscription',
          paymentOptions: ['BTC', 'ETH', 'USDT']
        },
        {
          id: 4,
          name: 'TV Subscription',
          icon: 'fas fa-tv',
          description: 'Pay for your cable TV services',
          paymentOptions: ['BTC', 'ETH', 'USDT']
        }
      ],
      showPaymentModal: false,
      selectedUtility: null
    }
  },
  methods: {
    openPaymentModal(utility) {
      this.selectedUtility = utility
      this.showPaymentModal = true
    }
  }
}
</script>