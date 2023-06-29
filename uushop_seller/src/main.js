import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import echarts from 'echarts'
import './assets/main.css'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
