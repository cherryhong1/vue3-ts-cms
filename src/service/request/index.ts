import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"
import type { HhRequestInterceptors, HhRequestConfig } from "./type"
class HhRequest {
  instance: AxiosInstance
  interceptors?: HhRequestInterceptors
  constructor(config: HhRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseCatch
    )
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}
export default HhRequest
