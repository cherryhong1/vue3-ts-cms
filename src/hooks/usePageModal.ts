import { ref } from "vue"
import pageModal from "@/components/page-modal/src/page-modal.vue"

type cbFn = () => void
export function usePageModal(
  pageName?: string,
  createCb?: cbFn,
  editCb?: cbFn
) {
  const defaultInfo = ref({})
  const title = ref("")
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const handleCreateClick = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    createCb && createCb()
    title.value = `新增${pageName}`
  }
  const handleEditClick = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
    title.value = `编辑${pageName}`
  }
  return [pageModalRef, title, defaultInfo, handleCreateClick, handleEditClick]
}
