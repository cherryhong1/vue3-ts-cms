<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
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
                  v-model="formData[`${formItem.prop}`]"
                ></el-input>
              </template>
              <template v-else-if="formItem.type === 'select'">
                <el-select
                  :placeholder="formItem.placeholder"
                  v-bind="formItem.otherOptions"
                  v-model="formData[`${formItem.prop}`]"
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
                  v-model="formData[`${formItem.prop}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue"
import { IFormItem } from "./type"
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
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
      default: () => ({ padding: "10px 5px 0 " })
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
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        emit("update:modelValue", newValue)
      },
      { deep: true }
    )
    return {
      formData
    }
  }
})
</script>
