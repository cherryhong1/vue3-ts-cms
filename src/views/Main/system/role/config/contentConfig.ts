const contentTableConfig = {
  showIndex: true,
  showSelection: true,
  title: "角色列表",
  tableColumns: [
    {
      label: "角色",
      prop: "name",
      minWidth: "80",
      slotName: "name"
    },
    {
      label: "介绍",
      prop: "intro",
      minWidth: "80",
      slotName: "intro"
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
