<template>
  <div class="goods">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="4"
          fit="cover"
        />
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import searchFormConfig from "./config/searchFormConfig"
import contentTableConfig from "./config/contentConfig"
export default defineComponent({
  name: "goods",
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
