<template>
  <div class="dapps">
    <HeroSection />
    <UtilitiesSection @category-selected="openPaymentModal" />
    <IntegrationComponent />
    <CryptoDApps />
    <PaymentModal 
      :show="showPaymentModal" 
      :selected-utility="selectedUtility"
      @close="closePaymentModal" />
  </div>
</template>

<script>
import HeroSection from '@/components/dapps/DAppsHero.vue'
import UtilitiesSection from '@/components/dapps/UtilitiesSection.vue'
import IntegrationComponent from '@/components/dapps/IntegrationSection.vue'
import CryptoDApps from '@/components/dapps/CryptoDApps.vue'
import PaymentModal from '@/components/dapps/PaymentModal.vue'

export default {
  name:"MainDapps",
  components: {
    HeroSection,
    UtilitiesSection,
    IntegrationComponent,
    CryptoDApps,
    PaymentModal
  },
  data() {
    return {
      showPaymentModal: false,
      selectedUtility: ''
    }
  },
  methods: {
    openPaymentModal(utility) {
      this.selectedUtility = utility.name;
      this.showPaymentModal = true;
    },
    closePaymentModal() {
      this.showPaymentModal = false;
    }
  }
}
</script>