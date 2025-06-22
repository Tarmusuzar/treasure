<template>
  <div class="modal-overlay" v-if="show" @click.self="closeModal">
    <div class="payment-modal">
      <button class="close-btn" @click="closeModal">
        <i class="fas fa-times"></i>
      </button>
      
      <h2>Pay {{ selectedUtility || 'Utility' }}</h2>
      
      <div class="payment-steps">
        <div class="step" :class="{ active: step === 1 }">
          <div class="step-number">1</div>
          <div class="step-label">Details</div>
        </div>
        <div class="step" :class="{ active: step === 2 }">
          <div class="step-number">2</div>
          <div class="step-label">Payment</div>
        </div>
        <div class="step" :class="{ active: step === 3 }">
          <div class="step-number">3</div>
          <div class="step-label">Confirm</div>
        </div>
      </div>
      
      <div class="step-content">
        <div v-if="step === 1" class="details-step">
          <div class="form-group">
            <label>Account Number</label>
            <input type="text" v-model="accountNumber" placeholder="e.g. UMEME123456">
          </div>
          <div class="form-group">
            <label>Amount (UGX)</label>
            <input type="number" v-model="amount" placeholder="Enter amount">
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" v-model="phoneNumber" placeholder="e.g. 256712345678">
          </div>
          <button class="next-btn" @click="step = 2">Continue to Payment</button>
        </div>
        
        <div v-if="step === 2" class="payment-step">
          <h3>Select Payment Method</h3>
          <div class="payment-methods">
            <div class="method" 
                 v-for="method in paymentMethods" 
                 :key="method.name"
                 @click="selectMethod(method)"
                 :class="{ selected: selectedMethod === method.name }">
              <div class="method-icon">
                <i :class="method.icon"></i>
              </div>
              <div class="method-name">{{ method.name }}</div>
            </div>
          </div>
          <div class="action-buttons">
            <button class="back-btn" @click="step = 1">Back</button>
            <button class="next-btn" @click="step = 3" :disabled="!selectedMethod">
              Continue
            </button>
          </div>
        </div>
        
        <div v-if="step === 3" class="confirm-step">
          <div class="summary">
            <div class="summary-item">
              <span>Utility:</span>
              <span>{{ selectedUtility }}</span>
            </div>
            <div class="summary-item">
              <span>Account:</span>
              <span>{{ accountNumber }}</span>
            </div>
            <div class="summary-item">
              <span>Amount:</span>
              <span>{{ amount }} UGX</span>
            </div>
            <div class="summary-item">
              <span>Payment Method:</span>
              <span>{{ selectedMethod }}</span>
            </div>
            <div class="summary-item total">
              <span>Total:</span>
              <span>{{ amount }} UGX</span>
            </div>
          </div>
          <div class="action-buttons">
            <button class="back-btn" @click="step = 2">Back</button>
            <button class="confirm-btn" @click="processPayment">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentModal',
  props: {
    show: Boolean,
    selectedUtility: String
  },
  data() {
    return {
      step: 1,
      accountNumber: '',
      amount: '',
      phoneNumber: '',
      selectedMethod: '',
      paymentMethods: [
        { name: 'Mobile Money', icon: 'fas fa-mobile-alt' },
        { name: 'Credit Card', icon: 'fas fa-credit-card' },
        { name: 'Bank Transfer', icon: 'fas fa-university' },
        { name: 'Crypto', icon: 'fab fa-bitcoin' },
        { name: 'PayPal', icon: 'fab fa-paypal' },
        { name: 'Airtel Money', icon: 'fas fa-wallet' }
      ]
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.resetForm();
    },
    selectMethod(method) {
      this.selectedMethod = method.name;
    },
    processPayment() {
      // Simulate payment processing
      setTimeout(() => {
        alert(`Payment of ${this.amount} UGX for ${this.selectedUtility} successful!`);
        this.closeModal();
      }, 1500);
    },
    resetForm() {
      this.step = 1;
      this.accountNumber = '';
      this.amount = '';
      this.phoneNumber = '';
      this.selectedMethod = '';
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.payment-modal {
  background: var(--neutral-100);
  border-radius: 1rem;
  width: 95%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.5rem;
  position: relative;
  box-shadow: var(--shadow-xl);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--text-secondary);
}

.payment-modal h2 {
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-align: center;
}

.payment-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: relative;
}

.payment-steps::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--neutral-300);
  z-index: 1;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--neutral-300);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.step.active .step-number {
  background: var(--primary);
  color: white;
}

.step-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.step.active .step-label {
  color: var(--text-primary);
  font-weight: 500;
}

.step-content {
  margin-top: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--neutral-300);
  border-radius: 0.5rem;
  font-size: 1rem;
  background: var(--neutral-200);
  color: var(--text-primary);
}

.next-btn, .confirm-btn {
  width: 100%;
  padding: 0.75rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
}

.next-btn:hover, .confirm-btn:hover {
  background: var(--primary-dark);
}

.payment-methods {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
}

.method {
  padding: 1rem;
  border: 1px solid var(--neutral-300);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--neutral-200);
}

.method:hover {
  border-color: var(--primary-light);
}

.method.selected {
  border-color: var(--primary);
  background: var(--primary-light);
}

.method-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.method.selected .method-icon {
  color: var(--primary-dark);
}

.method-name {
  font-weight: 500;
  color: var(--text-primary);
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.back-btn {
  flex: 1;
  padding: 0.75rem;
  background: var(--neutral-200);
  color: var(--text-primary);
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.back-btn:hover {
  background: var(--neutral-300);
}

.summary {
  background: var(--neutral-200);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.summary-item.total {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--neutral-300);
  font-weight: 600;
  font-size: 1.1rem;
}

[data-theme="dark"] .payment-modal {
  background: var(--dark-neutral-100);
}

[data-theme="dark"] .form-group input,
[data-theme="dark"] .method {
  background: var(--dark-neutral-200);
  border-color: var(--dark-neutral-300);
}

[data-theme="dark"] .back-btn {
  background: var(--dark-neutral-300);
}

[data-theme="dark"] .summary {
  background: var(--dark-neutral-200);
}
</style>