import { createStore, Store, useStore as useVuexStore } from "vuex"
import loginStore from "./login"
import { IRootState } from "./type"
import { IStoreType } from "./type"
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
export function setToken() {
  store.dispatch("loginStore/setLocal")
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
