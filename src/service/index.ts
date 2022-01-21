import HhRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
const hhRequest = new HhRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ""
      if (token) {
        if (!config.headers) config.headers = {}
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log("请求成功")
      return config
    },
    requestCatch: (err) => {
      console.log("请求失败")
      return err
    },
    responseInterceptor: (config) => {
      console.log("响应成功")
      return config
    },
    responseCatch: (err) => {
      console.log("响应失败")
      return err
    }
  }
})
export default hhRequest
