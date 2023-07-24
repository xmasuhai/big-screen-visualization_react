import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";

export const Chart8: React.FC = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);

  }, []);

  return (
    <div className="age-bracket-chart-middle">8
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};