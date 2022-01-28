<template>
  <div class="flex justify-center items-center">
    <el-empty>
      <el-button type="primary" @click="goToHome">返回首页</el-button>
    </el-empty>
  </div>
</template>

<script lang="ts">
import router from "@/router"
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    const goToHome = () => {
      router.push("/main")
    }
    return {
      goToHome
    }
  }
})
</script>

<style scoped></style>
