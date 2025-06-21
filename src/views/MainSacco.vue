<template>
  <div class="sacco">
    <SaccoHero />
    <SaccoPolicies v-if="!acceptedPolicies" @accept="acceptPolicies" />
    <SaccoDashboard v-else />
  </div>
</template>

<script>
import SaccoHero from '@/components/sacco/SaccoHero.vue'
import SaccoPolicies from '@/components/sacco/SaccoPolicies.vue'
import SaccoDashboard from '@/components/sacco/SaccoDashboard.vue'

export default {
  name: 'MainSacco',
  components: {
    SaccoHero,
    SaccoPolicies,
    SaccoDashboard
  },
  data() {
    return {
      acceptedPolicies: false
    }
  },
  methods: {
    acceptPolicies() {
      this.acceptedPolicies = true
      // You might want to store this in localStorage or Vuex
    }
  },
  created() {
    // Check if user has already accepted policies
    // This could come from Vuex or localStorage
  }
}
</script>