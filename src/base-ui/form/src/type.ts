type IFormType = "input" | "select" | "password" | "datepicker"
type optionType = {
  label: string
  value: string | boolean | number
}
export interface IFormItem {
  type: IFormType
  label: string
  prop: string
  placeholder?: string
  rules?: any[]
  options?: optionType[]
  otherOptions?: any
  isHidden?: boolean
}
// 输入框
export interface iInput {
  name: string
  prop: string
  maxlength: string | number
  minlength: string | number
  type: string
}
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemLayout?: any
  colLayout?: any
}
