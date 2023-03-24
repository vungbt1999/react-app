import clsx from 'clsx';

export type CardRecommendProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function CardRecommend({ title, subtitle, className }: CardRecommendProps) {
  return (
    <div className={clsx('bg-dark-600 px-2 pt-6 pb-[22px]', className)}>
      <p className="text-primary-300 uppercase font-secondary text-[22px] leading-[27px] tracking-[0.11px] w-full text-center">
        {title}
      </p>
      <div className="h-[1px] w-14 bg-light mt-[10px] mb-2 mx-auto"></div>
      <p className="text-light font-light text-lg w-full text-center">{subtitle}</p>
    </div>
  );
}
