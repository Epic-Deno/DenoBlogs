/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-08-16 15:13:39
 * @LastEditors: Pony
 * @LastEditTime: 2020-08-16 17:24:03
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeNav: 0
  },
  mutations: {
    CHANGE_NAV(state,index) {
      state.activeNav = index
    },
  },
  actions: {
  },
  modules: {
  }
})
