<template>
  <div class="h-full w-full">
    <el-container class="h-full w-full">
      <el-aside :width="collapse ? '60px' : '210px'" class="h-full">
        <menuVue :collapse="collapse"></menuVue>
      </el-aside>
      <el-container>
        <el-header class="h-70px">
          <headerVue @changeFold="changeFold"></headerVue>
        </el-header>
        <el-main class="">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import menuVue from "@/components/nav-menu"
import headerVue from "@/components/nav-header/index.vue"
export default defineComponent({
  components: {
    menuVue,
    headerVue
  },
  setup() {
    const collapse = ref(false)
    const changeFold = (isFold: boolean) => {
      collapse.value = isFold
    }
    return {
      collapse,
      changeFold
    }
  }
})
</script>

<style scoped></style>
