import type { AxiosRequestConfig, AxiosResponse } from "axios"
export interface HhRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => void
  requestCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosResponse) => void
  responseCatch?: (err: any) => any
}
export interface HhRequestConfig extends AxiosRequestConfig {
  interceptors?: HhRequestInterceptors
}
