<template>
  <div class="h-full w-full">
    <el-container class="h-full w-full">
      <el-aside width="210px" class="h-full">
        <menuVue></menuVue>
      </el-aside>
      <el-container>
        <el-header class="h-70px">Header</el-header>
        <el-main class="">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import menuVue from "@/components/nav-menu"
export default defineComponent({
  components: {
    menuVue
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
