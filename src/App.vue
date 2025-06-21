<template>
  <div id="app">
    <MainNavigation />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainNavigation from './components/MainNavigation.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainNavigation,
    MainFooter
  }
}
</script>
<style>
#app{
  width: 100%;
}
*{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
:root {
  /* Light Theme - Financial Colors */
  --primary: #0057B8;        /* Trust blue */
  --primary-dark: #003D82;
  --primary-light: #E6F0FF;
  --secondary: #00A86B;      /* Growth green */
  --secondary-dark: #00875A;
  --accent: #FF6B35;         /* Action orange */
  --accent-light: #FFF0E8;
  
  /* Neutral Colors - Improved contrast */
  --neutral-100: #FFFFFF;
  --neutral-200: #F8FAFC;
  --neutral-300: #F1F5F9;
  --neutral-400: #E2E8F0;
  --neutral-500: #94A3B8;
  --neutral-600: #64748B;
  --neutral-700: #475569;
  --neutral-800: #1E293B;
  --neutral-900: #0F172A;
  
  /* Text Colors */
  --text-primary: var(--neutral-800);
  --text-secondary: var(--neutral-600);
  --text-inverse: var(--neutral-100);
  
  /* Dark Theme */
  --dark-primary: #3A86FF;
  --dark-primary-dark: #1D6FE8;
  --dark-primary-light: #0A1F40;
  --dark-secondary: #4CC9A7;
  --dark-secondary-dark: #2DAE8C;
  --dark-accent: #FF9E5E;
  --dark-accent-light: #3A2A1A;
  
  /* Dark Theme Neutrals */
  --dark-neutral-100: #0F172A;
  --dark-neutral-200: #1E293B;
  --dark-neutral-300: #334155;
  --dark-neutral-400: #475569;
  --dark-neutral-500: #64748B;
  --dark-neutral-600: #94A3B8;
  --dark-neutral-700: #CBD5E1;
  --dark-neutral-800: #E2E8F0;
  --dark-neutral-900: #F8FAFC;
  
  /* Dark Theme Text */
  --dark-text-primary: var(--dark-neutral-800);
  --dark-text-secondary: var(--dark-neutral-600);
  --dark-text-inverse: var(--dark-neutral-100);
  
  /* Effects */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] {
  --primary: var(--dark-primary);
  --primary-dark: var(--dark-primary-dark);
  --primary-light: var(--dark-primary-light);
  --secondary: var(--dark-secondary);
  --secondary-dark: var(--dark-secondary-dark);
  --accent: var(--dark-accent);
  --accent-light: var(--dark-accent-light);
  
  --neutral-100: var(--dark-neutral-100);
  --neutral-200: var(--dark-neutral-200);
  --neutral-300: var(--dark-neutral-300);
  --neutral-400: var(--dark-neutral-400);
  --neutral-500: var(--dark-neutral-500);
  --neutral-600: var(--dark-neutral-600);
  --neutral-700: var(--dark-neutral-700);
  --neutral-800: var(--dark-neutral-800);
  --neutral-900: var(--dark-neutral-900);
  
  --text-primary: var(--dark-text-primary);
  --text-secondary: var(--dark-text-secondary);
  --text-inverse: var(--dark-text-inverse);
}
</style>