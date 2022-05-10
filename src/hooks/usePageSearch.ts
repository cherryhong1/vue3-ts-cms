import { ref } from "vue"
import pageContent from "@/components/page-content/index.vue"
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getData()
  }
  const handleSearchForm = (queryInfo: any) => {
    pageContentRef.value?.getData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleSearchForm]
}
