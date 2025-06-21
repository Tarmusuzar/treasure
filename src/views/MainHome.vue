<template>
  <div class="home">
    <HeroSection />
    <Features />
    <StatsCounter />
    <Testimonials />
    <CallToAction />
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import Features from '@/components/home/HomeFeatures.vue'
import StatsCounter from '@/components/home/StatsCounter.vue'
import Testimonials from '@/components/home/HomeTestimonials.vue'
import CallToAction from '@/components/home/CallToAction.vue'

export default {
  name: 'MainHome',
  components: {
    HeroSection,
    Features,
    StatsCounter,
    Testimonials,
    CallToAction
  }
}
</script>
<style>
.home {
  overflow-x: hidden;
}
</style>