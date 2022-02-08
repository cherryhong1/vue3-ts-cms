<template>
  <div class="overview">
    <HHForm v-bind="searchFormConfig" v-model="formData"></HHForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import HHForm from "@/base-ui/form"
import searchFormConfig from "./config/searchFormConfig"
export default defineComponent({
  name: "overview",
  setup() {
    const formData = ref({
      name: "",
      sports: "",
      date: []
    })
    return {
      formData,
      searchFormConfig
    }
  },
  components: {
    HHForm
  }
})
</script>

<style scoped></style>
