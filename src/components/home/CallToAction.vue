<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">Ready to Elevate Your Financial Journey?</h2>
        <p class="cta-text">
          Whether you're interested in crypto trading, blockchain solutions, or traditional savings, 
          Treasure Advisors has the tools and expertise to help you succeed.
        </p>
        <div class="cta-buttons">
          <router-link to="/signup" class="cta-button primary">
            Get Started
          </router-link>
          <router-link to="/contact" class="cta-button secondary">
            Contact Us
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CallToAction'
}
</script>

<style>
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.cta-text {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.cta-button {
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background: white;
  color: var(--primary);
}

.cta-button.primary:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .cta-title {
    font-size: 2rem;
  }
  
  .cta-text {
    font-size: 1.1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>