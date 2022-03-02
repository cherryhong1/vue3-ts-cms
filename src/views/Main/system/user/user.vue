<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <pageContent
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageSearch from "@/components/page-search"
import searchFormConfig from "./config/searchFormConfig"
import pageContent from "@/components/page-content"
import contentTableConfig from "./config/contentConfig"
export default defineComponent({
  name: "user",
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
