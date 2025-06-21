<template>
  <footer class="site-footer" :class="{ 'dark-mode': darkMode }" >
    <!-- Footer wave decoration -->
    <div class="footer-wave">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="wave-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="wave-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="wave-fill"></path>
      </svg>
    </div>

    <div class="footer-container">
      <!-- Main footer content -->
      <div class="footer-main">
        <!-- Company info -->
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <img 
              :src="darkMode ? darkLogo : lightLogo" 
              alt="Treasure Advisors"
              class="logo-img"
            >
          </router-link>
          <p class="footer-tagline">Innovative financial solutions for modern markets</p>
          
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 4.01C21 4.5 20.02 4.72 19 5C17.879 3.735 16.217 3.665 14.62 4.263C13.023 4.861 11.977 6.323 12 8V9C8.075 9.193 5.147 7.638 3 5C3 5 -1 13 8 17C5.941 18.397 3.582 19.097 1 19C10 24 21 19 21 8C20.999 7.667 21.001 7.333 21 7C21.971 6.329 22.831 5.6 23 4.68C22.256 5.055 21.463 5.318 20.658 5.525C21.513 5.011 22.268 4.324 22 4.01Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Footer navigation -->
        <div class="footer-nav">
          <div class="footer-nav-column">
            <h3 class="footer-nav-title">Markets</h3>
            <ul class="footer-nav-list">
              <li><router-link to="/markets/stocks" class="footer-nav-link">Stocks</router-link></li>
              <li><router-link to="/markets/forex" class="footer-nav-link">Forex</router-link></li>
              <li><router-link to="/markets/crypto" class="footer-nav-link">Cryptocurrencies</router-link></li>
              <li><router-link to="/markets/commodities" class="footer-nav-link">Commodities</router-link></li>
            </ul>
          </div>

          <div class="footer-nav-column">
            <h3 class="footer-nav-title">Products</h3>
            <ul class="footer-nav-list">
              <li><router-link to="/products/utrading" class="footer-nav-link">U-Trading</router-link></li>
              <li><router-link to="/products/bluemarvels" class="footer-nav-link">Blue Marvels</router-link></li>
              <li><router-link to="/products/sacco" class="footer-nav-link">SACCO</router-link></li>
              <li><router-link to="/products/dapps" class="footer-nav-link">DApps</router-link></li>
            </ul>
          </div>

          <div class="footer-nav-column">
            <h3 class="footer-nav-title">Company</h3>
            <ul class="footer-nav-list">
              <li><router-link to="/about" class="footer-nav-link">About Us</router-link></li>
              <li><router-link to="/careers" class="footer-nav-link">Careers</router-link></li>
              <li><router-link to="/blog" class="footer-nav-link">Blog</router-link></li>
              <li><router-link to="/press" class="footer-nav-link">Press</router-link></li>
            </ul>
          </div>

          <div class="footer-nav-column">
            <h3 class="footer-nav-title">Legal</h3>
            <ul class="footer-nav-list">
              <li><router-link to="/legal/terms" class="footer-nav-link">Terms of Service</router-link></li>
              <li><router-link to="/legal/privacy" class="footer-nav-link">Privacy Policy</router-link></li>
              <li><router-link to="/legal/cookies" class="footer-nav-link">Cookie Policy</router-link></li>
              <li><router-link to="/legal/compliance" class="footer-nav-link">Compliance</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <h3 class="newsletter-title">Market Insights</h3>
          <p class="newsletter-text">Subscribe to our weekly financial newsletter</p>
          
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <div class="input-group">
              <input 
                type="email" 
                v-model="email" 
                placeholder="Your email address" 
                required
                class="newsletter-input"
              >
              <button type="submit" class="newsletter-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Footer bottom -->
      <div class="footer-bottom">
        <div class="footer-disclaimer">
          <p>© {{ currentYear }} Treasure Advisors. All rights reserved. Trading involves risk.</p>
          <p>Treasure Advisors LLC is a registered investment adviser with the SEC.</p>
        </div>
        
        <div class="footer-badges">
          <div class="badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 9H9.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 9H15.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Regulated</span>
          </div>
          <div class="badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 8V12L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Secure</span>
          </div>
          <div class="badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 8H15.2C14.0799 8 13.5198 8 13.092 8.21799C12.7157 8.40973 12.4097 8.71569 12.218 9.09202C12 9.51984 12 10.0799 12 11.2V16L12.8944 15.5528C13.5729 15.214 14.2961 15 15.027 15H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Insured</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  props: {
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      lightLogo: require('@/assets/images/logo-light.png'),
      darkLogo: require('@/assets/images/logo-dark.png'),
      email: '',
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    subscribeNewsletter() {
      // Implement newsletter subscription logic
      console.log('Subscribed with email:', this.email)
      this.email = ''
      // Show success message
    }
  }
}
</script>

