// // Vue App without router
import Vuex from 'vuex'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api';
import router from './router'
import store from "./store"
import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueCompositionApi);

Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
