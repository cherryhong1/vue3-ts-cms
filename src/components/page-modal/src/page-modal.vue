<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :destroy-on-close="true"
      width="30%"
      center
    >
      <HHForm v-model="modelValue" v-bind="modalFormConfig"></HHForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import HHForm from "@/base-ui/form"
export default defineComponent({
  components: {
    HHForm
  },
  props: {
    title: {
      type: String,
      default: "新增"
    },
    modalFormConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const modelValue = ref<any>({})
    console.log(props.defaultInfo)
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalFormConfig.formItems) {
          modelValue.value[`${item.prop}`] = newValue[`${item.prop}`]
        }
      }
    )
    return {
      dialogVisible,
      modelValue
    }
  }
})
</script>

<style scoped></style>
