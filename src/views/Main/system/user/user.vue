<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <div class="p-20px">
      <HHTable :tableData="tableData" :tableColumns="tableColumns">
        <template #status="scope">
          <el-switch
            :active-value="1"
            :inactive-value="0"
            v-model="scope.row.enable"
          />
        </template>
        <template #createAt="scope">
          {{ $filter.format(scope.row.createAt) }}
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
        minWidth: "180",
        slotName: "createAt"
      },
      {
        label: "更新时间",
        prop: "updateAt",
        minWidth: "180",
        slotName: "updateAt"
      }
    ]

    return {
      searchFormConfig,
      tableData,
      tableColumns
    }
  }
})
</script>

<style scoped></style>
