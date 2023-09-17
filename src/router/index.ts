import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Solution from '../views/Solution.vue'
import NotSolution from '../views/NotSolution.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/llIlllIllIlllIll',
      name: 'solution',
      component: Solution
    },
    {
      path: '/IIlIIIlIIlIIIlII',
      name: 'notsolution',
      component: NotSolution
    }
  ]
})

export default router
