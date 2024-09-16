import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/order-lunch',
      name: 'order-lunch',
      component: () => import('../views/OrderLunchView.vue')
    },
    {
      path: '/catering',
      name: 'catering',
      component: () => import('../views/CateringView.vue')
    },
    {
      path: '/order-catering',
      name: 'order-catering',
      component: () => import('../views/OrderCateringView.vue')
    },
    {
      path: '/catering-faq',
      name: 'catering-faq',
      component: () => import('../views/CateringFAQView.vue')
    },
    {
      path: '/lets-connect',
      name: 'lets-connect',
      component: () => import('../views/ConnectView.vue')
    }
  ]
})

export default router
