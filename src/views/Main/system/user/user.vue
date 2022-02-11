<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <div class="p-20px p-t-0 border-top-20px border-gray-100">
      <HHTable
        :tableData="tableData"
        :tableColumns="tableColumns"
        :showIndex="showIndex"
        :showSelection="showSelection"
        title="用户列表"
        @selectionChange="selectionChange"
      >
        <template #status="scope">
          <el-switch
            :active-value="1"
            :inactive-value="0"
            v-model="scope.row.enable"
          />
        </template>
        <template #createAt="scope">
          {{ $filter.utcDateFormat(scope.row.createAt) }}
        </template>
        <template #updateAt="scope">
          {{ $filter.utcDateFormat(scope.row.updateAt) }}
        </template>
        <template #operate>
          <span>
            <el-button plain type="text" :icon="Edit" size="small"
              >编辑</el-button
            >
            <el-button
              plain
              type="text"
              :icon="Delete"
              class="color-red-700"
              size="small"
              >删除</el-button
            >
          </span>
        </template>
      </HHTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"
import pageSearch from "@/components/page-search"
import searchFormConfig from "./config/searchFormConfig"
import HHTable from "@/base-ui/table"
import { ITableColumn } from "@/base-ui/table"
import { Edit, Delete } from "@element-plus/icons-vue"
export default defineComponent({
  name: "user",
  components: {
    pageSearch,
    HHTable
  },
  setup() {
    const store = useStore()
    store.dispatch("systemStore/userListAction", {
      data: {
        offset: 0,
        size: 100
      }
    })
    const tableData = computed(() => store.state.systemStore.userList)
    const tableColumns: ITableColumn[] = [
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
    const showIndex = true
    const showSelection = true
    const selectionChange = (val: ITableColumn[]) => {
      console.log(val)
    }
    return {
      searchFormConfig,
      tableData,
      tableColumns,
      Edit,
      Delete,
      showIndex,
      showSelection,
      selectionChange
    }
  }
})
</script>

<style scoped></style>
