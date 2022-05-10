<template>
  <div>
    <div class="header m-b-20px">
      <el-row justify="space-between">
        <slot name="header">
          <span>{{ title }}</span>
        </slot>
        <slot name="headerHandle"></slot>
      </el-row>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
        v-if="showSelection"
      ></el-table-column>
      <el-table-column
        type="index"
        width="55"
        v-if="showIndex"
      ></el-table-column>
      <template v-for="tableColumn in tableColumns" :key="tableColumn.prop">
        <el-table-column v-bind="tableColumn" align="center">
          <template #default="scope">
            <slot :name="tableColumn.slotName" :row="scope.row">{{
              scope.row[tableColumn.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer flex justify-end p-t-20px p-b-20px">
      <slot name="footer">
        <el-pagination
          :currentPage="pageConfig.currentPage"
          :page-size="pageConfig.pageSize"
          :page-sizes="[10, 20, 50, 100]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue"
import { ITableColumn } from "./type"
export default defineComponent({
  props: {
    tableData: {
      type: Array as PropType<any[]>,
      required: true
    },
    tableColumns: {
      type: Array as PropType<ITableColumn[]>,
      default: () => []
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    showSelection: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    pageConfig: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
    },
    pageCount: {
      type: Number,
      default: 0
    }
  },
  emits: ["selectionChange", "update:pageConfig"],
  setup(props, { emit }) {
    const handleSelectionChange = (val: ITableColumn[]) => {
      emit("selectionChange", val)
    }
    const small = ref(false)
    const background = ref(false)
    const disabled = ref(false)
    const handleSizeChange = (pageSize: number) => {
      emit("update:pageConfig", { ...props.pageConfig, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit("update:pageConfig", { ...props.pageConfig, currentPage })
    }
    return {
      small,
      background,
      disabled,
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped></style>
