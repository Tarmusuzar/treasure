<template>
  <section class="hero" :data-theme="theme">
    <div class="hero-bg"></div>

    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line">Bitcoin &</span>
          <span class="title-line accent">Crypto Trading</span>
          <span class="title-line">For Everyone</span>
        </h1>
        
        <p class="hero-subtitle">
          Access professional trading tools, AI-powered analytics, and secure custody 
          solutions trusted by hedge funds and retail traders alike
        </p>
        
        <div class="hero-actions">
          <button class="btn-primary">
            Get Started
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <button class="btn-outline">
            <img src="@/assets/images/utrading-icon.png" alt="Demo" class="btn-icon">
            UTrading
          </button>
        </div>

        <div class="trust-badges">
          <div class="badge">
            <img src="@/assets/images/bluemarvels-icon.png" alt="Regulated">
            <span>Blue Marvels</span>
          </div>
          <div class="badge">
            <img src="@/assets/images/sacco-icon.png" alt="Secure">
            <span>SACCO</span>
          </div>
          <div class="badge">
            <img src="@/assets/images/dapps.png" alt="High Liquidity">
            <span>Pay Utility Bills (DApps)</span>
          </div>
        </div>
      </div>

      <div class="terminal-preview">
        <div class="terminal-glass">
          <img src="@/assets/images/trading-platform.png" alt="Trading Platform" class="terminal-image">
          <div class="glass-overlay"></div>
          <div class="active-indicator">
            <div class="pulse"></div>
            <span>LIVE MARKET DATA</span>
          </div>
        </div>
        
        <div class="crypto-floater btc">
          <img src="@/assets/images/bitcoin.png" alt="Bitcoin">
        </div>
        <div class="crypto-floater eth">
          <img src="@/assets/images/ethereum.png" alt="Ethereum">
        </div>
        <div class="crypto-floater sol">
          <img src="@/assets/images/solana.png" alt="Solana">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FinancialHero',
  data() {
    return {
      theme: 'light' // Default theme
    }
  },
  
  methods: {
    
    animateElements() {
      // Animation logic can be added here if needed
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.hero {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 2rem 2rem;
  background-color: var(--neutral-100);
  color: var(--neutral-900);
  transition: var(--transition);
}

.hero[data-theme="dark"] {
  background-color: var(--neutral-900);
  color: var(--neutral-100);
}

.hero-container {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* Background Animation */
.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 70% 30%, rgba(var(--primary), 0.15) 0%, transparent 50%);
  animation: bg-pulse 12s infinite alternate;
  z-index: 1;
}

@keyframes bg-pulse {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.2); opacity: 0.3; }
}

/* Content Styles */
.hero-content {
  max-width: 600px;
  position: relative;
  z-index: 3;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.title-line {
  display: block;
  overflow: hidden;
  padding: .1rem 0;
}

.accent {
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--neutral-600);
  margin-bottom: 2.5rem;
  max-width: 90%;
}

/* Buttons */
.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: var(--neutral-100);
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-outline {
  background: transparent;
  color: var(--neutral-900);
  border: 1px solid var(--neutral-400);
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hero[data-theme="dark"] .btn-outline {
  color: var(--neutral-100);
  border-color: var(--neutral-600);
}

.btn-outline:hover {
  background: var(--neutral-200);
  border-color: var(--neutral-500);
}

.hero[data-theme="dark"] .btn-outline:hover {
  background: var(--neutral-800);
  border-color: var(--neutral-500);
}

.btn-icon {
  width: 16px;
  height: 16px;
}

/* Trust Badges - Always in one line */
.trust-badges {
  display: flex;
  gap: 0.5rem;
  margin-top: 3rem;
  overflow-x: auto;
  padding-bottom: 8px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE */
}

.trust-badges::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.badge {
  background: var(--neutral-200);
  border: 1px solid var(--neutral-300);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  white-space: nowrap;
  flex-shrink: 0;
}

.hero[data-theme="dark"] .badge {
  background: var(--neutral-800);
  border-color: var(--neutral-700);
}

.badge img {
  width: 16px;
  height: 16px;
  opacity: 0.8;
}

/* Terminal Preview */
.terminal-preview {
  position: relative;
  height: 400px;
  perspective: 1000px;
}

.terminal-glass {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transform-style: preserve-3d;
}

.terminal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.glass-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(var(--primary), 0.1) 0%, rgba(var(--secondary), 0.1) 100%);
  backdrop-filter: blur(2px);
}

.active-indicator {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #ff4d4d;
}

.pulse {
  width: 8px;
  height: 8px;
  background: #ff4d4d;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 77, 77, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(255, 77, 77, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 77, 77, 0); }
}

/* Floating Crypto */
.crypto-floater {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  box-shadow: var(--shadow-md);
}

.crypto-floater img {
  width: 40px;
  height: 40px;
}

.crypto-floater.btc {
  background: linear-gradient(135deg, #f7931a 0%, #f9aa4b 100%);
  top: -10%;
  left: 10%;
}

.crypto-floater.eth {
  background: linear-gradient(135deg, #627eea 0%, #8fa3ea 100%);
  top: 70%;
  left: 80%;
}

.crypto-floater.sol {
  background: linear-gradient(135deg, #00ffbd 0%, #00c2a2 100%);
  top: 40%;
  left: -5%;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hero {
    padding: 100px 1.5rem 4rem;
    min-height: auto;
  }
  
  .hero-title {
    font-size: clamp(2rem, 8vw, 3rem);
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .terminal-preview {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 80px 1rem 3rem;
  }
  
  .terminal-preview {
    height: 250px;
  }
  
  .crypto-floater {
    width: 40px;
    height: 40px;
  }
  
  .crypto-floater img {
    width: 24px;
    height: 24px;
  }
}
</style>