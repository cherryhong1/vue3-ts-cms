import { IRootState } from "../type"
import { Module } from "vuex"
import { IMain } from "./type"
import { getPageListData } from "@/service/request/main/main"
import { List } from "@element-plus/icons-vue/dist/types"
const MainModule: Module<IMain, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersCount: 0,
      usersList: [],
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list
    },
    changeUsersCount(state, count: number) {
      state.usersCount = count
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    }
  },
  actions: {
    async getPageListData({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // let pageUrl = ""
      // console.log(pageName)
      // switch (pageName) {
      //   case "users":
      //     pageUrl = "/users/list"
      //     break
      //   case "role":
      //     pageUrl = "/role/list"
      //     break
      //   default:
      //     break
      // }
      const result = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = result.data
      const changePageName =
        (pageName.slice(0, 1) as string).toLocaleUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
      // switch (pageName) {
      //   case "users":
      //     commit("changeUsersList", list)
      //     commit("changeUsersCount", totalCount)
      //     break
      //   case "role":
      //     commit("changeRoleList", list)
      //     commit("changeRoleCount", totalCount)
      //     break
      //   default:
      //     break
      // }
    }
  },
  getters: {
    pageDataList(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case "users":
        //     return state.usersList
        //     break
        //   case "role":
        //     return state.roleList
        //     break
        //   default:
        //     break
        // }
      }
    },
    pageDataCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
        // switch (pageName) {
        //   case "users":
        //     return state.usersCount
        //     break
        //   case "role":
        //     return state.roleCount
        //     break
        //   default:
        //     break
        // }
      }
    }
  }
}
export default MainModule
