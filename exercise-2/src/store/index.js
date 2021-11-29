import { createStore } from 'vuex'

const store = createStore({
  state: () => ({
    openAccordion: '',
  }),
  getters: {},
  mutations: {
    SET_ACCORDION(state, payload) {
      state.openAccordion = payload
    },
  },
  actions: {
    saveAccordion({ commit }, data) {
      commit('SET_ACCORDION', data)
    },
  },
})

export default store
