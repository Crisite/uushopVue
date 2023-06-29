import Vue from 'vue'

import App from './App.vue'
import router from './router'
import './plugins/element.js'
import echarts from 'echarts'
import './assets/main.css'

Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
