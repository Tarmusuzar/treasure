<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Trusted by Investors Worldwide</h2>
        <p class="section-subtitle">
          What our clients say about our platforms and services
        </p>
      </div>
      
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="quote-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 16H9.6C9.03995 16 8.75992 16 8.54601 15.891C8.35785 15.7951 8.20487 15.6422 8.10899 15.454C8 15.2401 8 14.9601 8 14.4V9.6C8 9.03995 8 8.75992 8.10899 8.54601C8.20487 8.35785 8.35785 8.20487 8.54601 8.10899C8.75992 8 9.03995 8 9.6 8H14M14 16L10 12L14 8M14 16H16.4C16.9601 16 17.2401 16 17.454 15.891C17.6422 15.7951 17.7951 15.6422 17.891 15.454C18 15.2401 18 14.9601 18 14.4V9.6C18 9.03995 18 8.75992 17.891 8.54601C17.7951 8.35785 17.6422 8.20487 17.454 8.10899C17.2401 8 16.9601 8 16.4 8H14" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="testimonial-text">
              U-Trading's AI tools have completely transformed my crypto strategy. The predictive analytics 
              are incredibly accurate and the automated trading saves me hours every week.
            </p>
          </div>
          <div class="testimonial-author">
            <img src="@/assets/images/testimonial-1.jpg" alt="Sarah K." class="author-avatar">
            <div class="author-info">
              <div class="author-name">Sarah K.</div>
              <div class="author-title">Crypto Portfolio Manager</div>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="quote-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 16H9.6C9.03995 16 8.75992 16 8.54601 15.891C8.35785 15.7951 8.20487 15.6422 8.10899 15.454C8 15.2401 8 14.9601 8 14.4V9.6C8 9.03995 8 8.75992 8.10899 8.54601C8.20487 8.35785 8.35785 8.20487 8.54601 8.10899C8.75992 8 9.03995 8 9.6 8H14M14 16L10 12L14 8M14 16H16.4C16.9601 16 17.2401 16 17.454 15.891C17.6422 15.7951 17.7951 15.6422 17.891 15.454C18 15.2401 18 14.9601 18 14.4V9.6C18 9.03995 18 8.75992 17.891 8.54601C17.7951 8.35785 17.6422 8.20487 17.454 8.10899C17.2401 8 16.9601 8 16.4 8H14" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="testimonial-text">
              Blue Marvels helped us tokenize our real estate assets with incredible efficiency. Their 
              blockchain expertise is unmatched and their team was professional throughout.
            </p>
          </div>
          <div class="testimonial-author">
            <img src="@/assets/images/testimonial-2.jpg" alt="Michael T." class="author-avatar">
            <div class="author-info">
              <div class="author-name">Michael T.</div>
              <div class="author-title">CEO, Real Estate Firm</div>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="quote-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 16H9.6C9.03995 16 8.75992 16 8.54601 15.891C8.35785 15.7951 8.20487 15.6422 8.10899 15.454C8 15.2401 8 14.9601 8 14.4V9.6C8 9.03995 8 8.75992 8.10899 8.54601C8.20487 8.35785 8.35785 8.20487 8.54601 8.10899C8.75992 8 9.03995 8 9.6 8H14M14 16L10 12L14 8M14 16H16.4C16.9601 16 17.2401 16 17.454 15.891C17.6422 15.7951 17.7951 15.6422 17.891 15.454C18 15.2401 18 14.9601 18 14.4V9.6C18 9.03995 18 8.75992 17.891 8.54601C17.7951 8.35785 17.6422 8.20487 17.454 8.10899C17.2401 8 16.9601 8 16.4 8H14" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="testimonial-text">
              The Treasure Advisors SACCO has been instrumental in helping me grow my savings while 
              providing access to affordable loans. Their member-focused approach is refreshing.
            </p>
          </div>
          <div class="testimonial-author">
            <img src="@/assets/images/testimonial-3.jpg" alt="Amina J." class="author-avatar">
            <div class="author-info">
              <div class="author-name">Amina J.</div>
              <div class="author-title">Small Business Owner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeTestimonials'
}
</script>

<style>
.testimonials-section {
  padding: 6rem 2rem;
  background-color: var(--neutral-100);
}

.dark-mode .testimonials-section {
  background-color: var(--neutral-900);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: var(--neutral-200);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease;
  border: 1px solid var(--neutral-300);
}

.dark-mode .testimonial-card {
  background: var(--neutral-800);
  border-color: var(--neutral-700);
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-content {
  margin-bottom: 1.5rem;
  position: relative;
}

.quote-icon {
  position: absolute;
  top: -10px;
  left: -10px;
  opacity: 0.2;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--neutral-700);
  font-style: italic;
  margin-bottom: 1.5rem;
}

.dark-mode .testimonial-text {
  color: var(--neutral-300);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  color: var(--neutral-800);
}

.dark-mode .author-name {
  color: var(--neutral-100);
}

.author-title {
  font-size: 0.9rem;
  color: var(--neutral-600);
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>