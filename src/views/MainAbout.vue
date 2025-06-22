<template>
  <section class="about-section">
    <div class="about-container">
      <h2>Simplifying Payments for Uganda</h2>
      
      <div class="about-grid">
        <div class="about-card">
          <div class="about-icon">
            <i class="fas fa-bolt"></i>
          </div>
          <h3>Our Mission</h3>
          <p>To make utility payments effortless for every Ugandan through one secure digital platform.</p>
        </div>
        
        <div class="about-card">
          <div class="about-icon">
            <i class="fas fa-hand-holding-heart"></i>
          </div>
          <h3>Our Values</h3>
          <p>Simplicity, reliability, and transparency in every transaction.</p>
        </div>
        
        <div class="about-card">
          <div class="about-icon">
            <i class="fas fa-users"></i>
          </div>
          <h3>Our Team</h3>
          <p>Ugandan fintech experts committed to solving real payment challenges.</p>
        </div>
      </div>
      
      <div class="about-cta">
        <button class="cta-outline" @click="scrollToContact">
          Get In Touch
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  methods: {
    scrollToContact() {
      document.querySelector('.contact-section')?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.about-section {
  padding: 6rem 1rem;
  background: var(--neutral-100);
}

.about-container {
  max-width: 1000px;
  margin: 0 auto;
}

.about-section h2 {
  text-align: center;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  margin-bottom: 3rem;
  color: var(--text-primary);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.about-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--neutral-200);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-sm);
}

.about-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.5rem;
}

.about-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.about-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.about-cta {
  text-align: center;
  margin-top: 2rem;
}

.cta-outline {
  padding: 0.75rem 2rem;
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-outline:hover {
  background: rgba(var(--primary-rgb), 0.05);
}

[data-theme="dark"] .about-section {
  background: var(--dark-neutral-100);
}

[data-theme="dark"] .about-card {
  background: var(--dark-neutral-200);
}

[data-theme="dark"] .about-icon {
  background: var(--dark-primary-light);
  color: var(--dark-primary);
}
</style>