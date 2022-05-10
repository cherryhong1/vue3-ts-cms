<template>
  <div class="user">
    <pageSearch
      :searchFormConfig="searchFormConfig"
      @resetFormEmit="handleResetClick"
      @searchFormEmit="handleSearchForm"
    ></pageSearch>
    <pageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"
import searchFormConfig from "./config/searchFormConfig"
import contentTableConfig from "./config/contentConfig"
import { usePageSearch } from "@/hooks/usePageSearch"
export default defineComponent({
  name: "user",
  setup() {
    const [pageContentRef, handleResetClick, handleSearchForm] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleSearchForm,
      pageContentRef
    }
  },
  components: {
    pageSearch,
    pageContent
  }
})
</script>

<style scoped></style>
