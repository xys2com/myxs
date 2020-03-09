import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [
    createPersistedState({
      // 存储个别state
      reducer (state) {
        return {
          menuActive: state.menuActive,
          userInfo: state.userInfo,
          userMenuData: state.userMenuData,
          menu: state.menu
        }
      },
      storage: window.sessionStorage
    })
  ]
})
