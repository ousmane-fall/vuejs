import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/History.vue'
import AboutView from '../views/AboutView.vue'



const routes = [
  {
    path: '/',
    name: 'home-View',
    component: HomeView
  },
  {
    path: '/history',
    name: 'history-View',
    component: HistoryView
  },
  
  {
    path: '/about',
    name: 'About-View',
    component: AboutView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
