<template>
  <div class="blue-marvels">
    <BlueMarvelsHero />
    <BlueMarvelsFeatures />
    <BlueMarvelsRoadmap />
    <BlueMarvelsTeam />
    <BlueMarvelsPartners />
  </div>
</template>

<script>
import BlueMarvelsHero from '@/components/bluemarvels/BlueMarvelsHero.vue'
import BlueMarvelsFeatures from '@/components/bluemarvels/BlueMarvelsFeatures.vue'
import BlueMarvelsRoadmap from '@/components/bluemarvels/BlueMarvelsRoadmap.vue'
import BlueMarvelsTeam from '@/components/bluemarvels/BlueMarvelsTeam.vue'
import BlueMarvelsPartners from '@/components/bluemarvels/BlueMarvelsPartners.vue'

export default {
  name: 'BlueMarvels',
  components: {
    BlueMarvelsHero,
    BlueMarvelsFeatures,
    BlueMarvelsRoadmap,
    BlueMarvelsTeam,
    BlueMarvelsPartners
  }
}
</script>