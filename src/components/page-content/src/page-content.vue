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
        <el-button type="primary" @click="handleClickCreate">新建</el-button>
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
      <template #operate="scope">
        <span>
          <el-button
            plain
            type="text"
            :icon="Edit"
            size="small"
            v-if="isUpdate"
            @click="handleClickEdit(scope.row)"
            >编辑</el-button
          >
          <el-button
            plain
            type="text"
            :icon="Delete"
            class="color-red-700"
            size="small"
            v-if="isDelete"
            @click="handleClickDelete(scope.row)"
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
  emits: ["createEmit", "editEmit"],
  setup(props: any, { emit }) {
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

    const handleClickDelete = (row: any) => {
      store.dispatch("mainStore/deletePageData", {
        pageName: props.pageName,
        id: row.id
      })
    }
    const handleClickCreate = () => {
      emit("createEmit")
    }
    const handleClickEdit = (item: any) => {
      emit("editEmit", item)
    }
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
      isQuery,
      handleClickDelete,
      handleClickCreate,
      handleClickEdit
    }
  }
}
</script>

<style lang="scss" scoped></style>
