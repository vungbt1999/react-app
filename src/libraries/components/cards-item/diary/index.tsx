import clsx from 'clsx';

export type CardDiaryProps = {
  date: string;
  time: string;
  title: string;
  description: string;
  className?: string;
};

export function CardDiary({ date, time, title, description, className }: CardDiaryProps) {
  return (
    <div className={clsx(className, 'px-4 pt-4 pb-[27px] bg-light border-[2px] border-[#707070;]')}>
      <div className="text-dark-500 font-secondary text-lg leading-[22px] tracking-[0.09px]">
        <div>{date}</div>
        <div>{time}</div>
      </div>
      <div className="mt-2 text-dark-500 text-xs tracking-[0.06px]">
        <p className="line-clamp-2">{title}</p>
        <p className="line-clamp-5">{description}</p>
      </div>
    </div>
  );
}
