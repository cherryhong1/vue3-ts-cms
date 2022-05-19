import { Module } from "vuex"
import router from "@/router"
import { ILoginState } from "./type"
import { IRootState } from "../type"
import {
  accountRequest,
  getUserInfoById,
  getUserMenusByRoleId
} from "@/service/request/login/login"
import { IAccount } from "@/service/request/login/type"
import localCache from "@/utils/cache"
import { mapMenu, userMenusToPermission } from "@/utils/mapMenu"

const loginStore: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenu(userMenus)
      routes.forEach((route) => {
        router.addRoute("main", route)
      })
      const permissions = userMenusToPermission(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountAction({ commit, dispatch }, payload: IAccount) {
      const result = await accountRequest(payload)
      const { id, token } = result.data
      localCache.setCache("token", token)
      commit("changeToken", token)
      dispatch("getInitDataAction", null, { root: true })
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      localCache.setCache("userInfo", userInfo)
      commit("changeUserInfo", userInfo)
      console.log(userInfo.role.id)
      const userMenusResult = await getUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      localCache.setCache("userMenus", userMenus)
      commit("changeUserMenus", userMenus)
      router.push("/main")
    },
    phoneAction({ commit }, payload: any) {
      console.log(commit, payload)
    },
    setLocal({ commit, dispatch }) {
      const token = localCache.getCache("token")
      if (token) {
        dispatch("getInitDataAction", null, { root: true })
        commit("changeToken", token)
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = localCache.getCache("userMenus")
      if (userMenus) {
        commit("changeUserMenus", userMenus)
      }
    }
  }
}
export default loginStore
