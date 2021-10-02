import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: []
  },
  mutations: {
    setTableData(state, tableData) {
      state.tableData = tableData
    }
  },
  getters: {
    tableData(state) {
      return state.tableData
    }
  },
  actions: {
  },
  modules: {
  }
})
