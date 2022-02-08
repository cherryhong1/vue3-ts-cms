<template>
  <div class="h-70px leading-70px flex items-center justify-between">
    <div class="flex items-center">
      <el-icon size="26px" @click="handleFoldClick"
        ><expand v-if="isFold" /><fold v-else
      /></el-icon>
      <div class="flex items-center ml-20px">
        <HHBreadcrumb :breadcrumbs="breadcrumbs"></HHBreadcrumb>
      </div>
    </div>
    <userVue></userVue>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import userVue from "./src/user.vue"
import HHBreadcrumb, { IBreadcrumb } from "@/base-ui/breadcrumb"
import { useRoute } from "vue-router"
import { useStore } from "@/store/index"
import { pathMatchBreadcrumb } from "@/utils/mapMenu"
export default defineComponent({
  emits: ["changeFold"],
  components: {
    userVue,
    HHBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)

    const breadcrumbs = computed(() => {
      const route = useRoute()
      const store = useStore()
      const userMenus = store.state.loginStore.userMenus
      const currentPath = route.path
      return pathMatchBreadcrumb(userMenus, currentPath)
    })

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("changeFold", isFold.value)
    }
    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped></style>
