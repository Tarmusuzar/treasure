<template>
  <section class="trading-hero">
    <div class="hero-grid">
      <!-- Left Content Column -->
      <div class="content-column">
        <div class="content-wrapper">
          <div class="eyebrow">AI TRADING PLATFORM</div>
          <h1 class="hero-headline">
            <span class="gradient-text">Smarter</span> Trading Through 
            <span class="gradient-text">Machine Intelligence</span>
          </h1>
          
          <p class="hero-subhead">
            Institutional-grade algorithmic strategies powered by deep learning 
            and real-time market analysis.
          </p>
          
          <div class="cta-group">
            <button class="cta-primary">
              <span>Start Free Trial</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 14L12 10L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="cta-secondary">
              <span>Explore Features</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 4.167h7.5a2.5 2.5 0 0 1 2.5 2.5v6.666a2.5 2.5 0 0 1-2.5 2.5H7.5a2.5 2.5 0 0 1-2.5-2.5V6.667a2.5 2.5 0 0 1 2.5-2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="m13.333 10-2.5 2.5-2.5-2.5m2.5-2.5v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div class="metric-grid">
            <div class="metric-card">
              <div class="metric-value">24/7</div>
              <div class="metric-label">Market Coverage</div>
            </div>
            <div class="metric-card">
              <div class="metric-value">95.3%</div>
              <div class="metric-label">Accuracy</div>
            </div>
            <div class="metric-card">
              <div class="metric-value">0.2s</div>
              <div class="metric-label">Execution</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Visual Column -->
      <div class="visual-column">
        <div class="terminal-container">
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="window-controls">
                <span class="control-dot red"></span>
                <span class="control-dot yellow"></span>
                <span class="control-dot green"></span>
              </div>
              <div class="terminal-title">Trading Dashboard</div>
            </div>
            
            <div class="terminal-body">
              <div class="chart-area">
                <div class="chart-line" v-for="n in 5" :key="n" :style="{opacity: 1 - (n * 0.15)}"></div>
                <div class="price-line"></div>
              </div>
              
              <div class="market-ticker">
                <div class="ticker-scroll">
                  <div class="ticker-item" v-for="(ticker, index) in tickerData" :key="index">
                    <span class="symbol">{{ ticker.symbol }}</span>
                    <span class="price" :class="ticker.change >= 0 ? 'up' : 'down'">
                      {{ ticker.price }} <span class="change">{{ ticker.change >= 0 ? '+' : '' }}{{ ticker.change }}%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Floating elements for visual interest -->
    <div class="floating-element circle-1"></div>
    <div class="floating-element circle-2"></div>
    <div class="floating-element square-1"></div>
  </section>
</template>

<script>
export default {
  name: 'TradingHero',
  data() {
    return {
      tickerData: [
        { symbol: 'BTC/USD', price: '42,850.30', change: 2.34 },
        { symbol: 'ETH/USD', price: '2,350.75', change: 1.67 },
        { symbol: 'SOL/USD', price: '98.20', change: -0.45 },
        { symbol: 'AAPL', price: '185.09', change: 0.82 },
        { symbol: 'TSLA', price: '245.60', change: -1.25 },
        { symbol: 'NVDA', price: '680.50', change: 3.12 },
        { symbol: 'AMZN', price: '155.75', change: 0.93 }
      ]
    }
  },
  mounted() {
    this.animateTicker();
  },
  methods: {
    animateTicker() {
      const ticker = document.querySelector('.ticker-scroll');
      if (!ticker) return;
      
      // Clone items for seamless looping
      const items = ticker.innerHTML;
      ticker.innerHTML = items + items;
      
      // Calculate animation duration based on content width
      const width = ticker.scrollWidth / 2;
      ticker.style.animationDuration = `${width / 100}s`;
    }
  }
}
</script>

<style scoped>
.trading-hero {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --primary-light: #dbeafe;
  --secondary: #10b981;
  --accent: #f59e0b;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --terminal-bg: #0f172a;
  --terminal-header: #1e293b;
  --terminal-text: #e2e8f0;
  --up-color: #10b981;
  --down-color: #ef4444;
  
  position: relative;
  padding: 6rem 1.5rem;
  overflow: hidden;
  background-color: #f8fafc;
}

[data-theme="dark"] .trading-hero {
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  background-color: #0f172a;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.content-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-wrapper {
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.eyebrow {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary);
  margin-bottom: 1rem;
}

