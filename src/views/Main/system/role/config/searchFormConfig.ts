import { IForm } from "@/base-ui/form"
const searchFormConfig: IForm = {
  formItems: [
    {
      label: "用户名",
      prop: "name",
      placeholder: "请输入",
      type: "input"
    },
    {
      label: "介绍",
      prop: "intro",
      placeholder: "请输入",
      type: "input"
    },
    {
      label: "创建时间",
      prop: "createAt",
      placeholder: "请输入",
      type: "datepicker"
    }
  ],
  labelWidth: "180PX"
}
export default searchFormConfig
