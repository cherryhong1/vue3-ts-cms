<template>
  <div class="h-70px leading-70px flex items-center justify-between">
    <div class="flex items-center">
      <el-icon size="26px" @click="handleFoldClick"
        ><expand v-if="isFold" /><fold v-else
      /></el-icon>
      <div class="flex items-center ml-20px">
        <span>系统管理</span>/
        <span>用户管理</span>
      </div>
    </div>
    <userVue></userVue>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import userVue from "./src/user.vue"
export default defineComponent({
  emits: ["changeFold"],
  components: {
    userVue
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("changeFold", isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped></style>
