import { useTranslation } from 'react-i18next';

export type ExerciseItem = {
  title: string;
  kcal: number;
  minute: number;
};

export type ExerciseBoardProps = {
  title?: string;
  date: string;
  items: ExerciseItem[];
};
export default function ExerciseBoard({ title, date, items }: ExerciseBoardProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-dark-500 px-6 py-4">
      <div className="flex items-start mb-1">
        <p className="font-secondary text-light text-[15px] leading-[18px] tracking-[0.15px] uppercase max-w-[96px]">
          {title || t('my_exercise')}
        </p>
        <p className="font-secondary text-[22px] text-light leading-[27px] tracking-[0.11px]">
          {date}
        </p>
      </div>

      {/** Exercise List */}
      <div className="mt-1 max-h-[192px] overflow-y-auto grid grid-cols-2 gap-x-10 gap-y-2 pb-2 scrollbar-track-gray-400 scrollbar-thumb-primary-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-start justify-between border-b border-solid border-b-gray-400 pb-[2px]"
            >
              <div className="flex items-start">
                <div className="h-[7px] w-[7px] rounded-full bg-light mt-[7px] mr-[7px]"></div>
                <div>
                  <p className="text-[15px] font-light leading-[22px] tracking-[0.075px] text-light">
                    {item.title}
                  </p>
                  <div className="font-secondary text-primary-300 text-[15px] leading-[18px] tracking-[0.075px]">
                    {t('minute', { number: item.kcal })}
                  </div>
                </div>
              </div>
              <div className="font-secondary text-primary-300 text-lg leading-[22px] tracking-[0.09px]">
                {t('minute', { number: item.minute })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
