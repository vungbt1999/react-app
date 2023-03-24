import { CardItemColumnPageProps, CardRecommendProps } from 'libraries/components/cards-item';
import { useEffect, useState } from 'react';
import ApiUtils from 'utils/api/api.utils';

type ColumnPageData = { recommends: CardRecommendProps[]; cards: CardItemColumnPageProps[] };
type ColumnPageUtilsResult = {
  columnData: ColumnPageData;
};
export default function ColumnPageUtils(): ColumnPageUtilsResult {
  const [loading, setLoading] = useState<boolean>(false);
  const [columnData, setColumnData] = useState<ColumnPageData>({ recommends: [], cards: [] });

  useEffect(() => {
    fetchColumnPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchColumnPage = async () => {
    if (loading) return;
    setLoading(true);
    const res: ColumnPageData = await ApiUtils.get('/column');
    setColumnData(res);
    setLoading(false);
  };
  return {
    columnData
  };
}
