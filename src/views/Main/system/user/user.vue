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
      @createEmit="handleCreateClick"
      @editEmit="handleEditClick"
      pageName="users"
    ></pageContent>
    <pageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfig"
    ></pageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import searchFormConfig from "./config/searchFormConfig"
import contentTableConfig from "./config/contentConfig"
import modalFormConfig from "./config/modalConfig"
import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModal } from "@/hooks/usePageModal"
import pageModal from "@/components/page-modal"
export default defineComponent({
  name: "user",
  components: {
    pageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleSearchForm] = usePageSearch()

    const createFn = () => {
      const passwordItem = modalFormConfig.formItems.find(
        (item) => item.prop === "password"
      )
      if (passwordItem) {
        passwordItem.isHidden = false
      }
    }
    const editFn = () => {
      const passwordItem = modalFormConfig.formItems.find(
        (item) => item.prop === "password"
      )
      if (passwordItem) {
        passwordItem.isHidden = true
      }
    }
    const [pageModalRef, defaultInfo, handleCreateClick, handleEditClick] =
      usePageModal(createFn, editFn)
    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleSearchForm,
      pageContentRef,
      modalFormConfig,
      handleCreateClick,
      handleEditClick,
      defaultInfo,
      pageModalRef
    }
  }
})
</script>

<style scoped></style>
