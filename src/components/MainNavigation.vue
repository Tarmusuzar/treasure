<template>
  <header class="navbar" :class="{ 'dark-mode': darkMode, 'scrolled': isScrolled }">
    <!-- Abstract shape elements -->
    <div class="navbar-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="navbar-container">
      <!-- Text logo -->
      <router-link to="/" class="logo">
        <span class="logo-text">Treasure Advisors</span>
        <div class="logo-shine"></div>
      </router-link>

      <!-- Main Navigation -->
      <nav class="main-nav">
        <router-link 
          v-for="link in mainLinks" 
          :key="link.path" 
          :to="link.path"
          class="nav-link"
        >
          <span class="link-text" >{{ link.name }}</span>
          <span class="link-indicator"></span>
        </router-link>
      </nav>

      <!-- Right side controls -->
      <div class="nav-controls">
        <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
          <div class="toggle-track">
            <div class="toggle-thumb"></div>
          </div>
        </button>
        
        <button 
          class="hamburger" 
          @click="toggleMobileMenu"
          :class="{ 'active': mobileMenuOpen }"
          aria-label="Toggle menu"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="menu-slide">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu-backdrop" @click="mobileMenuOpen = false"></div>
        <div class="mobile-menu-content">
          <div class="mobile-menu-header">
            <span class="mobile-logo-text">Treasure Advisors</span>
          </div>
          <div class="mobile-links">
            <router-link 
              v-for="link in allLinks" 
              :key="link.path" 
              :to="link.path"
              class="mobile-link"
              @click="mobileMenuOpen = false"
            >
              <span>{{ link.name }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </router-link>
          </div>
          <div class="mobile-menu-footer">
            <button class="btn-primary" >
              <span>Login </span>
              <div class="toggle-track">
                <div class="toggle-thumb"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'FinancialNavbar',
  data() {
    return {
      darkMode: false,
      mobileMenuOpen: false,
      isScrolled: false,
      mainLinks: [
        { path: '/', name: 'Home' },
        { path: '/sacco', name: 'Sacco' },
        { path: '/utrading', name: 'UTrading' },
        { path: '/bluemarvels', name: 'Blue Marvels' },
        
        { path: '/dapps', name: 'Pay Utility(DApps)' }
      ],
      productLinks: [
        { path: '/about', name: 'About Us' },
        { path: '/blog', name: 'Blog' },
        { path: '/roadmap', name: 'Road Map' },
        { path: '/services', name: 'Services' }
      ]
    }
  },
  computed: {
    allLinks() {
      return [...this.mainLinks, ...this.productLinks]
    }
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      document.documentElement.setAttribute(
        'data-theme', 
        this.darkMode ? 'dark' : 'light'
      )
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light')
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : 'auto'
    },
    checkSystemTheme() {
      const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      this.darkMode = savedTheme === 'dark'
      document.documentElement.setAttribute('data-theme', savedTheme)
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10
    }
  },
  mounted() {
    this.checkSystemTheme()
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && this.mobileMenuOpen) {
        this.mobileMenuOpen = false
      }
    })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>

/* ========== Base Navbar Styles ========== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 80px;
  background: var(--neutral-100);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.dark-mode .navbar {
  background: var(--neutral-100);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

}

.navbar-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
}

/* ========== Logo Styles ========== */
.logo {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
  text-decoration: none;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  transition: all 0.3s ease;
}

.logo:hover .logo-text {
  transform: translateY(-2px);
}

/* ========== Main Navigation ========== */
.main-nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  position: relative;
  color: var(--neutral-700);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
}

.dark-mode .nav-link {
  color: var(--neutral-800);
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link.router-link-exact-active {
  color: var(--primary);
  font-weight: 600;
}

/* ========== Mobile Menu Button ========== */
.hamburger {
  display: none;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  z-index: 1001;
  padding: 0;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--neutral-600);
  transition: all 0.3s ease;
  transform-origin: center;
}

.dark-mode .hamburger-line {
  background: var(--neutral-600);
}

.hamburger.active .hamburger-line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .hamburger-line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* ========== Mobile Menu Styles ========== */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.mobile-menu-content {
  position: relative;
  width: 320px;
  height: 100%;
  background: var(--neutral-100);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.dark-mode .mobile-menu-content {
  background: var(--neutral-100);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
}

.mobile-menu-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--neutral-300);
}

