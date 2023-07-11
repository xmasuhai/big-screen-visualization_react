import React, {useEffect, useRef} from 'react'
import * as echarts from 'echarts'
import {createEchartsOptions} from '../shared/create-echarts-options'

export const Chart2 = () => {
  // 获取节点
  const divRef = useRef(null)

  // 挂载后获取
  useEffect(() => {
    // 基于准备好的 dom，初始化 echarts 实例
    const myChart =
      echarts.init(divRef.current)
    // 绘制图表
    myChart.setOption(createEchartsOptions({
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitLine: {show: false},
          axisLabel: {show: false}
        },
        yAxis: {
          axisTick: {show: false},
          type: 'category',
          data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局',
            '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
          axisLabel: {
            formatter(val) {
              return val.replace('公安局', '\n公安局');
            }
          }
        },
        series: [
          {
            name: '2011 年',
            type: 'bar',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
          },
          {
            name: '2012 年',
            type: 'bar',
            data: [2, 3, 4, 5, 6, 7, 8, 9, 10]
          }
        ]
      })
    )

  }, [])

  return (
    <div className="bordered case-solving-ranking">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart"/>
      <div className="legend">
        <span className="first"/> 破案排名 1
        <span className="second"/> 破案排名 2
      </div>
    </div>
  )
}