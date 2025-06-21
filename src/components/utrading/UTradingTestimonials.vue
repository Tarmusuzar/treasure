<template>
  <section class="ut-testimonials">
    <div class="ut-container">
      <h2 class="ut-section-title">Trusted by Traders Worldwide</h2>
      <p class="ut-section-subtitle">Join thousands of satisfied users automating their trading</p>
      
      <div class="ut-testimonial-grid">
        <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.name">
          <div class="testimonial-rating">
            <i class="fas fa-star" v-for="n in 5" :key="n"></i>
          </div>
          <p class="testimonial-text">"{{ testimonial.text }}"</p>
          <div class="testimonial-author">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="author-avatar">
            <div class="author-info">
              <div class="author-name">{{ testimonial.name }}</div>
              <div class="author-title">{{ testimonial.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UTradingTestimonials',
  data() {
    return {
      testimonials: [
        {
          name: 'Sarah Johnson',
          title: 'Crypto Trader',
          text: 'UTrading has completely transformed my portfolio management. The AI strategies consistently outperform my manual trading.',
          avatar: 'https://randomuser.me/api/portraits/women/43.jpg'
        },
        {
          name: 'Michael Chen',
          title: 'Day Trader',
          text: 'The execution speed and reliability are unmatched. I can finally compete with institutional traders.',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          name: 'David Rodriguez',
          title: 'Hedge Fund Manager',
          text: 'We use UTrading for our quant strategies. The API integration and analytics are enterprise-grade.',
          avatar: 'https://randomuser.me/api/portraits/men/65.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.ut-testimonials {
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

.ut-testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.testimonial-rating {
  color: #ffc107;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #4d535e;
  margin-bottom: 2rem;
  font-style: italic;
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

.author-name {
  font-weight: 600;
  color: #1a1d21;
}

.author-title {
  font-size: 0.875rem;
  color: #6d7582;
}

@media (max-width: 768px) {
  .ut-testimonials {
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