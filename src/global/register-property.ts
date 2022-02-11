import { App } from "vue"
export default function registerProperty(App: App) {
  App.config.globalProperties.$filter = {
    format(value: string) {
      console.log(value)
      return "2020-2-19"
    }
  }
}
