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
      label: "运动",
      prop: "sports",
      placeholder: "请选择",
      type: "select",
      options: [
        { label: "足球", value: "soccer" },
        { label: "篮球", value: "basketball" }
      ]
    },
    {
      type: "datepicker",
      prop: "date",
      placeholder: "请选择",
      label: "日期",
      otherOptions: {
        startPlaceholder: "请选择开始时间",
        endPlaceholder: "请选择结束时间"
      }
    }
  ],
  labelWidth: "80px",
  itemLayout: { padding: "10px 5px 0px" }
}
export default searchFormConfig
