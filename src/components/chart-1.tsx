import React, {useEffect, useRef} from 'react'
import * as echarts from 'echarts'

// 自使用字体函数
const px = n => n / 2420 * (window as any).pageWidth
export const Chart1 = () => {

  // 获取节点
  const divRef = useRef(null)

  // 挂载后获取
  useEffect(() => {
    // 基于准备好的 dom，初始化 echarts 实例
    const myChart =
      echarts.init(divRef.current)
    // 绘制图表
    myChart.setOption({
      textStyle: {
        color: '#79839e',
        fontSize: px(12),
      },
      xAxis: {
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区',],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          show: true,
          interval: 0,
          fontSize: px(12),
          formatter(val) {
            return val.split('').join('\n')
            /*
            if (val.length > 2) {
              const arr = val.split('')
              arr.splice(2, 0, '\n')
              return arr.join('')
            } else {
              return val
            }
            */
          },
        },
      },
      yAxis: {
        splitLine: {show: false},
        axisLabel: {
          fontSize: px(12),
        },
      },
      grid: {
        containLabel: true,
        x: px(10),
        y: px(20),
        x2: px(10),
        y2: px(10),
      },
      series: [
        {
          name: ' 销量 ',
          type: 'bar',
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29,]
        }
      ]
    })

  }, [])

  return (
    <div className="bordered jurisdictional-statistics">
      <h2> 案发派出所阁下统计数字 </h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}