import { DateFormat } from 'constants/common';
import { Button } from 'libraries/components/button';
import { CardDiary, CardItemMyRecord } from 'libraries/components/cards-item';
import ExerciseBoard from 'libraries/components/exercise-board';
import MyChart from 'libraries/components/my-chart';
import { SEO } from 'libraries/seo';
import moment from 'moment';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import MyRecordUtils from './utils';

export default function MyRecordPage() {
  const { chartData, myRecordPage, buttonActive, onChangeTime } = MyRecordUtils();

  const { t } = useTranslation();

  return (
    <Fragment>
      <SEO title="My Record" />
      <div className="container">
        {/* BLUE COLUMN: Button to move to each entry screen */}
        <div className="grid grid-cols-3 gap-12 mt-14">
          {myRecordPage.blue.map((item, index) => {
            return <CardItemMyRecord {...item} key={index} className="col-span-1" />;
          })}
        </div>

        {/* GREEN COLUMN: Body fat percentage graph */}
        <div className="w-full h-[304px] mt-14">
          {chartData && (
            <MyChart
              title="BODY RECORD"
              date={moment().format(DateFormat.YYYY_MM_DD)}
              isShowButton
              className="h-full"
              classNameChart="mx-auto h-full max-h-[185px] !w-full"
              chartData={chartData[`${buttonActive}`].data}
              activeType={buttonActive}
              onChangeTime={onChangeTime}
            />
          )}
        </div>

        {/* YELLOW COLUMN: Exercise record */}
        <div className="mt-14">
          <ExerciseBoard {...myRecordPage.yellow} />
        </div>

        {/* RED COLUMN: Diary */}
        <div className="mt-14">
          <p className="text-dark-500 uppercase text-[22px] font-secondary leading-[27px] tracking-[0.11px]">
            {t('my_diary')}
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 w-full">
            {myRecordPage.red.map((item, index) => {
              return <CardDiary {...item} key={index} className="col-span-1" />;
            })}
          </div>
        </div>

        <div className="text-center pb-16 pt-6">
          <Button onClick={() => alert('More My Diary')}>{t('see_more_my_diary')}</Button>
        </div>
      </div>
    </Fragment>
  );
}
