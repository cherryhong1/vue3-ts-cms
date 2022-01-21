import axios from "axios"
import type { AxiosInstance } from "axios"
import type { HhRequestInterceptors, HhRequestConfig } from "./type"
import { ElLoading } from "element-plus"
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading"
const DEFAULT_LOADING = true
class HhRequest {
  instance: AxiosInstance
  interceptors?: HhRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: HhRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "Loading"
          })
        }
        console.log("全局的请求拦截，请求成功")
        return config
      },
      (err) => {
        console.log("全局的请求拦截，请求失败")
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        console.log("全局的响应拦截，响应成功")
        const data = res.data
        switch (data.returnCode) {
          case "-1001":
            console.log("请求失败")

            break

          default:
            return data
            break
        }
      },
      (err) => {
        this.loading?.close()
        switch (err.response.status) {
          case 404:
            console.log("页面找不到")
            break

          default:
            break
        }
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
    if (config.showLoading === false) {
      this.showLoading = false
    }
    this.instance
      .request(config)
      .then((res: any) => {
        //  单个接口响应
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        console.log(res)
        this.showLoading = DEFAULT_LOADING
      })
      .catch((err) => {
        this.showLoading = DEFAULT_LOADING
        return err
      })
  }
}
export default HhRequest
