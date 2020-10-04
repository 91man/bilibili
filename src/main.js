import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Toast } from 'vant'
import 'vant/lib/index.css'
import http from '../http.js'
import '@/assets/iconfont.css'
Vue.prototype.$http = http
Vue.prototype.$Toast = Toast
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
