<template>
  <div class="dapps">
    <DAppsHero />
    <UtilitiesSection />
    <CryptoDApps />
    <IntegrationSection />
  </div>
</template>

<script>
import DAppsHero from '@/components/dapps/DAppsHero.vue'
import UtilitiesSection from '@/components/dapps/UtilitiesSection.vue'
import CryptoDApps from '@/components/dapps/CryptoDApps.vue'
import IntegrationSection from '@/components/dapps/IntegrationSection.vue'

export default {
  name: 'DApps',
  components: {
    DAppsHero,
    UtilitiesSection,
    CryptoDApps,
    IntegrationSection
  }
}
</script>