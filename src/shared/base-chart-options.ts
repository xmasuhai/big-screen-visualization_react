import {px} from './px';

export const baseEchartOptions = {
  textStyle: {
    fontSize: px(12),
    color: '#79839E'
  },
  title: {show: false},
  legend: {show: false},
  grid: {
    x: px(10),
    y: px(20),
    x2: px(10),
    y2: px(10),
    containLabel: true
  },
};
