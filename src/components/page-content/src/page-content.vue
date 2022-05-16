<template>
  <div class="p-20px p-t-0 border-top-20px border-gray-100">
    <HHTable
      :tableData="tableData"
      :pageCount="pageCount"
      v-model:pageConfig="pageConfig"
      v-bind="contentTableConfig"
      @selectionChange="selectionChange"
    >
      <template #headerHandle v-if="isCreate">
        <el-button type="primary">新建</el-button>
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
          <el-button plain type="text" :icon="Edit" size="small" v-if="isUpdate"
            >编辑</el-button
          >
          <el-button
            plain
            type="text"
            :icon="Delete"
            class="color-red-700"
            size="small"
            v-if="isDelete"
            >删除</el-button
          >
        </span>
      </template>
      <template
        v-for="otherSlot in otherSlots"
        :key="otherSlot.prop"
        #[otherSlot.slotName]="scope"
      >
        <template v-if="otherSlot.slotName">
          <slot :name="otherSlot.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </HHTable>
  </div>
</template>

<script lang="ts">
import HHTable from "@/base-ui/table"
import { ITableColumn } from "@/base-ui/table"
import { Edit, Delete } from "@element-plus/icons-vue"
import { useStore } from "vuex"
import { computed, ref, watch } from "vue"
import { usePermission } from "@/hooks/usePermission"
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
    const isCreate = usePermission(props.pageName, "create")
    const isDelete = usePermission(props.pageName, "delete")
    const isUpdate = usePermission(props.pageName, "update")
    const isQuery = usePermission(props.pageName, "query")
    const pageConfig = ref({ currentPage: 0, pageSize: 10 })
    watch(pageConfig, () => getData())
    const getData = (queryInfo: any = {}) => {
      // if (!isQuery) return
      store.dispatch("mainStore/getPageListData", {
        pageName: props.pageName,
        queryInfo: {
          offset:
            pageConfig.value.currentPage - 1 < 0
              ? 0
              : (pageConfig.value.currentPage - 1) * pageConfig.value.pageSize,
          size: pageConfig.value.pageSize,
          ...queryInfo
        }
      })
    }
    getData()
    const tableData = computed(() =>
      store.getters["mainStore/pageDataList"](props.pageName)
    )

    const pageCount = computed(() => {
      return store.getters["mainStore/pageDataCount"](props.pageName)
    })

    const selectionChange = (val: ITableColumn[]) => {
      console.log(val)
    }
    const otherSlots = props.contentTableConfig.tableColumns.filter(
      (item: { slotName: string }) => {
        if (
          item.slotName === "status" ||
          item.slotName === "createAt" ||
          item.slotName === "updateAt" ||
          item.slotName === "operate"
        )
          return false
        return true
      }
    )
    return {
      tableData,
      Edit,
      Delete,
      selectionChange,
      getData,
      pageConfig,
      pageCount,
      otherSlots,
      isCreate,
      isDelete,
      isUpdate,
      isQuery
    }
  }
}
</script>

<style lang="scss" scoped></style>
