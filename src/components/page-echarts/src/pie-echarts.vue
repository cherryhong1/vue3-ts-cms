<template>
  <div>
    <baseEchart :option="option"></baseEchart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"
import baseEchart from "@/base-ui/baseEcharts"
import { IDataType } from "../type/index"
const props = defineProps<{
  pieData: IDataType[]
}>()
const option = computed(() => {
  return {
    title: {
      text: "Referer of a Website",
      subtext: "Fake Data",
      left: "center"
    },
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "vertical",
      left: "left"
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
