<template>
  <section class="features-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Comprehensive Solutions</h2>
        <p class="section-subtitle">
          Innovative financial products designed for both crypto enthusiasts and traditional investors
        </p>
      </div>
      
      <div class="features-grid">
        <!-- UTrading Feature -->
        <div class="feature-card">
          <div class="feature-icon">
            <img src="@/assets/images/utrading-icon.png" alt="UTrading">
          </div>
          <h3 class="feature-title">U-Trading Platform</h3>
          <p class="feature-description">
            AI-powered crypto trading platform with institutional-grade tools, real-time analytics, 
            and automated trading strategies.
          </p>
          <router-link to="/utrading" class="feature-link">
            Explore U-Trading <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        
        <!-- Blue Marvels Feature -->
        <div class="feature-card">
          <div class="feature-icon">
            <img src="@/assets/images/bluemarvels-icon.png" alt="Blue Marvels">
          </div>
          <h3 class="feature-title">Blue Marvels</h3>
          <p class="feature-description">
            Cutting-edge blockchain solutions and tokenization services for businesses entering 
            the Web3 space.
          </p>
          <router-link to="/bluemarvels" class="feature-link">
            Discover Blue Marvels <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        
        <!-- SACCO Feature -->
        <div class="feature-card">
          <div class="feature-icon">
            <img src="@/assets/images/sacco-icon.png" alt="SACCO">
          </div>
          <h3 class="feature-title">Treasure Advisors SACCO</h3>
          <p class="feature-description">
            Member-owned financial cooperative offering savings accounts, affordable loans, 
            and investment opportunities.
          </p>
          <router-link to="/sacco" class="feature-link">
            Join Our SACCO <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeFeatures'
}
</script>

<style>
.features-section {
  padding: 6rem 2rem;
  background-color: var(--neutral-200);
}

.dark-mode .features-section {
  background-color: var(--neutral-800);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--neutral-800);
}

.dark-mode .section-title {
  color: var(--neutral-100);
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--neutral-600);
  max-width: 700px;
  margin: 0 auto;
}

.dark-mode .section-subtitle {
  color: var(--neutral-400);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--neutral-100);
  border-radius: 12px;
  padding: 2.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--neutral-300);
}

.dark-mode .feature-card {
  background: var(--neutral-700);
  border-color: var(--neutral-600);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-icon img {
  width: 40px;
  height: 40px;
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--neutral-800);
}

.dark-mode .feature-title {
  color: var(--neutral-100);
}

.feature-description {
  color: var(--neutral-600);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.dark-mode .feature-description {
  color: var(--neutral-400);
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.feature-link:hover {
  color: var(--primary-dark);
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 2rem;
  }
}
</style>