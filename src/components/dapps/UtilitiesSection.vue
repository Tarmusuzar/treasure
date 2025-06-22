<template>
  <section class="utilities-section">
    <h2>All Uganda Utilities in One Place</h2>
    <p class="subtitle">Pay for any service with just a few taps</p>
    
    <div class="utility-categories">
      <div class="category" 
           v-for="category in categories" 
           :key="category.name"
           @click="selectCategory(category)">
        <div class="icon">
          <i :class="category.icon"></i>
        </div>
        <h3>{{ category.name }}</h3>
        <p>{{ category.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UtilitiesSection',
  data() {
    return {
      categories: [
        {
          name: 'Electricity',
          icon: 'fas fa-bolt',
          description: 'UMEME, UETCL and other providers',
          providers: ['UMEME', 'UETCL', 'Rural Electrification']
        },
        {
          name: 'Water',
          icon: 'fas fa-tint',
          description: 'NWSC and other water boards',
          providers: ['NWSC', 'Kampala Water', 'Gulu Water']
        },
        {
          name: 'Internet',
          icon: 'fas fa-wifi',
          description: 'ISPs and mobile data',
          providers: ['MTN', 'Airtel', 'Africell', 'Roke Telecom']
        },
        {
          name: 'TV',
          icon: 'fas fa-tv',
          description: 'Pay TV subscriptions',
          providers: ['DSTV', 'GoTV', 'StarTimes', 'Zuku']
        },
        {
          name: 'Education',
          icon: 'fas fa-graduation-cap',
          description: 'School fees and university payments',
          providers: ['UMTC', 'Makerere', 'Kyambogo', 'UNEB']
        },
        {
          name: 'Government',
          icon: 'fas fa-landmark',
          description: 'Taxes and license payments',
          providers: ['URA', 'URA TIN', 'NIRA', 'Driving Permit']
        }
      ]
    }
  },
  methods: {
    selectCategory(category) {
      this.$emit('category-selected', category);
    }
  }
}
</script>

<style scoped>
.utilities-section {
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.utilities-section h2 {
  text-align: center;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  margin-bottom: 0.5rem;
  color:  var(--dark-neutral-200);
}

.subtitle {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.utility-categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.category {
  background: var(--neutral-100);
  border-radius: 0.75rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid var(--neutral-200);
}

.category:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.icon {
  width: 60px;
  height: 60px;
  background: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: var(--primary);
  font-size: 1.5rem;
}

.category h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.category p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .utility-categories {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 400px) {
  .utility-categories {
    grid-template-columns: 1fr;
  }
}

[data-theme="dark"] .category {
  background: var(--dark-neutral-200);
  border-color: var(--dark-neutral-300);
}

[data-theme="dark"] .icon {
  background: var(--dark-primary-light);
  color: var(--dark-primary);
}
</style>