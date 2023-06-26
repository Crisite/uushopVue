import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from "./store";
import 'mint-ui/lib/style.css'
import './assets/main.css'
import '../public/static/mui/css/mui.min.css'

Vue.use(Mint)
Vue.prototype.axios = axios

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
