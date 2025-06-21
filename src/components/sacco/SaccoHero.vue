<template>
  <section class="sacco-hero">
    <div class="hero-background"></div>
    
    <div class="hero-container">
      <div class="hero-content">
        
        <h1 class="hero-title">Treasure Advisors <span>SACCO</span></h1>
        <p class="hero-subtitle">Member-focused financial empowerment</p>

        <div class="cta-group" style="padding-bottom: 2rem;">
          <router-link to="/login" class="primary-button">
            Member Login
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <router-link to="/sacco-register" class="secondary-button">
            Join Now
          </router-link>
        </div>
        
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">15K+</div>
            <div class="stat-label">Members</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">$250M+</div>
            <div class="stat-label">Assets</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">98%</div>
            <div class="stat-label">Satisfaction</div>
          </div>
        </div>
        
        <p class="hero-description">
          Our cooperative offers competitive dividend rates, low-interest loans, 
          and financial education to help you achieve your goals.
        </p>
        
        
      </div>
      
      <div class="hero-visual">
        <div class="visual-container">
          <img src="@/assets/images/sacco-icon.png" 
               alt="Financial growth illustration" 
               class="hero-image"
               loading="lazy">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SaccoHero'
}
</script>

<style scoped>
/* Base Styles */
.sacco-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem;
  background-color: var(--neutral-100);
  color: var(--text-primary);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(var(--primary-light-rgb), 0.08) 0%, transparent 100%);
  z-index: 0;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Content Styles */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}


.logo {
  width: 40px;
  height: 40px;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--neutral-900);
}

.hero-title span {
  color: var(--primary);
}

.hero-subtitle {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  line-height: 1.4;
  color: var(--neutral-700);
  margin-bottom: 2rem;
  font-weight: 400;
  max-width: 600px;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--neutral-600);
  margin-bottom: 2.5rem;
  max-width: 500px;
}

/* Stats Grid */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  width: 100%;
  max-width: 500px;
}

.stat-item {
  background: var(--neutral-100);
  border-radius: 12px;
  padding: 1.25rem 1rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--neutral-200);
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--neutral-600);
  font-weight: 500;
}

/* CTA Buttons */
.cta-group {
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: var(--primary);
  color: white;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.primary-button:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.secondary-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.secondary-button:hover {
  background: rgba(var(--primary-rgb), 0.08);
  transform: translateY(-2px);
}

/* Visual Elements */
.hero-visual {
  position: relative;
  height: 400px;
  margin-top: 2rem;
}

.visual-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.hero-image {
  height: 100%;
  width: auto;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
}

/* Responsive Styles */
@media (min-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  
  .hero-visual {
    margin-top: 0;
    height: 500px;
  }
  
  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .sacco-hero {
    padding: 6rem 1rem;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stat-item {
    padding: 1rem;
  }
  
  .cta-group {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .primary-button,
  .secondary-button {
    width: 100%;
    justify-content: center;
  }
  
  .hero-visual {
    height: 300px;
  }
}

/* Animation */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-image {
  animation: float 6s ease-in-out infinite;
}
</style>