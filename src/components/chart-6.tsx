import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart6: React.FC = () => {
  const divRef = useRef(null);
  useEffect(() => {
  }, []);

  return (
    <div className="bordered native-place">
      <h2><span>全市犯罪人员籍贯分布地</span></h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
