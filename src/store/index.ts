import { createStore, Store, useStore as useVuexStore } from "vuex"
import loginStore from "./login"
import systemStore from "./main/system"
import mainStore from "./main"
import { IRootState } from "./type"
import { IStoreType } from "./type"
import { getPageListData } from "@/service/request/main/main"
const store = createStore<IRootState>({
  state() {
    return {
      name: "",
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    departmentMutation(state, list: any[]) {
      state.entireDepartment = list
    },
    roleMutation(state, list: any[]) {
      state.entireRole = list
    }
  },
  actions: {
    async getInitDataAction({ commit }) {
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      const roleResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const { list: roleList } = roleResult.data
      commit("departmentMutation", departmentList)
      commit("roleMutation", roleList)
    }
  },
  modules: {
    loginStore,
    systemStore,
    mainStore
  }
})
export function setToken() {
  store.dispatch("loginStore/setLocal")
  store.dispatch("getInitDataAction")
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
