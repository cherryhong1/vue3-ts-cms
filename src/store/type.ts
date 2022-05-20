import { ILoginState } from "./login/type"
import { ISystem } from "./main/system/type"
export interface IRootState {
  name: string
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  loginStore: ILoginState
  systemStore: ISystem
}
export interface IData<T = any> {
  data: T
  code: number
}
export type IStoreType = IRootState & IRootWithModule
