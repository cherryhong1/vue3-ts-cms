const contentTableConfig = {
  showIndex: true,
  showSelection: true,
  title: "商品列表",
  tableColumns: [
    {
      label: "商品名称",
      prop: "name",
      minWidth: "80",
      slotName: "name"
    },
    {
      label: "原价",
      prop: "oldPrice",
      minWidth: "80",
      slotName: ""
    },
    {
      label: "折扣价",
      prop: "newPrice",
      minWidth: "80",
      slotName: ""
    },
    {
      label: "图片",
      prop: "imgUrl",
      minWidth: "80",
      slotName: "image"
    },
    {
      label: "状态",
      prop: "status",
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
