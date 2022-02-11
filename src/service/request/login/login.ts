import { IAccount } from "./type"
import hhRequest from "@/service"
import { ILoginData, IUserInfo, IUserMenus } from "@/store/login/type"
import { IData } from "@/store/type"
enum loginApi {
  loginUrl = "/login",
  getUserInfoByIdUrl = "/users",
  getUserMenusByRoleIdUrl = "/role"
}
export function accountRequest(account: IAccount) {
  return hhRequest.post<IData<ILoginData>>({
    url: loginApi.loginUrl,
    data: account
  })
}

export function getUserInfoById(id: number) {
  return hhRequest.get<IData<IUserInfo>>({
    url: `${loginApi.getUserInfoByIdUrl}/${id}`,
    showLoading: false
  })
}

export function getUserMenusByRoleId(id: number) {
  return hhRequest.get<IData<IUserMenus>>({
    url: `${loginApi.getUserMenusByRoleIdUrl}/${id}/menu`,
    params: id,
    showLoading: false
  })
}
