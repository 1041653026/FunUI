import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/summary',
    component: Home,
    children: [{
      path: '/summary',
      name: 'summary',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Summary'),
    }]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
