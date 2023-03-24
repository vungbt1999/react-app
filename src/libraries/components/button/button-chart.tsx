import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { ButtonChartType } from 'types/common';

export type ButtonChartProps = {
  type: ButtonChartType;
  onClick: (type: ButtonChartType) => void;
  active?: boolean;
};
export function ButtonChart({ type, active = false, onClick }: ButtonChartProps) {
  const { t } = useTranslation();

  return (
    <button
      onClick={() => onClick(type)}
      className={clsx(
        'bg-light rounded-[11px] px-5 pb-[2px] text-[15px] leading-[22px] font-light tracking-[0.075px] outline-none hover:bg-primary-300 hover:text-light transition-all hover:opacity-90',
        {
          'bg-primary-300 text-light': active,
          'text-primary-300': !active
        }
      )}
    >
      {t(`${type}`)}
    </button>
  );
}
