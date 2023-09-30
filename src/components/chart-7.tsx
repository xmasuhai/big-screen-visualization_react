import React, {useEffect, useRef} from 'react'
import * as echarts from 'echarts'
import {createEchartsOptions} from '../shared/create-echarts-options'
import {px} from '../shared/px'

// 犯罪人员年龄段分布 性别
export const Chart7: React.FC = () => {
  const divRef = useRef(null)
  useEffect(() => {
    // 初始化 init
    const myChart = echarts.init(divRef.current)
    // 设置选项 setOptions
    myChart.setOption(createEchartsOptions({
      color: ['#8D70F8', '#33A4FA'],
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['60%', '75%'], // 内外圈直径
          avoidLabelOverlap: false,
          label: {
            show: true,
            color: 'inherit', // 引线文字颜色
            position: 'outside',
            fontSize: px(15),
            formatter(options) {
              return options.value * 100 + '%'
            }
          },
          labelLine: { show: false, length: px(10), length2: px(0) },
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            {value: 0.2, name: '女',},
            {value: 0.8, name: '男',},
          ]
        },
      ]
    }))
  }, [])

  return (
    <div className="age-bracket-chart-left">
      <div className="chart">
        <div className="chart-main" ref={divRef}/>
        <div className="chart-text">性别</div>
      </div>
      <div className="legend">
        <span className="male"/>男
        <span className="female"/>女
      </div>
    </div>
  )
}