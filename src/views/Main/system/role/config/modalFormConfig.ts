import { IForm } from "@/base-ui/form"
const modalFormConfig: IForm = {
  formItems: [
    {
      label: "角色",
      prop: "name",
      placeholder: "请输入角色",
      type: "input"
    },
    {
      label: "介绍",
      prop: "intro",
      placeholder: "请输入",
      type: "input"
    }
  ],
  labelWidth: "70px",
  itemLayout: {},
  colLayout: {
    span: 24
  }
}
export default modalFormConfig
