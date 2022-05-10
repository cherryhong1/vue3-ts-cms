import { IForm } from "@/base-ui/form"
const searchFormConfig: IForm = {
  formItems: [
    {
      label: "用户名",
      prop: "name",
      placeholder: "请输入",
      type: "input"
    }
  ],
  labelWidth: "180PX"
}
export default searchFormConfig
