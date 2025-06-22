<template>
  <section class="hero" :style="{ 'padding-top': navHeight + 'px' }">
    <div class="hero-container">
      <div class="hero-content">
        <h1>Pay <span>Uganda Utilities</span> Simply</h1>
        <p class="subtitle">One platform for all your bills - fast, secure, reliable</p>
        
        <div class="cta-container">
          <button class="cta-primary" @click="scrollToPayments">
            Start Paying Now
          </button>
        </div>
      </div>
      
      <div class="circular-utilities">
        <div class="central-logo">
          <i class="fas fa-wallet"></i>
        </div>
        <div class="orbiting-utility" 
             v-for="(utility, index) in utilities" 
             :key="utility.name"
             :style="getOrbitStyle(index)">
          <div class="utility-badge">
            <i :class="utility.icon"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    navHeight: {
      type: Number,
      default: 80
    }
  },
  data() {
    return {
      rotation: 0,
      utilities: [
        { name: 'UMEME', icon: 'fas fa-bolt' },
        { name: 'NWSC', icon: 'fas fa-tint' },
        { name: 'MTN', icon: 'fas fa-wifi' },
        { name: 'Airtel', icon: 'fas fa-mobile-alt' },
        { name: 'DSTV', icon: 'fas fa-tv' },
        { name: 'Zuku', icon: 'fas fa-satellite-dish' },
        { name: 'URA', icon: 'fas fa-landmark' },
        { name: 'UNEB', icon: 'fas fa-graduation-cap' },
        { name: 'KCCA', icon: 'fas fa-city' },
        { name: 'PayTV', icon: 'fas fa-film' },
        { name: 'Roke', icon: 'fas fa-broadcast-tower' },
        { name: 'Africell', icon: 'fas fa-phone' }
      ]
    }
  },
  methods: {
    scrollToPayments() {
      const section = document.querySelector('.utilities-section');
      if (section) {
        window.scrollTo({
          top: section.offsetTop - this.navHeight,
          behavior: 'smooth'
        });
      }
    },
    getOrbitStyle(index) {
      const angle = (index / this.utilities.length) * Math.PI * 2 + this.rotation;
      const radius = 120;
      return {
        transform: `translate(calc(${Math.cos(angle) * radius}px - 50%), calc(${Math.sin(angle) * radius}px - 50%)`
      };
    },
    animateOrbit() {
      requestAnimationFrame(() => {
        this.rotation += 0.002;
        this.animateOrbit();
      });
    }
  },
  mounted() {
    this.animateOrbit();
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  padding: 2rem 1rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--neutral-100);
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.hero-content {
  text-align: center;
  max-width: 600px;
}

.hero h1 {
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.hero h1 span {
  color: var(--primary);
  position: relative;
}

.hero h1 span::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 6px;
  background: rgba(var(--primary-rgb), 0.15);
  z-index: -1;
  border-radius: 3px;
}

.subtitle {
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.cta-container {
  display: flex;
  justify-content: center;
}

.cta-primary {
  padding: 0.875rem 2rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.15);
}

.circular-utilities {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.central-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.75rem;
  z-index: 2;
  box-shadow: 0 0 0 10px rgba(var(--primary-rgb), 0.1);
}

.orbiting-utility {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  transition: transform 0.5s ease-out;
}

.utility-badge {
  width: 100%;
  height: 100%;
  background: var(--neutral-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.25rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  border: 1px solid var(--neutral-200);
}

.orbiting-utility:hover .utility-badge {
  transform: scale(1.1);
  box-shadow: var(--shadow-md);
}

@media (min-width: 768px) {
  .hero {
    padding: 3rem 2rem;
  }
  
  .circular-utilities {
    width: 400px;
    height: 400px;
  }
  
  .central-logo {
    width: 100px;
    height: 100px;
    font-size: 2rem;
  }
  
  .orbiting-utility {
    width: 60px;
    height: 60px;
  }
}

@media (min-width: 1024px) {
  .hero-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .hero-content {
    text-align: left;
    flex: 1;
    padding-right: 2rem;
  }
  
  .cta-container {
    justify-content: flex-start;
  }
  
  .circular-utilities {
    flex: 1;
    max-width: 500px;
  }
}

[data-theme="dark"] .hero {
  background: var(--dark-neutral-100);
}

[data-theme="dark"] .utility-badge {
  background: var(--dark-neutral-200);
  border-color: var(--dark-neutral-300);
}

[data-theme="dark"] .central-logo {
  box-shadow: 0 0 0 10px rgba(var(--dark-primary-rgb), 0.1);
}
</style>