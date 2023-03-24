import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import clsx from 'clsx';
import { ButtonChart } from 'libraries/components/button';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { ButtonChartType } from 'types/common';

export type MyChartProps = {
  date?: string;
  title?: string;
  activeType: ButtonChartType;
  isShowButton?: boolean;
  onChangeTime?: (value: ButtonChartType) => void;
  className?: string;
  classNameChart?: string;
  chartData: any;
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export default function MyChart({
  date,
  title,
  activeType,
  isShowButton,
  className,
  classNameChart,
  chartData,
  onChangeTime
}: MyChartProps) {
  const { t } = useTranslation();
  const buttons: ButtonChartType[] = ['day', 'month', 'week', 'year'];
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

  return (
    <div className={clsx('bg-dark-500 py-4 px-8', className)}>
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
      <Line options={options} data={chartData} className={classNameChart} />
      {isShowButton && (
        <div className="flex items-center gap-4 mt-2">
          {buttons.map((item) => {
            return (
              <ButtonChart
                key={item}
                type={item}
                active={activeType === item}
                onClick={(value) => onChangeTime && onChangeTime(value)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
