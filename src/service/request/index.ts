import axios from "axios"
import type { AxiosInstance } from "axios"
import type { HhRequestInterceptors, HhRequestConfig } from "./type"
class HhRequest {
  instance: AxiosInstance
  interceptors?: HhRequestInterceptors
  constructor(config: HhRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    //  单个实例请求
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestCatch
    )
    //  单个实例响应
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        console.log("全局的请求拦截，请求成功")
        return config
      },
      (err) => {
        console.log("全局的请求拦截，请求失败")
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        console.log("全局的响应拦截，响应成功")
        return config
      },
      (err) => {
        console.log("全局的响应拦截，响应失败")
        return err
      }
    )
  }
  request(config: HhRequestConfig): any {
    //  单个接口请求
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res: any) => {
      //  单个接口响应
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}
export default HhRequest
