import React from 'react'

export const Chart5: React.FC = () => {
  return (
    <div className="success-result">
      <h2>往年战果数对比</h2>
      <table>
        <thead>
        <tr>
          <th>年份</th>
          <th>破案数</th>
          <th>抓获嫌疑人</th>
          <th>并串案件</th>
          <th>现勘录入</th>
          <th>视侦录入</th>
          <th>合成案件数</th>
          <th>合计</th>
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
