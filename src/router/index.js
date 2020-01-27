import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Money from '../views/Money.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue') // which is lazy-loaded when the route is visited.
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
