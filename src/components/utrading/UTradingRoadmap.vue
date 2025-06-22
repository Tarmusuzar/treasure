<template>
  <section class="ut-roadmap">
    <div class="ut-container">
      <h2 class="ut-section-title">Product Roadmap</h2>
      <p class="ut-section-subtitle">Our commitment to continuous innovation</p>
      
      <div class="ut-timeline">
        <div class="timeline-item" v-for="item in roadmap" :key="item.quarter">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-quarter">{{ item.quarter }}</div>
            <h3 class="timeline-title">{{ item.title }}</h3>
            <ul class="timeline-features">
              <li v-for="feature in item.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UTradingRoadmap',
  data() {
    return {
      roadmap: [
        {
          quarter: 'Q3 2023',
          title: 'Multi-Exchange Support',
          features: [
            'Binance, Coinbase, and Kraken integration',
            'Portfolio rebalancing',
            'Mobile app beta'
          ]
        },
        {
          quarter: 'Q4 2023',
          title: 'Advanced Analytics',
          features: [
            'Custom strategy builder',
            'Backtesting engine',
            'Tax reporting tools'
          ]
        },
        {
          quarter: 'Q1 2024',
          title: 'Institutional Features',
          features: [
            'FIX API connectivity',
            'White-label solutions',
            'Team permissions'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.ut-roadmap {
  padding: 6rem 2rem;
  background: var(--neutral-100);
  transition: var(--transition);
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
  color: var(--text-primary);
}

.ut-section-subtitle {
  font-size: 1.25rem;
  text-align: center;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 4rem;
}

.ut-timeline {
  position: relative;
  max-width: 800px;
  margin: 4rem auto 0;
}

.ut-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: var(--neutral-300);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  top: 0;
  left: 50%;
  width: 20px;
  height: 20px;
  background: var(--primary);
  border-radius: 50%;
  transform: translate(-50%, 0);
  border: 4px solid var(--neutral-100);
  box-shadow: 0 0 0 2px var(--primary);
}

.timeline-content {
  width: calc(50% - 40px);
  padding: 1.5rem;
  background: var(--neutral-200);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: auto;
}

.timeline-quarter {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.timeline-features {
  color: var(--text-secondary);
  line-height: 1.6;
  padding-left: 1.25rem;
}

.timeline-features li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .ut-roadmap {
    padding: 4rem 1.5rem;
  }

  .ut-section-title {
    font-size: 2rem;
  }

  .ut-section-subtitle {
    font-size: 1.1rem;
  }

  .ut-timeline::before {
    left: 20px;
  }

  .timeline-marker {
    left: 20px;
  }

  .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px !important;
  }
}
</style>
