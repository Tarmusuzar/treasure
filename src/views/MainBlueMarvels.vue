<template>
  <div class="blue-marvels">
    <BlueMarvelsHero />
    <BlueMarvelsFeatures />
    <BlueMarvelsRoadmap />
  </div>
</template>

<script>
import BlueMarvelsHero from '@/components/bluemarvels/BlueMarvelsHero.vue'
import BlueMarvelsFeatures from '@/components/bluemarvels/BlueMarvelsFeatures.vue'
import BlueMarvelsRoadmap from '@/components/bluemarvels/BlueMarvelsRoadmap.vue'

export default {
  name: 'BlueMarvels',
  components: {
    BlueMarvelsHero,
    BlueMarvelsFeatures,
    BlueMarvelsRoadmap,
  }
}
</script>