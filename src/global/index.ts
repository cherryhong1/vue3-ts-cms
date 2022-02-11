import { App } from "vue"
import registerProperty from "./register-property"
export function globalRegister(app: App): void {
  app.use(registerProperty)
}
