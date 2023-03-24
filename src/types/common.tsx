import { ChartData } from 'chart.js';

export type ImageObject = {
  url: string;
  alt?: string;
};

export type ButtonChartType = 'day' | 'week' | 'month' | 'year';

export type ChartDataRes = {
  day: { data: ChartData };
  week: { data: ChartData };
  month: { data: ChartData };
  year: { data: ChartData };
};
