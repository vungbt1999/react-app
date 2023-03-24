import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { ButtonChartType } from 'types/common';
import { ButtonChart } from 'libraries/components/button';
import { useTranslation } from 'react-i18next';

export type MyChartProps = {
  date?: string;
  title?: string;
  isShowButton?: boolean;
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export default function MyChart({ date, title, isShowButton = false }: MyChartProps) {
  const { t } = useTranslation();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      },
      x: {
        grid: {
          color: '#777777'
        },
        ticks: {
          color: '#FFFFFF'
        },
        border: {
          display: false
        }
      }
    }
  };

  const labels = [
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
    '1月',
    '2月',
    '3月',
    '4月',
    '5月'
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.floor(Math.random() * 1000) + -1000),
        borderColor: '#FFCC21',
        backgroundColor: '#FFCC21'
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.floor(Math.random() * 1000) + -1000),
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0'
      }
    ]
  };

  const buttons: ButtonChartType[] = ['day', 'month', 'week', 'year'];

  return (
    <div className="bg-dark-500 py-4 px-8">
      {date && (
        <div className="flex items-start mb-1">
          <p className="font-secondary text-light text-[15px] leading-[18px] tracking-[0.15px] uppercase max-w-[96px]">
            {title || t('body_record')}
          </p>
          <p className="font-secondary text-[22px] text-light leading-[27px] tracking-[0.11px]">
            {date}
          </p>
        </div>
      )}
      <Line options={options} data={data} />
      {isShowButton && (
        <div className="flex items-center gap-4 mt-2">
          {buttons.map((item) => {
            return <ButtonChart key={item} type={item} onClick={(value) => alert(value)} />;
          })}
        </div>
      )}
    </div>
  );
}
