import { ElMessage } from "element-plus"
import { IRootState } from "../type"
import { Module } from "vuex"
import { IMain } from "./type"
import { getPageListData, deletePageData } from "@/service/request/main/main"
const MainModule: Module<IMain, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersCount: 0,
      usersList: [],
      roleList: [],
      roleCount: 0,
      goodsCount: 0,
      goodsList: [],
      menuList: [],
      menuCount: 0
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
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
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
    },
    async deletePageData({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      const result = await deletePageData(pageUrl)
      const { code } = result
      if (code !== 0) {
        ElMessage({
          type: "warning",
          message: "删除失败"
        })
      } else {
        ElMessage({
          type: "success",
          message: "删除成功"
        })
      }
      console.log(result)
      dispatch("getPageListData", {
        queryInfo: {
          offset: 0,
          size: 10
        },
        pageName
      })
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
