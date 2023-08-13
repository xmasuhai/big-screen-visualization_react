import React from 'react'


// 往年战果数对比
export const Chart5: React.FC = () => {
  return (
    <div className="success-result">
      <h2><span className="scale-size">往年战果数对比</span> </h2>
      <table>
        <thead>
        <tr>
          <th><span className="scale-size">年份</span> </th>
          <th><span className="scale-size">破案数</span> </th>
          <th><span className="scale-size">抓获嫌疑人</span> </th>
          <th><span className="scale-size">并串案件</span> </th>
          <th><span className="scale-size">现勘录入</span> </th>
          <th><span className="scale-size">视侦录入</span> </th>
          <th><span className="scale-size">合成案件数</span> </th>
          <th><span className="scale-size">合计</span> </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><span className="scale-size">2015</span> </td>
          <td><span className="scale-size">2</span> </td>
          <td><span className="scale-size">3</span> </td>
          <td><span className="scale-size">4</span> </td>
          <td><span className="scale-size">5</span> </td>
          <td><span className="scale-size">6</span> </td>
          <td><span className="scale-size">7</span> </td>
          <td><span className="scale-size">8</span> </td>
        </tr>
        <tr>
          <td><span className="scale-size">2016</span> </td>
          <td><span className="scale-size">2</span> </td>
          <td><span className="scale-size">3</span> </td>
          <td><span className="scale-size">4</span> </td>
          <td><span className="scale-size">5</span> </td>
          <td><span className="scale-size">6</span> </td>
          <td><span className="scale-size">7</span> </td>
          <td><span className="scale-size">8</span> </td>
        </tr>
        <tr>
          <td><span className="scale-size">2017</span></td>
          <td><span className="scale-size">2</span> </td>
          <td><span className="scale-size">3</span> </td>
          <td><span className="scale-size">4</span> </td>
          <td><span className="scale-size">5</span> </td>
          <td><span className="scale-size">6</span> </td>
          <td><span className="scale-size">7</span> </td>
          <td><span className="scale-size">8</span> </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
