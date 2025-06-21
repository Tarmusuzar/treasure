<template>
  <div class="utrading">
    <UTradingHero />
    <UTradingFeatures />
    <UTradingHowItWorks />
    <UTradingRoadmap />
    <UTradingTestimonials />
  </div>
</template>

<script>
import UTradingHero from '@/components/utrading/UTradingHero.vue'
import UTradingFeatures from '@/components/utrading/UTradingFeatures.vue'
import UTradingHowItWorks from '@/components/utrading/UTradingHowItWorks.vue'
import UTradingRoadmap from '@/components/utrading/UTradingRoadmap.vue'
import UTradingTestimonials from '@/components/utrading/UTradingTestimonials.vue'

export default {
  name: 'UTrading',
  components: {
    UTradingHero,
    UTradingFeatures,
    UTradingHowItWorks,
    UTradingRoadmap,
    UTradingTestimonials
  }
}
</script>