import { IRootState } from "../type"
import { Module } from "vuex"
import { IMain } from "./type"
import { getPageListData } from "@/service/request/main/main"
const MainModule: Module<IMain, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersCount: 0,
      usersList: [],
      rolesList: [],
      rolesCount: 0
    }
  },
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list
    },
    changeUsersCount(state, count: number) {
      state.usersCount = count
    },
    changeRolesList(state, list: any[]) {
      state.rolesList = list
    },
    changeRolesCount(state, count: number) {
      state.rolesCount = count
    }
  },
  actions: {
    async getPageListData({ commit }, payload: any) {
      const pageName = payload.pageName
      let pageUrl = ""
      console.log(pageName)
      switch (pageName) {
        case "users":
          pageUrl = "/users/list"
          break
        case "roles":
          pageUrl = "/role/list"
          break
        default:
          break
      }
      const result = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = result.data
      switch (pageName) {
        case "users":
          commit("changeUsersList", list)
          commit("changeUsersCount", totalCount)
          break
        case "roles":
          commit("changeRolesList", list)
          commit("changeRolesCount", totalCount)
          break
        default:
          break
      }
    }
  },
  getters: {
    pageDataList(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "users":
            return state.usersList
            break
          case "roles":
            return state.rolesList
            break
          default:
            break
        }
      }
    },
    pageDataCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "users":
            return state.usersCount
            break
          case "roles":
            return state.rolesCount
            break
          default:
            break
        }
      }
    }
  }
}
export default MainModule
