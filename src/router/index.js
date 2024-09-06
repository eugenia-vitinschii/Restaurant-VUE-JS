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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
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
      path: '/bowl',
      name: 'bowl',
      component: () => import('../views/BowlView.vue')
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
