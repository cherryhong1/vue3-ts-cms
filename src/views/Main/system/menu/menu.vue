<template>
  <div class="menu">
    <pageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import contentTableConfig from "./config/contentConfig"
export default defineComponent({
  name: "menu",
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
