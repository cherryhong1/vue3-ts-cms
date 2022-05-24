<template>
  <div class="baseEcharts">
    <div
      class="echartsRef"
      ref="echartsRef"
      :style="{ width: width, height: height }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, withDefaults, defineProps, watchEffect } from "vue"
import { EChartsOption } from "echarts"
import { useEchart } from "../hook/useEchart"
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    option: EChartsOption
  }>(),
  {
    width: "500px",
    height: "300px"
  }
)
const echartsRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions } = useEchart(echartsRef.value!)
  watchEffect(() => {
    setOptions(props.option)
  })
})
</script>

<style scoped></style>
