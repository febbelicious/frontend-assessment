import { createStore } from 'vuex'
import JsonData from '../data/data.json'

const store = createStore({
  state: () => ({
    jsonData: {},
    currentSelection: '',
    currentSelectionDesc: '',
  }),
  getters: {},
  mutations: {
    initializeStore(state) {
      state.jsonData = JsonData
    },
    // sets the current selected tab/accordion
    SET_SELECTION(state, payload) {
      state.currentSelection = payload.title
      state.currentSelectionDesc = payload.content
    },
  },
  actions: {
    saveSelection({ commit }, data) {
      commit('SET_SELECTION', data)
    },
  },
})

export default store
