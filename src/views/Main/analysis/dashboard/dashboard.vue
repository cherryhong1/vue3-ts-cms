<template>
  <div class="dashboard">
    <h2>dashboard</h2>
    <baseEcharts :option="option" width="600px" height="400px"></baseEcharts>
    <pieEcharts :pieData="pieData"></pieEcharts>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import baseEcharts from "@/base-ui/baseEcharts"
import { pieEcharts } from "@/components/page-echarts"
export default defineComponent({
  name: "dashboard",
  components: {
    baseEcharts,
    pieEcharts
  },
  setup() {
    const option = {
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: [23, 24, 18, 25, 27, 28, 25]
        }
      ]
    }
    const pieData = [
      { value: 1048, name: "Search Engine" },
      { value: 735, name: "Direct" },
      { value: 580, name: "Email" },
      { value: 484, name: "Union Ads" },
      { value: 300, name: "Video Ads" }
    ]
    return {
      option,
      pieData
    }
  }
})
</script>

<style scoped></style>
