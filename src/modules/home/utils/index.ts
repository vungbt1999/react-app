import { CardItemTopPageProps } from 'libraries/components/cards-item';
import { HexagonItemProps } from 'libraries/components/hexagon-item';
import { useEffect, useState } from 'react';
import { ChartDataRes } from 'types/common';
import ApiUtils from 'utils/api/api.utils';

type HomeData = { blue: HexagonItemProps[]; yellow: CardItemTopPageProps[] };
type HomeUtilsResult = {
  homeData: HomeData;
  chartData?: ChartDataRes;
};
export default function HomeUtils(): HomeUtilsResult {
  const [loadingHome, setLoadingHome] = useState<boolean>(false);
  const [homeData, setHomeData] = useState<HomeData>({ blue: [], yellow: [] });

  const [loadingChart, setLoadingChart] = useState<boolean>(false);
  const [chartData, setChartData] = useState<ChartDataRes>();

  useEffect(() => {
    fetchHomeData();
    fetchChartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetching home data
  const fetchHomeData = async () => {
    if (loadingHome) return;
    setLoadingHome(true);
    const res: HomeData = await ApiUtils.get('/home');
    setHomeData(res);
    setLoadingHome(false);
  };

  const fetchChartData = async () => {
    if (loadingChart) return;
    setLoadingChart(true);
    const res: ChartDataRes = await ApiUtils.get('/chart');
    setChartData(res);
    setLoadingChart(false);
  };

  return {
    homeData,
    chartData
  };
}
