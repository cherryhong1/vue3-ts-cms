export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}
export interface ILoginData {
  id: number
  token: string
  username: string
}
export interface IUserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: string
  updateAt: string
  role: any
  department: any
}
export interface IUserMenus {
  id: number
  name: string
  type: number
  icon: string
  url: string
  sort: number
  children?: any
}
export interface IData<T = any> {
  data: T
  code: number
}
