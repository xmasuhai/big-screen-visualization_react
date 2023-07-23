import React from 'react'

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
          <td>2015</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>2016</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>2017</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
