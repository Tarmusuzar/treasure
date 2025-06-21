<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number" ref="tradingVolume">$0B+</div>
          <div class="stat-label">24h Trading Volume</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" ref="activeUsers">0K+</div>
          <div class="stat-label">Active Users</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" ref="assetsSupported">0+</div>
          <div class="stat-label">Crypto Assets</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" ref="saccoMembers">0K+</div>
          <div class="stat-label">SACCO Members</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'StatsCounter',
  setup() {
    const tradingVolume = ref(null)
    const activeUsers = ref(null)
    const assetsSupported = ref(null)
    const saccoMembers = ref(null)
    
    const animateValue = (el, start, end, duration) => {
      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        const value = Math.floor(progress * (end - start) + start)
        el.textContent = end >= 1000 ? `$${(value/1000).toFixed(1)}B+` : `${value}${end >= 100 ? 'K+' : '+'}`
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
    
    onMounted(() => {
      animateValue(tradingVolume.value, 0, 4500, 2000)
      animateValue(activeUsers.value, 0, 250, 1500)
      animateValue(assetsSupported.value, 0, 120, 1000)
      animateValue(saccoMembers.value, 0, 35, 1800)
    })
    
    return {
      tradingVolume,
      activeUsers,
      assetsSupported,
      saccoMembers
    }
  }
}
</script>

<style>
.stats-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  padding: 1.5rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  gap: 1.5rem;
  text-align: center;
  padding: 0 1rem;
  max-width: 300px;
    margin: 0 auto;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}
</style>