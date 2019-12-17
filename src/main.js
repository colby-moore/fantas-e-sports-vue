import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'

//bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import login from './components/login.vue'
import landing from './components/landing.vue'

Vue.use(BootstrapVue)
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
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  router,
}).$mount('#app')


export default router