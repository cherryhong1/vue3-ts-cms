import { Module } from "vuex"
import { ILoginState } from "./type"
import { IRootState } from "../type"
const loginStore: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountAction({ commit }, payload: any) {
      console.log(payload, commit)
    },
    phoneAction({ commit }, payload: any) {
      console.log(commit, payload)
    }
  }
}
export default loginStore
