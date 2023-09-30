import React, {useEffect, useRef} from 'react'
import * as echarts from 'echarts'
import {createEchartsOptions} from '../shared/create-echarts-options'
import chinaData from '../geo/china.json'

// 全市犯罪人员籍贯分布地
export const Chart6: React.FC = () => {
  const divRef = useRef(null)
  const colors = {
    '甘肃省': '#15B8FD',
    '四川省': '#06E1EE',
    '青海省': '#BB31F7',
  }

  useEffect(() => {
    const myChart = echarts.init(divRef.current)
    // 注册地图
    // @ts-ignore
    echarts.registerMap('CNMap', chinaData)
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false,},
      yAxis: {show: false,},
      series: [
        {
          type: 'map',
          map: 'CNMap', // 自定义扩展图表类型
          label: {show: false, color: 'white'},
          emphasis: {
            label: {color: 'white'},
            areaColor: '#5470C6',
          },
          itemStyle: {
            areaColor: '#010D3D',
            borderColor: '#01A7F7',
          },
          //关联数据
          data: [
            {name: '甘肃省', value: 1, },
            {name: '四川省', value: 50},
            {name: '青海省', value: 100},
          ],
        },
      ],
      roam: false, // 是否开启鼠标缩放和平移漫游
      visualMap: {
        min: 1,
        max: 100,
        inRange: {
          color: [colors['甘肃省'], colors['四川省'], colors['青海省']],
        },
        show: false,
      },

    }))

  }, [])

  return (
    <div className="bordered native-place">
      <h2><span>全市犯罪人员籍贯分布地</span></h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="legend bordered">
          <span className="icon" style={{background: colors['甘肃省']}}/>甘肃籍
          <span className="icon" style={{background: colors['四川省']}}/>四川籍
          <span className="icon" style={{background: colors['青海省']}}/>青海籍
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  )
}
