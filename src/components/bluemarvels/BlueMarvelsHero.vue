<template>
  <section class="hero">
    <div class="inner">
      <h1 class="title">BlueMarvels</h1>
      <p class="subtitle">A next‑generation utility token on Base Network.</p>
      <button class="btn">Get Started</button>
    </div>
  </section>
</template>

<script>
export default { name: 'BluemarvelsHero' };
</script>

<style scoped>
.hero {
  display: flex; align-items: center; justify-content: center;
  height: 60vh; padding: 0 1rem;
  background: var(--primary);
  color: var(--text-inverse);
}
.inner { text-align: center; max-width: 600px; }
.title { font-size: 2.5rem; margin-bottom: 0.5rem; }
.subtitle { font-size: 1.125rem; margin-bottom: 1.5rem; opacity: .9; }
.btn {
  padding: .75rem 1.5rem;
  background: var(--accent); color: var(--text-inverse);
  border: none; border-radius: 4px;
  font-size: 1rem; cursor: pointer;
  transition: var(--transition);
}
.btn:hover { background: var(--accent-dark); }
@media(max-width:600px){
  .title{font-size:2rem;}
  .subtitle{font-size:1rem;}
}
</style>
