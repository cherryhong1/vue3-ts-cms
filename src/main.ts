import { createApp } from "vue"
import hhRequest from "./service"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import * as Icons from "@element-plus/icons-vue"
import "./service"
import "element-plus/dist/index.css"
import "normalize.css"
import "./assets/css/index.css"
import "windi.css"
const app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app")

// 注册全局组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})
// hhRequest.request({
//   url: "/home/multidata",
//   method: "GET",
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log("个人请求")
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log("个人响应")
//       return res
//     }
//   }
// })
// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// hhRequest
//   .get<DataType>({
//     url: "/home/multidata"
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
