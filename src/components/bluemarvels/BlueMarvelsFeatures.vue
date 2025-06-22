<template>
  <section class="features">
    <div class="wrap">
      <div class="feature" v-for="f in items" :key="f.title">
        <h3>{{ f.title }}</h3>
        <p>{{ f.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainFeatures',
  data() {
    return {
      items:[
        { title:'Low Fees & Fast', desc:'Built on Base Network’s infrastructure.' },
        { title:'Utility‑Driven', desc:'Token used across our ecosystem & services.' },
        { title:'Community Governance', desc:'Empower users via token staking.' }
      ]
    };
  }
};
</script>

<style scoped>
.features { padding:4rem 1rem; background:var(--neutral-100); }
.wrap { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:2rem; max-width:1000px; margin:0 auto; }
.feature { background:var(--neutral-200); padding:1.5rem; border-radius:8px; transition:var(--transition); }
.feature:hover { box-shadow:var(--shadow-md); }
.feature h3 { margin-bottom:0.75rem; color:var(--primary-dark); }
.feature p { color:var(--text-secondary); line-height:1.5; }
@media(max-width:600px){ .wrap { grid-template-columns:1fr; } }
</style>
