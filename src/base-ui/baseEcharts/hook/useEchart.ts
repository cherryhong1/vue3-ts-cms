import * as echarts from "echarts"
export function useEchart(el: HTMLElement) {
  const echartsInstance = echarts.init(el)
  const setOptions = (options: echarts.EChartsOption) => {
    echartsInstance.setOption(options)
  }
  const updatedSize = () => {
    echartsInstance.resize()
  }
  window.addEventListener("resize", () => {
    echartsInstance.resize()
  })
  return {
    echartsInstance,
    setOptions,
    updatedSize
  }
}
