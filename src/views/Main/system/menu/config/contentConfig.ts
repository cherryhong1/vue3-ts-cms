const contentTableConfig = {
  showIndex: false,
  showSelection: false,
  showPagination: false,
  childrenProps: {
    "row-key": "id",
    "tree-props": {
      children: "children"
    }
  },
  title: "菜单列表",
  tableColumns: [
    {
      label: "名称",
      prop: "name",
      minWidth: "100",
      slotName: "name"
    },
    {
      label: "菜单url",
      prop: "url",
      minWidth: "150",
      slotName: ""
    },
    {
      label: "图标",
      prop: "icon",
      minWidth: "90",
      slotName: ""
    },
    {
      label: "类型",
      prop: "type",
      minWidth: "40",
      slotName: ""
    },
    {
      label: "权限",
      prop: "permission",
      minWidth: "150",
      slotName: ""
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
