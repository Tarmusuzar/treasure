<template>
  <section class="ut-hero">
    <div class="ut-hero-container">
      <div class="ut-hero-content">
        <h1 class="ut-hero-title">AI-Powered Trading Intelligence</h1>
        <p class="ut-hero-subtitle">Algorithmic trading strategies powered by machine learning and institutional-grade analysis</p>
        <div class="ut-hero-cta">
          <button class="ut-primary-btn">Start Free Trial</button>
          <button class="ut-secondary-btn">View Live Demo</button>
        </div>
        <div class="ut-hero-stats">
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Market Monitoring</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">95%</div>
            <div class="stat-label">Accuracy Rate</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">0.2s</div>
            <div class="stat-label">Execution Speed</div>
          </div>
        </div>
      </div>
      <div class="ut-hero-visual">
        <div class="terminal-preview">
          <!-- Terminal visualization would go here -->
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <div class="terminal-title">UTrading Terminal</div>
          </div>
          <div class="terminal-content">
            <div class="chart-placeholder"></div>
            <div class="ticker-tape">
              <span v-for="(ticker, index) in tickers" :key="index" class="ticker-item">
                {{ ticker.symbol }} <span :class="ticker.change >= 0 ? 'up' : 'down'">{{ ticker.change }}%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UTradingHero',
  data() {
    return {
      tickers: [
        { symbol: 'BTC/USD', change: 2.3 },
        { symbol: 'ETH/USD', change: 1.7 },
        { symbol: 'SOL/USD', change: -0.5 },
        { symbol: 'AAPL', change: 0.8 },
        { symbol: 'TSLA', change: -1.2 }
      ]
    }
  }
}
</script>

<style scoped>
.ut-hero {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%);
}

.ut-hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.ut-hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #3a86ff 0%, #2667cc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.ut-hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #4d535e;
  margin-bottom: 2rem;
  max-width: 500px;
}

.ut-hero-cta {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.ut-primary-btn {
  padding: 0.875rem 2rem;
  background: linear-gradient(90deg, #3a86ff 0%, #2667cc 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ut-secondary-btn {
  padding: 0.875rem 2rem;
  background: transparent;
  color: #3a86ff;
  border: 1px solid #3a86ff;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ut-hero-stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3a86ff;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #6d7582;
}

.terminal-preview {
  background: #1a1d21;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  height: 350px;
}

.terminal-header {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #2b3038;
}

.terminal-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.terminal-title {
  margin-left: 1rem;
  color: #a3a9b3;
  font-size: 0.875rem;
}

.chart-placeholder {
  height: 250px;
  background: #1a1d21;
  position: relative;
}

.ticker-tape {
  display: flex;
  overflow-x: auto;
  padding: 1rem;
  gap: 1.5rem;
  background: #2b3038;
}

.ticker-item {
  color: white;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.875rem;
  white-space: nowrap;
}

.up { color: #4cc9a7; }
.down { color: #ff6b35; }

@media (max-width: 1024px) {
  .ut-hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .ut-hero-content {
    order: 1;
    text-align: center;
  }
  
  .ut-hero-stats {
    justify-content: center;
  }
  
  .ut-hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>