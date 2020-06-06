import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 兼容
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
}catch (e) {}

export default new Vuex.Store({
  state: {
    // cityName: localStorage.city || '北京'
    cityName: defaultCity
  },
  mutations: {
    setCityName(state,payload) {
      state.cityName = payload;
      try {
        localStorage.city = payload;
      }catch (e) {}
    }
  }
})
