import { createStore } from "vuex"
import loginStore from "./login"
import { IRootState } from "./type"
const store = createStore<IRootState>({
  state() {
    return {
      name: ""
    }
  },
  mutations: {},
  actions: {},
  modules: {
    loginStore
  }
})

export default store
