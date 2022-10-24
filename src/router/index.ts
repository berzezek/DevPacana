import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: () => import('@/views/SimplePage.vue')
    },
    {
      path: '/composition',
      name: 'CompositionPage',
      component: () => import('@/views/CompositionPage.vue')
    }
  ]
})

export default router
