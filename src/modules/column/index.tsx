import { Button } from 'libraries/components/button';
import { CardItemColumnPage, CardRecommend } from 'libraries/components/cards-item';
import { SEO } from 'libraries/seo';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import ColumnPageUtils from './utils';

export default function ColumnPage() {
  const { t } = useTranslation();
  const { columnData } = ColumnPageUtils();

  return (
    <Fragment>
      <SEO title="Column" />
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {columnData.recommends.map((item, index) => {
            return <CardRecommend {...item} key={index} className="col-span-1" />;
          })}
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-[18px] mt-14">
          {columnData.cards.map((item, index) => {
            return <CardItemColumnPage {...item} key={index} className="col-span-1" />;
          })}
        </div>

        <div className="text-center pb-16 pt-6">
          <Button onClick={() => alert('More Column')}>{t('more_column')}</Button>
        </div>
      </div>
    </Fragment>
  );
}
