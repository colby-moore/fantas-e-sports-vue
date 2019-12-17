import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import landing from '../components/landing.vue'
import register from '../components/register.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: landing
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
      },
  ]
})

export default router