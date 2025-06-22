<template>
  <section class="roadmap-section">
    <div class="section-header">
      <h2>Our Crypto Roadmap</h2>
      <p>How we're bringing blockchain payments to Uganda's utilities</p>
    </div>

    <div class="roadmap-timeline">
      <div class="timeline-item" v-for="(item, index) in roadmap" :key="index">
        <div class="timeline-marker" :class="{ active: item.completed }">
          <i :class="item.completed ? 'fas fa-check' : 'fas fa-arrow-right'"></i>
        </div>
        <div class="timeline-content">
          <h3>{{ item.title }}</h3>
          <p class="date">{{ item.date }}</p>
          <p class="description">{{ item.description }}</p>
          <div class="crypto-benefits" v-if="item.cryptoDetails">
            <div class="benefit" v-for="(benefit, i) in item.cryptoDetails" :key="i">
              <i class="fas fa-circle"></i>
              <span>{{ benefit }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="crypto-explainer">
      <h3>Why Crypto for Utilities?</h3>
      <div class="explainer-grid">
        <div class="explainer-card">
          <i class="fas fa-globe-africa"></i>
          <h4>Borderless Payments</h4>
          <p>Pay utilities from anywhere in the world without currency conversion</p>
        </div>
        <div class="explainer-card">
          <i class="fas fa-coins"></i>
          <h4>Lower Fees</h4>
          <p>Save up to 60% compared to traditional payment methods</p>
        </div>
        <div class="explainer-card">
          <i class="fas fa-bolt"></i>
          <h4>Instant Settlement</h4>
          <p>No waiting days for payments to clear - instant utility activation</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RoadmapSection',
  data() {
    return {
      roadmap: [
        {
          title: "Stablecoin Integration",
          date: "Q3 2023",
          completed: true,
          description: "Launch USDC and USDT payments for utility bills",
          cryptoDetails: [
            "Price stability pegged to USD",
            "Fast blockchain transactions",
            "No bank account required"
          ]
        },
        {
          title: "Local Crypto On-Ramps",
          date: "Q4 2023",
          completed: false,
          description: "Partner with Ugandan exchanges for easy UGX to crypto conversion",
          cryptoDetails: [
            "Buy crypto with Mobile Money",
            "Auto-convert to pay bills",
            "No technical knowledge needed"
          ]
        },
        {
          title: "Crypto Rewards Program",
          date: "Q1 2024",
          completed: false,
          description: "Earn token rewards for paying utilities and referring friends",
          cryptoDetails: [
            "5% cashback in utility tokens",
            "Redeem rewards for bill discounts",
            "Community governance features"
          ]
        },
        {
          title: "Full DeFi Integration",
          date: "Q2 2024",
          completed: false,
          description: "Pay bills directly from crypto wallets with auto-pay smart contracts",
          cryptoDetails: [
            "Set-and-forget recurring payments",
            "Interest-earning on prepaid balances",
            "Complete payment transparency"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.roadmap-section {
  padding: 6rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.section-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.roadmap-timeline {
  position: relative;
  padding-left: 2rem;
  margin: 3rem 0;
}

.roadmap-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 2.35rem;
  height: 100%;
  width: 2px;
  background: var(--neutral-300);
  z-index: 1;
}

.timeline-item {
  position: relative;
  padding-bottom: 3rem;
  display: flex;
}

.timeline-marker {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--neutral-200);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  z-index: 2;
  flex-shrink: 0;
  color: var(--text-secondary);
  border: 2px solid var(--neutral-300);
}

.timeline-marker.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.timeline-content {
  flex: 1;
  padding-top: 0.5rem;
}

.timeline-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.timeline-content .date {
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.timeline-content .description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.crypto-benefits {
  background: var(--neutral-100);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
}

.benefit {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.benefit i {
  color: var(--primary);
  font-size: 0.5rem;
  margin-top: 0.5rem;
}

.crypto-explainer {
  margin-top: 4rem;
  text-align: center;
}

.crypto-explainer h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.explainer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.explainer-card {
  background: var(--neutral-100);
  border-radius: 0.5rem;
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;
}

.explainer-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-sm);
}

.explainer-card i {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.explainer-card h4 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.explainer-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9rem;
}

[data-theme="dark"] .roadmap-timeline::before {
  background: var(--dark-neutral-300);
}

[data-theme="dark"] .timeline-marker {
  background: var(--dark-neutral-200);
  border-color: var(--dark-neutral-300);
}

[data-theme="dark"] .crypto-benefits {
  background: var(--dark-neutral-200);
}

[data-theme="dark"] .explainer-card {
  background: var(--dark-neutral-200);
}

@media (max-width: 768px) {
  .roadmap-timeline {
    padding-left: 0;
  }
  
  .roadmap-timeline::before {
    left: 0.35rem;
  }
  
  .timeline-marker {
    width: 40px;
    height: 40px;
    margin-right: 1rem;
  }
}
</style>