<template>
  <div class="overview">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageSearch from "@/components/page-search"
import searchFormConfig from "./config/searchFormConfig"
export default defineComponent({
  name: "overview",
  components: {
    pageSearch
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
