<template>
  <div class="role">
    <pageContent
      :contentTableConfig="contentTableConfig"
      pageName="roles"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import contentTableConfig from "./config/contentConfig"
import pageContent from "@/components/page-content"
export default defineComponent({
  name: "role",
  components: {
    pageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
