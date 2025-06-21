<template>
  <section class="sacco-policies">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our SACCO Policies</h2>
        <p class="section-subtitle">Transparent guidelines for your financial security</p>
      </div>

      <div class="policy-grid">
        <div class="policy-card">
          <div class="policy-icon">
            <i class="fas fa-piggy-bank"></i>
          </div>
          <h3 class="policy-title">Savings Policy</h3>
          <p class="policy-description">Minimum savings requirements, withdrawal procedures, and dividend calculations.</p>
          <a href="#" class="policy-link">Read policy details</a>
        </div>

        <div class="policy-card">
          <div class="policy-icon">
            <i class="fas fa-hand-holding-usd"></i>
          </div>
          <h3 class="policy-title">Loan Policy</h3>
          <p class="policy-description">Eligibility criteria, application process, interest rates, and repayment terms.</p>
          <a href="#" class="policy-link">Read policy details</a>
        </div>

        <div class="policy-card">
          <div class="policy-icon">
            <i class="fas fa-chart-pie"></i>
          </div>
          <h3 class="policy-title">Share Capital</h3>
          <p class="policy-description">Share purchase requirements, transfer procedures, and dividend distribution.</p>
          <a href="#" class="policy-link">Read policy details</a>
        </div>

        <div class="policy-card">
          <div class="policy-icon">
            <i class="fas fa-users-cog"></i>
          </div>
          <h3 class="policy-title">Governance</h3>
          <p class="policy-description">Member rights, voting procedures, and leadership election guidelines.</p>
          <a href="#" class="policy-link">Read policy details</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SaccoPolicies'
}
</script>

<style scoped>
.sacco-policies {
  padding: 4rem 1.5rem;
  background-color: var(--neutral-100);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--neutral-600);
  max-width: 600px;
  margin: 0 auto;
}

.policy-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.policy-card {
  background: var(--neutral-100);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--neutral-200);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.policy-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.policy-icon {
  width: 48px;
  height: 48px;
  background: rgba(var(--primary-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  color: var(--primary);
}

.policy-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--neutral-900);
  margin-bottom: 1rem;
}

.policy-description {
  color: var(--neutral-600);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.policy-link {
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
}

.policy-link:hover {
  color: var(--primary-dark);
}

.policy-link::after {
  content: "→";
  transition: transform 0.2s ease;
}

.policy-link:hover::after {
  transform: translateX(3px);
}

@media (min-width: 768px) {
  .policy-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .sacco-policies {
    padding: 6rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  .policy-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>