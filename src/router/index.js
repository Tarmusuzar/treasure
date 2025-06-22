import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/MainHome.vue' 
import About from '../views/MainAbout.vue'
import Services from '../views/MainServices.vue'
import UTrading from '../views/MainUTrading.vue'
import BlueMarvels from '../views/MainBlueMarvels.vue'
import Sacco from '../views/MainSacco.vue'
import Blog from '../views/MainBlog.vue'
import Contact from '../views/MainContact.vue'
import Team from '../views/MainTeam.vue'
import DApps from '@/views/MainDApps.vue'
import SaccoLogin from '@/components/SaccoLogin.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/utrading', name: 'UTrading', component: UTrading },
  { path: '/bluemarvels', name: 'BlueMarvels', component: BlueMarvels },
  { path: '/sacco', name: 'Sacco', component: Sacco, meta: { requiresAuth: true } },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/team', name: 'Team', component: Team },
  { path: '/dapps', name: 'MainDapps', component: DApps },
  { path: '/login', name: 'DApps', component: SaccoLogin }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Authentication guard for Sacco section
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!isAuthenticated()) { // You'll need to implement this function
//       next('/login')
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router