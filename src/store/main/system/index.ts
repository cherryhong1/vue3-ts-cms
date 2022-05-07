import { IRootState } from "@/store/type"
import { Module } from "vuex"
import { ISystem } from "./type"
import { getUserList } from "@/service/request/main/system/system"
import { getPageListData } from "@/service/request/main/main"
const systemModule: Module<ISystem, IRootState> = {
  namespaced: true,
  state() {
    return {
      userCount: 0,
      userList: []
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.userList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async userListAction({ commit }, payload: any) {
      const result = await getUserList(payload.data)
      const { list, totalCount } = result.data
      commit("changeUsersList", list)
      commit("changeUsersCount", totalCount)
    },
    async getPageListData({ commit }, payload: any) {
      const result = await getPageListData(payload.pageUrl, payload.queryInfo)
      const { list, totalCount } = result.data
      commit("changeUsersList", list)
      commit("changeUsersCount", totalCount)
    }
  },
  getters: {}
}
export default systemModule
