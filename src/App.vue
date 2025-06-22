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
  /* Light Theme */
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --primary-light: #dbeafe;
  --primary-rgb: 37, 99, 235;
  --secondary: #10b981;
  --accent: #f59e0b;
  --neutral-100: #ffffff;
  --neutral-200: #f8fafc;
  --neutral-300: #f1f5f9;
  --neutral-400: #e2e8f0;
  --neutral-500: #94a3b8;
  --neutral-600: #64748b;
  --neutral-700: #475569;
  --neutral-800: #1e293b;
  --neutral-900: #0f172a;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);

  /* Dark Theme */
  --dark-primary: #3b82f6;
  --dark-primary-dark: #2563eb;
  --dark-primary-light: #1e3a8a;
  --dark-primary-rgb: 59, 130, 246;
  --dark-secondary: #10b981;
  --dark-accent: #f59e0b;
  --dark-neutral-100: #0f172a;
  --dark-neutral-200: #1e293b;
  --dark-neutral-300: #334155;
  --dark-neutral-400: #475569;
  --dark-neutral-500: #64748b;
  --dark-neutral-600: #94a3b8;
  --dark-neutral-700: #cbd5e1;
  --dark-neutral-800: #e2e8f0;
  --dark-neutral-900: #f8fafc;
  --dark-text-primary: #f1f5f9;
  --dark-text-secondary: #94a3b8;
}

[data-theme="dark"] {
  --primary: var(--dark-primary);
  --primary-dark: var(--dark-primary-dark);
  --primary-light: var(--dark-primary-light);
  --primary-rgb: var(--dark-primary-rgb);
  --secondary: var(--dark-secondary);
  --accent: var(--dark-accent);
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
}
</style>