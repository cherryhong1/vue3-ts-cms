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
      :modalFormConfig="modalFormConfigRef"
      :title="title"
      pageName="users"
    ></pageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import searchFormConfig from "./config/searchFormConfig"
import contentTableConfig from "./config/contentConfig"
import modalFormConfig from "./config/modalConfig"
import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModal } from "@/hooks/usePageModal"
import pageModal from "@/components/page-modal"
import { useStore } from "@/store"
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
    const [
      pageModalRef,
      title,
      defaultInfo,
      handleCreateClick,
      handleEditClick
    ] = usePageModal("用户", createFn, editFn)

    const store = useStore()
    const modalFormConfigRef = computed(() => {
      const departmentItem = modalFormConfig.formItems.find((item) => {
        return item.prop === "departmentId"
      })
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { label: item.name, value: item.id }
      })
      const roleItem = modalFormConfig.formItems.find((item) => {
        return item.prop === "roleId"
      })
      roleItem!.options = store.state.entireRole.map((item) => {
        return { label: item.name, value: item.id }
      })
      return modalFormConfig
    })
    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleSearchForm,
      pageContentRef,
      modalFormConfigRef,
      handleCreateClick,
      handleEditClick,
      defaultInfo,
      pageModalRef,
      title
    }
  }
})
</script>

<style scoped></style>
