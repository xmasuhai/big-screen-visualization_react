import React from 'react'
import './home.scss'
import headerBg from '../images/header.png'
import {Chart1} from '../components/chart-1'
import {Chart2} from '../components/chart-2'
import {Chart3} from '../components/chart-3'
import {Chart4} from '../components/chart-4'
import {Chart5} from '../components/chart-5'
import {Chart6} from '../components/chart-6'
import {Chart7} from '../components/chart-7'
import {Chart8} from '../components/chart-8'
import {Chart9} from '../components/chart-9'
import {Chart10} from '../components/chart-10'
import {Chart11} from '../components/chart-11'

export const Home = () => {
  const year = new Date().getFullYear()
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}></header>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className="section2">
          <Chart3/>
          <Chart4/>
        </section>
        <section className="bordered section3">
          <Chart5/>
        </section>
        <section className="section4">
          <Chart6/>
          <div className="bordered age-bracket">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts-wrapper">
              <Chart7/>
              <Chart8/>
              <Chart9/>
            </div>
          </div>
        </section>
        <section className="section5">
          {/*案发类型*/}
          <div className="bordered row1 crime-type">
            <h2>案发类型统计</h2>
            <div className="charts-wrapper">
              <Chart10/>
              <Chart11/>
            </div>
          </div>
          {/*案发街道*/}
          <div className="bordered row2 crime-street">
            <h2>案发街道统计</h2>
            <div className="charts">

            </div>
          </div>
          {/*作案手段*/}
          <div className="bordered row3 modus-operandi">
            <h2>作案手段分析</h2>
          </div>
        </section>
      </main>
      <footer>
        <span className="label-text">&copy; Copyright @Xmasuhai 2022-{year}</span>
      </footer>
    </div>
  )
}