.mobile-logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

.mobile-links {
  flex: 1;
  padding: 1rem 0;
}

.mobile-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  color: var(--neutral-800);
  text-decoration: none;
  transition: all 0.2s ease;
}

.dark-mode .mobile-link {
  color: var(--neutral-700);
}

.mobile-link:hover {
  background: var(--neutral-200);
  color: var(--primary);
}

.dark-mode .mobile-link:hover {
  background: var(--neutral-300);
}

.mobile-link.router-link-exact-active {
  color: var(--primary);
  font-weight: 500;
  background: var(--neutral-200);
}

.dark-mode .mobile-link.router-link-exact-active {
  background: var(--neutral-300);
}

.mobile-link svg {
  color: var(--neutral-700);
  transition: all 0.2s ease;
}

.dark-mode .mobile-link svg {
  color: var(--neutral-500);
}

.mobile-link:hover svg {
  color: var(--primary);
  transform: translateX(4px);
}

.mobile-menu-footer {
  padding: 1.5rem;
  border-top: 1px solid var(--neutral-300);
}

.theme-toggle-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  color: var(--neutral-800);
  cursor: pointer;
  padding: 0.5rem 0;
  font-size: 0.95rem;
}

.dark-mode .theme-toggle-mobile {
  color: var(--neutral-200);
}

/* ========== Animations ========== */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: opacity 0.3s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
}

.menu-slide-enter-active .mobile-menu-content,
.menu-slide-leave-active .mobile-menu-content {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-slide-enter-from .mobile-menu-content,
.menu-slide-leave-to .mobile-menu-content {
  transform: translateX(100%);
}

/* ========== Responsive Styles ========== */
@media (max-width: 1024px) {
  .main-nav {
    display: none;
  }
  
  .hamburger {
    display: flex;
  }
  
  .navbar-container {
    padding: 0 1.5rem;
  }
  
  .navbar {
    height: 72px;
  }
}

@media (max-width: 480px) {
  .logo-text {
    font-size: 1.25rem;
  }
  
  .mobile-menu-content {
    width: 280px;
  }
  
  .navbar {
    height: 68px;
  }
  
  .nav-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .theme-toggle {
    margin-right: 0;
  }
}
/* ========== Theme Toggle Styles ========== */
.theme-toggle {
  position: relative;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  margin-right: 1rem;
  width: 60px;
  height: 32px;
  display: flex;
  align-items: center;
}

.toggle-track {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--neutral-300);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.toggle-track::before,
.toggle-track::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--neutral-100);
  transition: opacity 0.3s ease;
}

.toggle-track::before {
  content: 'ON';
  left: 8px;
  opacity: 0;
}

.toggle-track::after {
  content: 'OFF';
  right: 8px;
  opacity: 1;
}

.dark-mode .toggle-track::before {
  opacity: 1;
}

.dark-mode .toggle-track::after {
  opacity: 0;
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  background: var(--neutral-100);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark-mode .toggle-thumb {
  transform: translateX(28px);
}

.toggle-thumb::before {
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  background: var(--primary);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.dark-mode .toggle-thumb::before {
  opacity: 1;
}

/* Animation when toggling */
.theme-toggle:active .toggle-thumb {
  transform: translateX(10px);
}

.dark-mode .theme-toggle:active .toggle-thumb {
  transform: translateX(18px);
}

/* ========== Mobile Theme Toggle ========== */
@media (max-width: 768px) {
  .theme-toggle {
    width: 52px;
    height: 28px;
    margin-right: 0.5rem;
  }
  
  .toggle-thumb {
    width: 24px;
    height: 24px;
  }
  
  .dark-mode .toggle-thumb {
    transform: translateX(24px);
  }
  
  .toggle-track::before,
  .toggle-track::after {
    font-size: 0.6rem;
  }
  
  .theme-toggle:active .toggle-thumb {
    transform: translateX(8px);
  }
  
  .dark-mode .theme-toggle:active .toggle-thumb {
    transform: translateX(16px);
  }
}
.btn-primary {
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: var(--neutral-100);
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-outline {
  background: transparent;
  color: var(--neutral-900);
  border: 1px solid var(--neutral-400);
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

</style>

