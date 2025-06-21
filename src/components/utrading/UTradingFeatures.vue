<template>
  <section class="ut-features">
    <div class="ut-container">
      <h2 class="ut-section-title">Institutional-Grade Trading Tools</h2>
      <p class="ut-section-subtitle">Access professional trading infrastructure previously only available to hedge funds</p>
      
      <div class="ut-features-grid">
        <div class="ut-feature-card" v-for="feature in features" :key="feature.title">
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UTradingFeatures',
  data() {
    return {
      features: [
        {
          icon: 'fas fa-robot',
          title: 'AI Algorithms',
          description: 'Machine learning models trained on decades of market data'
        },
        {
          icon: 'fas fa-bolt',
          title: 'Instant Execution',
          description: 'Sub-millisecond order routing to major exchanges'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Risk Management',
          description: 'Automated stop-loss and position sizing'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Live Analytics',
          description: 'Real-time performance monitoring and reporting'
        },
        {
          icon: 'fas fa-exchange-alt',
          title: 'Multi-Exchange',
          description: 'Trade across 10+ major crypto exchanges'
        },
        {
          icon: 'fas fa-lock',
          title: 'Secure Vault',
          description: 'Institutional-grade custody solutions'
        }
      ]
    }
  }
}
</script>

<style scoped>
.ut-features {
  padding: 6rem 2rem;
  background: white;
}

.ut-container {
  max-width: 1200px;
  margin: 0 auto;
}

.ut-section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1a1d21;
}

.ut-section-subtitle {
  font-size: 1.25rem;
  text-align: center;
  color: #6d7582;
  max-width: 700px;
  margin: 0 auto 4rem;
}

.ut-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.ut-feature-card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid #e6e9ed;
}

.ut-feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: rgba(58, 134, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #3a86ff;
  font-size: 1.5rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1d21;
}

.feature-description {
  color: #6d7582;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .ut-features {
    padding: 4rem 1.5rem;
  }
  
  .ut-section-title {
    font-size: 2rem;
  }
  
  .ut-section-subtitle {
    font-size: 1.1rem;
  }
}
</style>