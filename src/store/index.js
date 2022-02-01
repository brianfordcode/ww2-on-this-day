import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      start: 1939,
      end: 1945,
      post: 'this is a post',
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export default store