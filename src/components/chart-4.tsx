import React, {useEffect, useRef} from 'react'
import * as echarts from 'echarts'
import type {/*EChartsOption,*/ ECharts} from 'echarts'
import {createEchartsOptions} from '../shared/create-echarts-options'
import {px} from '../shared/px'

// 案发时段分析
export const Chart4 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    {period: '0', percent: 0.15,},
    {period: '2', percent: 0.13,},
    {period: '4', percent: 0.11,},
    {period: '6', percent: 0.13,},
    {period: '8', percent: 0.14,},
    {period: '10', percent: 0.15,},
    {period: '12', percent: 0.16,},
    {period: '14', percent: 0.18,},
    {period: '16', percent: 0.21,},
    {period: '18', percent: 0.19,},
    {period: '20', percent: 0.17,},
    {period: '22', percent: 0.16,},
    {period: '24', percent: 0.15,},
  ]

  useEffect(() => {
    // 基于准备好的 dom，初始化 echarts 实例
    myChart.current = echarts.init(divRef.current)

    ;(myChart.current as ECharts)
      .setOption(createEchartsOptions({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: data.map(item => item.period),
          splitLine: {show: true, lineStyle: {color: '#073E78'}},
          axisTick: {show: false},
          axisLine: {show: false},
        },
        yAxis: {
          type: 'value',
          splitLine: {lineStyle: {color: '#073E78'}},
          axisLabel: {
            formatter(val: number) {
              return val * 100 + '%'
            }
          }
        },
        series: [{
          name: '故意伤人',
          type: 'line',
          data: data.map(item => item.percent),
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: {width: px(2)},
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#414a9f'
            }, {
              offset: 1,
              color: '#1b1d52'
            }]),
          },
        }]
      }))
  }, [])

  return (
    <div className="bordered incident-period">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  )
}