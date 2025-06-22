<template>
  <section class="crypto-section">
    <div class="crypto-header">
      <h2>Pay with Crypto</h2>
      <p>Connect your wallet and pay utilities with cryptocurrency</p>
    </div>
    
    <div class="wallets">
      <div class="wallet" 
           v-for="wallet in wallets" 
           :key="wallet.name"
           @click="connectWallet(wallet)">
        <div class="wallet-icon">
          <i :class="wallet.icon"></i>
        </div>
        <div class="wallet-info">
          <h3>{{ wallet.name }}</h3>
          <p>{{ wallet.description }}</p>
        </div>
      </div>
    </div>
    
    <div class="crypto-features">
      <div class="feature">
        <div class="feature-icon">
          <i class="fas fa-coins"></i>
        </div>
        <h3>Multi-Chain Support</h3>
        <p>Pay with Bitcoin, Ethereum, USDT and more</p>
      </div>
      
      <div class="feature">
        <div class="feature-icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3>Secure Transactions</h3>
        <p>All transactions are encrypted and secure</p>
      </div>
      
      <div class="feature">
        <div class="feature-icon">
          <i class="fas fa-percentage"></i>
        </div>
        <h3>Low Fees</h3>
        <p>Pay lower fees compared to traditional methods</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CryptoDApps',
  data() {
    return {
      wallets: [
        {
          name: 'MetaMask',
          icon: 'fab fa-ethereum',
          description: 'Connect with your Ethereum wallet'
        },
        {
          name: 'Trust Wallet',
          icon: 'fas fa-wallet',
          description: 'Multi-chain mobile wallet'
        },
        {
          name: 'Binance Chain',
          icon: 'fab fa-btc',
          description: 'Pay with Binance Smart Chain'
        },
        {
          name: 'Coinbase',
          icon: 'fas fa-link',
          description: 'Connect your Coinbase wallet'
        }
      ]
    }
  },
  methods: {
    connectWallet(wallet) {
      alert(`Connecting to ${wallet.name}...`);
      // In a real app, this would trigger the wallet connection flow
    }
  }
}
</script>

<style scoped>
.crypto-section {
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.crypto-header {
  text-align: center;
  margin-bottom: 2rem;
}

.crypto-header h2 {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  margin-bottom: 0.5rem;
  color:  var(--dark-neutral-200);
}

.crypto-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.wallets {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.wallet {
  background: var(--neutral-100);
  border-radius: 0.75rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--neutral-200);
}

.wallet:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.wallet-icon {
  width: 50px;
  height: 50px;
  background: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.5rem;
}

.wallet-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.wallet-info p {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.crypto-features {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.feature {
  background: var(--neutral-100);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-sm);
}

.feature-icon {
  width: 50px;
  height: 50px;
  background: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: var(--primary);
  font-size: 1.25rem;
}

.feature h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.feature p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .wallets, .crypto-features {
    grid-template-columns: 1fr;
  }
}

[data-theme="dark"] .wallet,
[data-theme="dark"] .feature {
  background: var(--dark-neutral-200);
  border-color: var(--dark-neutral-300);
}

[data-theme="dark"] .wallet-icon,
[data-theme="dark"] .feature-icon {
  background: var(--dark-primary-light);
  color: var(--dark-primary);
}
</style>