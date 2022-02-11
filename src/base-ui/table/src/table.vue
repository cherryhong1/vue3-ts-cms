<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
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
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
