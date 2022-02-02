import { createStore } from 'vuex'



const store = createStore({
  state() {
    return {
      start: 1939,
      end: 1945,
      selectedDate: new Date(1939, new Date().getMonth()),
      post: 'POST',
      
    }
  },
  mutations: {
    changeDate(state, date) {
      state.selectedDate = date
    }
  },
  actions: {
    changeDate(context, date) {
      context.commit('changeDate', date)
    }
  },
  modules: {
  }
})

export default store