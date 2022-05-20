<template>
  <div class="role">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <pageContent
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @createEmit="handleCreateClick"
      @editEmit="handleEditClick"
    ></pageContent>
    <pageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="role"
      :title="title"
      :modalFormConfig="modalFormConfig"
      :otherInfo="otherInfo"
    >
      <div class="ml-20px">
        <el-tree
          ref="elTreeRef"
          :data="menuList"
          show-checkbox
          node-key="id"
          :props="defaultProps"
          @check="handleCheckClick"
        /></div
    ></pageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from "vue"
import contentTableConfig from "./config/contentConfig"
import searchFormConfig from "./config/searchFormConfig"
import pageModal from "@/components/page-modal"
import modalFormConfig from "./config/modalFormConfig"
import { usePageModal } from "@/hooks/usePageModal"
import { menuMapToLeaf } from "@/utils/mapMenu"
import { useStore } from "@/store"
import { ElTree } from "element-plus"
export default defineComponent({
  name: "role",
  components: {
    pageModal
  },
  setup() {
    const defaultProps = {
      children: "children",
      label: "name"
    }
    const store = useStore()
    const menuList = computed(() => {
      const result = store.state.entireMenu
      return result
    })
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCb = (item: any) => {
      console.log(item)
      const leafList = menuMapToLeaf(item.menuList)
      console.log(leafList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafList, false)
      })
    }
    const [
      pageModalRef,
      title,
      defaultInfo,
      handleCreateClick,
      handleEditClick
    ] = usePageModal("角色", undefined, editCb)

    const otherInfo = ref({})
    const handleCheckClick = (data1, data2) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      contentTableConfig,
      searchFormConfig,
      modalFormConfig,
      pageModalRef,
      title,
      defaultInfo,
      handleCreateClick,
      handleEditClick,
      defaultProps,
      menuList,
      handleCheckClick,
      otherInfo,
      elTreeRef
    }
  }
})
</script>

<style scoped></style>
