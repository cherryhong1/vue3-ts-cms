<template>
  <div class="p-20px p-t-0 border-top-20px border-gray-100">
    <HHTable
      :tableData="tableData"
      v-bind="contentTableConfig"
      @selectionChange="selectionChange"
    >
      <template #headerHandle>
        <el-button type="primary">新建用户</el-button>
      </template>
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
</template>

<script lang="ts">
import HHTable from "@/base-ui/table"
import { ITableColumn } from "@/base-ui/table"
import { Edit, Delete } from "@element-plus/icons-vue"
import { useStore } from "vuex"
import { computed } from "vue"
export default {
  components: {
    HHTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props: any) {
    const store = useStore()
    store.dispatch("mainStore/getPageListData", {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const tableData = computed(() =>
      store.getters["mainStore/pageDataList"](props.pageName)
    )

    const selectionChange = (val: ITableColumn[]) => {
      console.log(val)
    }
    return {
      tableData,
      Edit,
      Delete,
      selectionChange
    }
  }
}
</script>

<style lang="scss" scoped></style>
