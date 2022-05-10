<template>
  <div>
    <HHForm v-bind="searchFormConfig" v-model="formData">
      <!-- <template #header>
        <el-row class="pt-20px" justify="center"> 测试头部</el-row>
      </template> -->
      <template #footer>
        <el-row justify="end" class="pb-20px pr-20px"
          ><el-button plain :icon="Refresh" @click="resetForm">重置</el-button>
          <el-button type="primary" :icon="Search" @click="searchForm"
            >查询</el-button
          ></el-row
        >
      </template>
    </HHForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import HHForm from "@/base-ui/form"
import { Search, Refresh } from "@element-plus/icons-vue"
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HHForm
  },
  emits: ["resetFormEmit", "searchFormEmit"],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.prop] = ""
    }
    const formData = ref(formOriginData)
    const resetForm = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit("resetFormEmit")
    }
    const searchForm = () => {
      emit("searchFormEmit", { ...formData.value })
    }
    return {
      formData,
      Search,
      Refresh,
      resetForm,
      searchForm
    }
  }
})
</script>

<style scoped></style>
