import type { AxiosRequestConfig, AxiosResponse } from "axios"
export interface HhRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseCatch?: (err: any) => any
}
export interface HhRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HhRequestInterceptors<T>
  showLoading?: boolean
}

export interface IList {
  list: any[]
  totalCount: number
}
