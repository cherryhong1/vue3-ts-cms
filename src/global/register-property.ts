import { App } from "vue"
import { utcDateFormat, timestampDateFormat } from "@/utils/date-format"
export default function registerProperty(App: App) {
  App.config.globalProperties.$filter = {
    utcDateFormat(value: string) {
      return utcDateFormat(value)
    },
    timestampDateFormat(value: number) {
      return timestampDateFormat(value)
    }
  }
}
