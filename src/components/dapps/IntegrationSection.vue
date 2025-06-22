<template>
  <section class="integration-section">
    <div class="integration-content">
      <h2>Seamless Integration with Ugandan Services</h2>
      <p>Our platform connects directly with utility providers across Uganda for instant payments and confirmations.</p>
      
      <div class="features">
        <div class="feature">
          <div class="feature-icon">
            <i class="fas fa-bolt"></i>
          </div>
          <h3>Instant Activation</h3>
          <p>UMEME tokens and NWSC payments activate immediately after payment</p>
        </div>
        
        <div class="feature">
          <div class="feature-icon">
            <i class="fas fa-history"></i>
          </div>
          <h3>Payment History</h3>
          <p>Track all your utility payments in one dashboard</p>
        </div>
        
        <div class="feature">
          <div class="feature-icon">
            <i class="fas fa-bell"></i>
          </div>
          <h3>Auto-Renewal</h3>
          <p>Set up automatic payments for recurring bills</p>
        </div>
      </div>
    </div>
    
    <div class="integration-image">
      <div class="providers">
        <div class="provider" v-for="provider in providers" :key="provider">
          {{ provider }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntegrationComponent',
  data() {
    return {
      providers: [
        'UMEME', 'NWSC', 'MTN', 'Airtel', 
        'DSTV', 'URA', 'UMTC', 'Stanbic', 
        'Centenary', 'Africell', 'Zuku', 'Roke'
      ]
    }
  }
}
</script>

<style scoped>
.integration-section {
  padding: 4rem 1rem;
  background: var(--neutral-100);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.integration-content {
  max-width: 800px;
  text-align: center;
  margin-bottom: 3rem;
}

.integration-content h2 {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.integration-content p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature {
  background: var(--neutral-200);
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

.integration-image {
  width: 100%;
  max-width: 1000px;
}

.providers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.provider {
  padding: 0.5rem 1rem;
  background: var(--neutral-200);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
}

@media (min-width: 1024px) {
  .integration-section {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem 2rem;
  }
  
  .integration-content {
    text-align: left;
    margin-bottom: 0;
    flex: 1;
    padding-right: 2rem;
  }
  
  .integration-content p {
    margin-left: 0;
  }
  
  .integration-image {
    flex: 1;
  }
}

[data-theme="dark"] .integration-section {
  background: var(--dark-neutral-100);
}

[data-theme="dark"] .feature {
  background: var(--dark-neutral-200);
}

[data-theme="dark"] .feature-icon {
  background: var(--dark-primary-light);
  color: var(--dark-primary);
}

[data-theme="dark"] .provider {
  background: var(--dark-neutral-300);
}
</style>