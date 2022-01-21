import { createApp } from "vue"
import hhRequest from "./service"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./service"
import "element-plus/dist/index.css"
const app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app")
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
hhRequest.request({
  url: "/home/multidata",
  method: "GET",
  showLoading: false
})
