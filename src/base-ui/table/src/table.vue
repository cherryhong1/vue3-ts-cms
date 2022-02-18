<template>
  <div>
    <div class="header m-b-20px">
      <slot name="header">
        <el-row justify="space-around">
          <span>{{ title }}</span>
        </el-row>
      </slot>
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
    <div class="footer">
      <slot name="footer">
        <!-- <el-pagination
          v-model:currentPage="pageConfig.currentPage"
          v-model:page-size="pageConfig.pageSize"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination> -->
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
    }
  },
  emits: ["selectionChange"],
  setup(props, { emit }) {
    const handleSelectionChange = (val: ITableColumn[]) => {
      emit("selectionChange", val)
    }
    const small = ref(false)
    const background = ref(false)
    const disabled = ref(false)
    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
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
