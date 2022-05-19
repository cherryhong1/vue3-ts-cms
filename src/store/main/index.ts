import { ElMessage } from "element-plus"
import { IRootState } from "../type"
import { Module } from "vuex"
import { IMain } from "./type"
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from "@/service/request/main/main"
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
      const result = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = result.data
      const changePageName =
        (pageName.slice(0, 1) as string).toLocaleUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
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
      dispatch("getPageListData", {
        queryInfo: {
          offset: 0,
          size: 10
        },
        pageName
      })
    },
    async createPageData({ dispatch }, payload: any) {
      const { pageName, data } = payload
      const url = `/${pageName}`
      const result = await createPageData(url, data)
      console.log(result)
      ElMessage({
        type: "success",
        message: "创建成功"
      })
      dispatch("getPageListData", {
        queryInfo: {
          offset: 0,
          size: 10
        },
        pageName
      })
    },
    async editPageData({ dispatch }, payload: any) {
      const { pageName, data, id } = payload
      const url = `/${pageName}/${id}`
      await editPageData(url, data)
      ElMessage({
        type: "success",
        message: "编辑成功"
      })
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
