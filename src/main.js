import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Work from './pages/Work.vue'
import Commercial from './pages/work/Commercial.vue'
import CorporateImaging from './pages/work/CorporateImaging.vue'
import ActingNarration from './pages/work/ActingNarration.vue'
import AudiobooksDocs from './pages/work/AudiobooksDocs.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/work', component: Work },
  { path: '/work/commercial', component: Commercial },
  { path: '/work/corporate-imaging', component: CorporateImaging },
  { path: '/work/acting-narration', component: ActingNarration },
  { path: '/work/audiobooks-docs', component: AudiobooksDocs }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new page
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')