<template>
  <div class="h-70px leading-70px">
    <el-icon size="26px" @click="handleFoldClick"
      ><expand v-if="isFold" /><fold v-else
    /></el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  emits: ["changeFold"],
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
