import { ILoginState } from "./login/type"
export interface IRootState {
  name: string
}

export interface IRootWithModule {
  loginStore: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
