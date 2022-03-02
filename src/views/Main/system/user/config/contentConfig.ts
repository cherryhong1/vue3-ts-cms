const contentTableConfig = {
  showIndex: true,
  showSelection: true,
  title: "用户列表",
  tableColumns: [
    {
      label: "姓名",
      prop: "name",
      minWidth: "80",
      slotName: "name"
    },
    {
      label: "真实姓名",
      prop: "realname",
      minWidth: "80",
      slotName: ""
    },
    {
      label: "手机号",
      prop: "cellphone",
      minWidth: "90",
      slotName: ""
    },
    {
      label: "状态",
      prop: "enable",
      minWidth: "60",
      slotName: "status"
    },
    {
      label: "创建时间",
      prop: "createAt",
      minWidth: "110",
      slotName: "createAt"
    },
    {
      label: "更新时间",
      prop: "updateAt",
      minWidth: "110",
      slotName: "updateAt"
    },
    {
      label: "操作",
      prop: "operate",
      minWidth: "180",
      slotName: "operate"
    }
  ]
}
export default contentTableConfig
