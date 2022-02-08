<template>
  <div class="overview">
    <HHForm v-bind="searchFormConfig"></HHForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import HHForm from "@/base-ui/form"
import searchFormConfig from "./config/searchFormConfig"
export default defineComponent({
  name: "overview",
  setup() {
    return {
      searchFormConfig
    }
  },
  components: {
    HHForm
  }
})
</script>

<style scoped></style>
