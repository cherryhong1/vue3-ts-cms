import { createApp } from "vue"
import hhRequest from "./service"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./service"
const app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app")
hhRequest.request({
  url: "/home/multidata",
  method: "GET"
})
