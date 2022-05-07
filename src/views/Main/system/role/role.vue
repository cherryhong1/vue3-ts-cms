<template>
  <div class="role">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <pageContent
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import contentTableConfig from "./config/contentConfig"
import searchFormConfig from "./config/searchFormConfig"
import pageContent from "@/components/page-content"
import pageSearch from "@/components/page-search"
export default defineComponent({
  name: "role",
  components: {
    pageContent,
    pageSearch
  },
  setup() {
    return {
      contentTableConfig,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
