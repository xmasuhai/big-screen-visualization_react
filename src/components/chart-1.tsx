import React, {useEffect, useRef} from 'react'
import * as echarts from 'echarts'
import type  {EChartsOption, ECharts} from 'echarts'
import {px} from '../shared/px'
import {createEchartsOptions} from '../shared/create-echarts-options'

// 案发派出所管辖统计
export const Chart1: React.FC = () => {
  // 获取节点
  const divRef = useRef<HTMLDivElement>(null)
  const myChart = useRef(null)
  const data = [
    {name: '兰州新区', value: 10},
    {name: '兰州新区', value: 20},
    {name: '兰州新区', value: 36},
    {name: '兰州新区', value: 41},
    {name: '兰州新区', value: 15},
    {name: '兰州新区', value: 26},
    {name: '兰州新区', value: 37},
    {name: '兰州新区', value: 18},
    {name: '兰州新区', value: 29},
  ]

  // 挂载后获取
  useEffect(() => {
    // 基于准备好的 dom，初始化 echarts 实例
    myChart.current = echarts.init(divRef.current)

    // 图表选项
    const options: EChartsOption = {
      xAxis: {
        data: data.map(item => item.name),
        axisTick: {show: false}, // 刻度线
        // 轴线
        axisLine: {lineStyle: {color: '#083B70'}},
        // 刻度标签
        axisLabel: {
          // 文字内容格式器
          formatter(val: string) {
            // return val.split('').join('\n') // 一列
            if (val.length > 2) {
              const arr = val.split('')
              arr.splice(2, 0, '\n')
              return arr.join('')
            } else {
              return val
            }
          },
        },
      },
      yAxis: {
        // grid 网格区域分隔线
        splitLine: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'},
        },
        axisLabel: {
          fontSize: px(12),
        },
      },
      // 实际数据
      series: [
        {
          type: 'bar',
          data: data.map(item => item.value),
        },
      ],
    }

    // 绘制图表
    ;(myChart.current as ECharts).setOption(createEchartsOptions(options))

  }, [])

  return (
    <div className="bordered jurisdictional-statistics">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}