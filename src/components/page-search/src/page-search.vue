<template>
  <div>
    <HHForm v-bind="searchFormConfig" v-model="modelValue">
      <!-- <template #header>
        <el-row class="pt-20px" justify="center"> 测试头部</el-row>
      </template> -->
      <template #footer>
        <el-row justify="end" class="pb-20px pr-20px"
          ><el-button plain :icon="Refresh">重置</el-button>
          <el-button type="primary" :icon="Search">查询</el-button></el-row
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
  setup() {
    const modelValue = ref({
      id: ""
    })
    return {
      modelValue,
      Search,
      Refresh
    }
  }
})
</script>

<style scoped></style>
