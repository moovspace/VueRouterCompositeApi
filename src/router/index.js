import Vue from 'vue'
// Vue router
import VueRouter from 'vue-router'
// Composition API
import VueCompositionApi from '@vue/composition-api';

import Home from '../views/Home.vue'
import Money from '../views/Money.vue'

Vue.use(VueRouter)
Vue.use(VueCompositionApi);
Vue.use(Money)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
