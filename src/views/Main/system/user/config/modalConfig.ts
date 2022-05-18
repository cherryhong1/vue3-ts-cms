import { IForm } from "@/base-ui/form"
const modalFormConfig: IForm = {
  formItems: [
    {
      label: "姓名",
      prop: "name",
      placeholder: "请输入姓名",
      type: "input"
    },
    {
      label: "真实姓名",
      prop: "realname",
      placeholder: "请输入真实姓名",
      type: "input"
    },
    {
      label: "密码",
      prop: "password",
      placeholder: "请输入密码",
      type: "input"
    },
    {
      label: "手机号",
      prop: "cellphone",
      placeholder: "请输入手机号",
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
