import React, {useEffect, useRef} from 'react'
import echarts, {EChartsOption, ECharts} from 'echarts'
import {px} from '../shared/px'
import {createEchartsOptions} from '../shared/create-echarts-options'

// 案发派出所管辖统计
export const Chart1: React.FC = () => {
  // 获取节点
  const divRef = useRef<HTMLDivElement>(null)

  // 挂载后获取
  useEffect(() => {
    // 基于准备好的 dom，初始化 echarts 实例
    const myChart: ECharts =
      echarts.init(divRef.current)

    // 图表选项
    const options: EChartsOption = {
      xAxis: {
        data: [
          '兰州新区',
          '兰州新区',
          '兰州新区',
          '兰州新区',
          '兰州新区',
          '兰州新区',
          '兰州新区',
          '兰州新区',
          '兰州新区',
        ],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          // show: true,
          // interval: 0,
          // fontSize: px(12),
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
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
        },
      ],
    }

    // 绘制图表
    myChart.setOption(createEchartsOptions(options))

  }, [])

  return (
    <div className="bordered jurisdictional-statistics">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}