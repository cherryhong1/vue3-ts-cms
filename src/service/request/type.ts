import type { AxiosRequestConfig, AxiosResponse } from "axios"
export interface HhRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseCatch?: (err: any) => any
}
export interface HhRequestConfig extends AxiosRequestConfig {
  interceptors?: HhRequestInterceptors
}
