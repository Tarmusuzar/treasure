<template>
  <section class="ut-testimonials">
    <div class="ut-container">
      <h2 class="ut-section-title">Trusted by Traders Worldwide</h2>
      <p class="ut-section-subtitle">Join thousands of satisfied users automating their trading</p>

      <transition name="fade" mode="out-in">
        <div class="testimonial-card" :key="currentTestimonial.name">
          <div class="testimonial-rating">
            <i class="fas fa-star" v-for="n in 5" :key="n"></i>
          </div>
          <p class="testimonial-text">"{{ currentTestimonial.text }}"</p>
          <div class="testimonial-author">
            <img :src="currentTestimonial.avatar" :alt="currentTestimonial.name" class="author-avatar">
            <div class="author-info">
              <div class="author-name">{{ currentTestimonial.name }}</div>
              <div class="author-title">{{ currentTestimonial.title }}</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>


<script>
export default {
  name: 'UTradingTestimonials',
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
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
  },
  computed: {
    currentTestimonial() {
      return this.testimonials[this.currentIndex];
    }
  },
  mounted() {
    this.startRotation();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startRotation() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      }, 5000);
    }
  }
}
</script>

<style scoped>
.ut-testimonials {
  padding: 6rem 2rem;
  background: var(--neutral-200);
  transition: var(--transition);
  text-align: center;
}

.ut-container {
  margin: 0 auto;
}

.ut-section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.ut-section-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 4rem;
}

.testimonial-card {
  background: var(--neutral-100);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.testimonial-rating {
  color: var(--accent);
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: var(--text-primary);
}

.author-title {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>