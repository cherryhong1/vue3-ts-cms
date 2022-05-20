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
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import HHForm from "@/base-ui/form"
import { useStore } from "vuex"
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
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const modelValue = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalFormConfig.formItems) {
          modelValue.value[`${item.prop}`] = newValue[`${item.prop}`]
        }
      }
    )

    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch("mainStore/editPageData", {
          pageName: props.pageName,
          data: {
            ...modelValue.value,
            ...props.otherInfo
          },
          id: props.defaultInfo.id
        })
      } else {
        // 新增
        store.dispatch("mainStore/createPageData", {
          pageName: props.pageName,
          data: {
            ...modelValue.value,
            ...props.otherInfo
          }
        })
      }
    }

    return {
      dialogVisible,
      modelValue,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
