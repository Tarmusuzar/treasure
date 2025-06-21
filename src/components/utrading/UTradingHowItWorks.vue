<template>
  <section class="ut-process">
    <div class="ut-container">
      <h2 class="ut-section-title">How UTrading Works</h2>
      <p class="ut-section-subtitle">Our three-step process to algorithmic trading success</p>
      
      <div class="ut-process-steps">
        <div class="process-step" v-for="(step, index) in steps" :key="step.title">
          <div class="step-number">0{{ index + 1 }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UTradingHowItWorks',
  data() {
    return {
      steps: [
        {
          title: 'Connect Your Exchange',
          description: 'Securely link your exchange API keys with read-only permissions'
        },
        {
          title: 'Select Strategy',
          description: 'Choose from our library of proven algorithmic trading strategies'
        },
        {
          title: 'Monitor & Profit',
          description: 'Let our AI execute trades while you track performance in real-time'
        }
      ]
    }
  }
}
</script>

<style scoped>
.ut-process {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%);
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

.ut-process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
}

.process-step {
  position: relative;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.step-number {
  font-size: 3rem;
  font-weight: 700;
  color: rgba(58, 134, 255, 0.1);
  position: absolute;
  top: -1.5rem;
  right: 2rem;
  line-height: 1;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1d21;
  position: relative;
  z-index: 1;
}

.step-description {
  color: #6d7582;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .ut-process {
    padding: 4rem 1.5rem;
  }
  
  .ut-section-title {
    font-size: 2rem;
  }
  
  .ut-section-subtitle {
    font-size: 1.1rem;
  }
  
  .ut-process-steps {
    grid-template-columns: 1fr;
  }
}
</style>