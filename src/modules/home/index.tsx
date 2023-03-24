import { Button } from 'libraries/components/button';
import { CardItemTopPage } from 'libraries/components/cards-item';
import CirclePercent from 'libraries/components/circle-percent';
import HexagonItem from 'libraries/components/hexagon-item';
import MyChart from 'libraries/components/my-chart';
import { SEO } from 'libraries/seo';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'routers/config';
import HomeUtils from './utils';

export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { homeData, chartData } = HomeUtils();

  return (
    <Fragment>
      <SEO title="Home Page" />
      {/** RED + GREEN COLUMN */}
      <div className="grid items-center w-full grid-cols-14">
        {/** Red column :Date-Achievement rate */}
        <div className="col-span-6 relative">
          <img
            src="/images/d01.jpg"
            alt="bg-circle-process"
            className="w-full h-auto max-h-[312px] object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CirclePercent
              number1={81}
              number2={150}
              className="w-[181px] h-[181px] aspect-square"
            />
          </div>
        </div>

        {/** Green column: Body weight - Body fat percentage graph */}
        {chartData && (
          <div className="col-span-8 w-full h-[312px]">
            <MyChart
              chartData={chartData['year'].data}
              activeType="year"
              className="h-full"
              classNameChart="mx-auto h-full max-w-[589px] !w-full"
            />
          </div>
        )}
      </div>

      {/** BLUE COLUMN: Button to transit to input */}
      <div className="container">
        <div className="flex py-6 lg:gap-16 justify-center">
          {homeData.blue.map((item, index) => {
            return <HexagonItem key={index} {...item} />;
          })}
        </div>
      </div>

      {/** Yellow COLUMN: Meal history */}
      <div className="container">
        <div className="grid grid-cols-4 gap-2">
          {homeData.yellow.map((item, index) => {
            return <CardItemTopPage key={index} {...item} className="col-span-1" />;
          })}
        </div>
      </div>

      <div className="text-center pb-16 pt-7">
        <Button onClick={() => navigate(routePath.MyRecord)}>{t('see_more_record')}</Button>
      </div>
    </Fragment>
  );
}
