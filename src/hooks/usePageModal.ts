import { ref } from "vue"
import pageModal from "@/components/page-modal/src/page-modal.vue"

type cbFn = () => void
export function usePageModal(createCb?: cbFn, editCb?: cbFn) {
  const defaultInfo = ref({})
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const handleCreateClick = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    createCb && createCb()
  }
  const handleEditClick = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }
  return [pageModalRef, defaultInfo, handleCreateClick, handleEditClick]
}
