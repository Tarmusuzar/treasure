<template>
  <section class="team">
    <h2>Our Team</h2>
    <div class="cards">
      <div class="card" v-for="t in people" :key="t.name">
        <div class="avatar"><img :src="t.img" :alt="t.name"/></div>
        <h4>{{ t.name }}</h4>
        <p>{{ t.role }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainTeam',
  data() {
    return {
      people:[
        { name:'Alice Waters', role:'Founder & CEO', img:'https://randomuser.me/api/portraits/women/44.jpg' },
        { name:'Bob Stone', role:'CTO', img:'https://randomuser.me/api/portraits/men/47.jpg' },
        { name:'Carol Lin', role:'Head of Community', img:'https://randomuser.me/api/portraits/women/48.jpg' }
      ]
    };
  }
};
</script>

<style scoped>
.team { padding:4rem 1rem; text-align:center; background:var(--neutral-100); }
.team h2 { font-size:2rem; color:var(--text-primary); margin-bottom:2rem; }
.cards { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
.card { background:var(--neutral-200); padding:1rem; width:180px; border-radius:8px; transition:var(--transition); }
.card:hover { transform:translateY(-4px); box-shadow:var(--shadow-sm); }
.avatar { width:100%; padding-bottom:100%; border-radius:50%; overflow:hidden; margin-bottom:1rem; }
.avatar img { width:100%; height:100%; object-fit:cover; }
.card h4 { margin:0.5rem 0; font-size:1.125rem; color:var(--text-primary); }
.card p { margin:0; color:var(--text-secondary); font-size:0.9rem; }
@media(max-width:600px){ .cards { flex-direction:column; align-items:center; } }
</style>
