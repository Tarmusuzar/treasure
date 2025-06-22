<template>
  <section class="roadmap">
    <h2>Roadmap</h2>
    <div class="steps">
      <div class="step" v-for="s in roadmap" :key="s.q">
        <div class="mark">{{ s.q }}</div>
        <div class="info">
          <h4>{{ s.title }}</h4>
          <p v-for="f in s.features" :key="f">•{{ f }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:'MainRoadmap',
  data(){return{roadmap:[
    {q:'Q1 2025',title:'Launch on Base',features:['Deploy BMARV token','List on Dexscreener']},
    {q:'Q2 2025',title:'Utility Rollout',features:['Staking portal','Governance voting']},
    {q:'Q3 2025',title:'Ecosystem Growth',features:['NFT access passes','Partner integrations']}
  ]};}
};
</script>

<style scoped>
.roadmap { padding:4rem 1rem; background:var(--neutral-200); }
.roadmap h2 { text-align:center; font-size:2rem; margin-bottom:2rem; color:var(--text-primary); }
.steps { display:grid; grid-template-columns:1fr; gap:1.5rem; max-width:800px; margin:0 auto; }
.step { display:flex; gap:1rem; align-items:flex-start; }
.mark { font-weight:700; color:var(--primary); min-width:80px; }
.info h4 { margin:0 0 .5rem; color:var(--text-primary); }
.info p { margin:0; color:var(--text-secondary); line-height:1.4; }
@media(min-width:600px){
  .steps { grid-template-columns:repeat(3,1fr); }
  .step { flex-direction:column; align-items:center; text-align:center; }
  .mark { margin-bottom:0.5rem; }
}
</style>