<style>
/* ========== Base Styles ========== */
.site-footer {
  position: relative;
  background-color: var(--neutral-100);
  color: var(--neutral-700);
  padding-top: 80px;
  border-top: 1px solid var(--neutral-300);
  transition: background-color 0.3s ease;
}

.dark-mode .site-footer {
  background-color: var(--neutral-100);
  border-top-color: var(--neutral-700);
}

.footer-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ========== Wave Decoration ========== */
.footer-wave {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 100px;
  transform: rotate(180deg);
  overflow: hidden;
}

.footer-wave svg {
  width: 100%;
  height: 100%;
}

.wave-fill {
  fill: var(--neutral-100);
}

.dark-mode .wave-fill {
  fill: var(--neutral-100);
}

/* ========== Main Footer Content ========== */
.footer-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--neutral-300);
}

.dark-mode .footer-main {
  border-bottom-color: var(--neutral-700);
}

/* Brand Section */
.footer-brand {
  max-width: 280px;
}

.footer-logo {
  display: inline-block;
  margin-bottom: 1.5rem;
}

.footer-logo .logo-img {
  height: 32px;
}

.footer-tagline {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: var(--neutral-600);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--neutral-400);
  color: var(--neutral-600);
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--primary);
  border-color: var(--primary);
  transform: translateY(-2px);
}

.dark-mode .social-link {
  border-color: var(--neutral-600);
}

/* Footer Navigation */
.footer-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.footer-nav-column {
  display: flex;
  flex-direction: column;
}

.footer-nav-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: var(--neutral-800);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.dark-mode .footer-nav-title {
  color: var(--neutral-200);
}

.footer-nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav-link {
  color: var(--neutral-600);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.footer-nav-link:hover {
  color: var(--primary);
}

.footer-nav-link.router-link-exact-active {
  color: var(--primary);
  font-weight: 500;
}

/* Newsletter Section */
.footer-newsletter {
  max-width: 300px;
}

.newsletter-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: var(--neutral-800);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.dark-mode .newsletter-title {
  color: var(--neutral-200);
}

.newsletter-text {
  margin-bottom: 1.25rem;
  line-height: 1.6;
  color: var(--neutral-600);
}

.newsletter-form {
  width: 100%;
}

.input-group {
  position: relative;
  display: flex;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--neutral-400);
  border-radius: 8px 0 0 8px;
  background-color: var(--neutral-200);
  color: var(--neutral-800);
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.dark-mode .newsletter-input {
  background-color: var(--neutral-800);
  border-color: var(--neutral-600);
  color: var(--neutral-200);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(0, 87, 184, 0.2);
}

.newsletter-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-button:hover {
  background-color: var(--primary-dark);
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 0;
}

.footer-disclaimer {
  text-align: center;
  font-size: 0.85rem;
  color: var(--neutral-600);
  line-height: 1.6;
}

.footer-badges {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--neutral-600);
}

/* ========== Responsive Styles ========== */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
  }
  
  .footer-newsletter {
    grid-column: span 2;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
  }
  
  .footer-newsletter {
    grid-column: span 1;
  }
  
  .footer-nav {
    grid-template-columns: 1fr 1fr;
  }
  
  .footer-bottom {
    flex-direction: column-reverse;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 1.5rem;
  }
  
  .footer-nav {
    grid-template-columns: 1fr;
  }
  
  .footer-badges {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>