.hero-headline {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subhead {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 90%;
}

.cta-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.cta-primary, .cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.cta-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
}

.cta-secondary {
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
}

.cta-secondary:hover {
  background: rgba(59, 130, 246, 0.08);
  transform: translateY(-2px);
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 400px;
}

.metric-card {
  padding: 1rem;
  border-radius: 0.5rem;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(4px);
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.metric-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.visual-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.terminal-container {
  perspective: 1000px;
  width: 100%;
  max-width: 700px;
}

.terminal-window {
  background: var(--terminal-bg);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: rotateX(5deg) rotateY(0deg) rotateZ(-1deg);
  transform-style: preserve-3d;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.terminal-header {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: var(--terminal-header);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.window-controls {
  display: flex;
  gap: 0.5rem;
}

.control-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control-dot.red { background: #ff5f56; }
.control-dot.yellow { background: #ffbd2e; }
.control-dot.green { background: #27c93f; }

.terminal-title {
  margin-left: 1rem;
  color: var(--terminal-text);
  font-size: 0.8125rem;
  font-family: 'SF Mono', 'Roboto Mono', monospace;
}

.terminal-body {
  padding: 1.5rem;
}

.chart-area {
  height: 220px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.chart-line {
  height: 1px;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
}

.price-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  animation: price-pulse 3s ease-in-out infinite;
}

.market-ticker {
  overflow: hidden;
  border-radius: 0.375rem;
  background: var(--terminal-header);
}

.ticker-scroll {
  display: flex;
  padding: 1rem 0;
  animation: ticker-scroll 40s linear infinite;
}

.ticker-item {
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  color: var(--terminal-text);
  font-family: 'SF Mono', 'Roboto Mono', monospace;
  font-size: 0.875rem;
  white-space: nowrap;
}

.symbol {
  font-weight: 500;
  margin-right: 0.5rem;
}

.price {
  display: flex;
  align-items: center;
}

.change {
  margin-left: 0.25rem;
  font-size: 0.75rem;
}

.up {
  color: var(--up-color);
}

.down {
  color: var(--down-color);
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1));
  filter: blur(40px);
  z-index: 1;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  left: -100px;
}

.circle-2 {
  width: 400px;
  height: 400px;
  bottom: -150px;
  right: -100px;
}

.square-1 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 30%;
  border-radius: 1rem;
  transform: rotate(45deg);
}

@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes price-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

@media (min-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  
  .content-wrapper {
    margin: 0;
  }
  
  .hero-headline {
    margin-bottom: 2rem;
  }
  
  .hero-subhead {
    margin-bottom: 3rem;
  }
  
  .terminal-window {
    transform: rotateX(5deg) rotateY(5deg) rotateZ(-1deg);
  }
}

@media (min-width: 1024px) {
  .trading-hero {
    padding: 8rem 2rem;
  }
  
  .hero-headline {
    font-size: 3.5rem;
  }
}
@media (max-width: 767px) {
  /* Core overflow prevention */
  html, body, .trading-hero {
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }

  .trading-hero {
    padding: 3rem 1rem;
  }

  /* Grid containment */
  .hero-grid {
    display: flex;
    flex-direction: column;
  }

  /* Text containment */
  .hero-headline,
  .hero-subhead {
    word-break: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }

  /* Button container */
  .cta-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    width: 100%;
    margin: 0 0 2rem 0;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
    padding: 0.75rem 0.5rem;
    font-size: 0.875rem;
    justify-content: center;
  }

  /* Terminal adjustments */
  .terminal-container {
    width: 100vw;
    margin-left: -1rem;
  }

  .terminal-window {
    border-radius: 0;
    transform: none !important;
  }

  /* Marquee ticker with overflow protection */
  .market-ticker {
    position: relative;
    overflow: hidden;
  }

  .ticker-scroll {
    display: flex;
    width: max-content;
    animation: ticker-scroll-mobile 30s linear infinite;
    padding: 1rem 0;
    will-change: transform;
  }

  @keyframes ticker-scroll-mobile {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .ticker-item {
    padding: 0 1.25rem;
    font-size: 0.75rem;
  }

  /* Metric cards */
  .metric-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .metric-card {
    padding: 0.75rem 0.5rem;
  }

  /* Hide decorative elements */
  .floating-element {
    display: none;
  }
}
@media (min-width: 768px) {
  .terminal-container {
    perspective: none;
    transform: none !important;
  }

  .terminal-window {
    transform: none !important;
    border-radius: 0.75rem;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>