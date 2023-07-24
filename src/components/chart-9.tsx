import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";

export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);

  }, []);

  return (
    <div className="age-bracket-chart-right">9
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};