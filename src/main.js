import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'

//bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
