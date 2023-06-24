import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts'

export const Home = () => {
  // 获取节点
  const divRef = useRef(null)
  // 挂载后获取
  useEffect(() => {
    // 基于准备好的 dom，初始化 echarts 实例
    const myChart =
      echarts.init(divRef.current);
    // 绘制图表
    myChart.setOption({
      textStyle: {
        color: '#79839e',
        fontSize: 6,
      },
      xAxis: {
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9',],
        axisLabel: {
          fontSize: 6,
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: 6,
        },
      },
      grid: {
        containLabel: true,
        x: 20,
        y: 20,
        x2: 20,
        y2: 20,
      },
      series: [
        {
          name: ' 销量 ',
          type: 'bar',
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29,]
        }
      ]
    });

  }, [])

  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}></header>
      <main>
        <section className="section1">
          <div className="bordered jurisdictional-statistics">
            <h2> 案发派出所阁下统计数字 </h2>
            <div ref={divRef} className="chart"></div>
          </div>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
