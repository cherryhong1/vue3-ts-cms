<template>
  <div>
    <el-form ref="formRef" label-width="100px">
      <el-row>
        <template v-for="(formItem, index) in formItems" :key="index">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="formItem.label"
              :prop="formItem.prop"
              :label-width="labelWidth"
              :style="itemLayout"
            >
              <template
                v-if="formItem.type === 'input' || formItem.type === 'password'"
              >
                <el-input
                  type="text"
                  :placeholder="formItem.placeholder"
                  :show-password="formItem.type === 'password'"
                  v-bind="formItem.otherOptions"
                ></el-input>
              </template>
              <template v-else-if="formItem.type === 'select'">
                <el-select
                  :placeholder="formItem.placeholder"
                  v-bind="formItem.otherOptions"
                >
                  <el-option
                    v-for="option in formItem.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="formItem.type === 'datepicker'">
                <el-date-picker
                  type="daterange"
                  range-separator="To"
                  v-bind="formItem.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
        <el-col v-bind="colLayout">
          <el-form-item :label-width="labelWidth" :style="itemLayout">
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { IFormItem } from "./type"
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "100px"
    },
    itemLayout: {
      type: Object,
      default: () => ({ padding: "10px 5px" })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xs: 24,
        sm: 24,
        md: 12,
        lg: 8,
        xl: 6
      })
    }

    // form: {
    //   type: {},
    //   default: () => {}
    // }
  },
  setup() {
    return {}
  }
})
</script>
