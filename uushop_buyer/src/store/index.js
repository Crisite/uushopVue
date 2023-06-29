import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 全局存储的数据
export default new Vuex.Store({
  state: {
    globalhost:'http://localhost:8686/',
    index: 2,
    selectedArray: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
