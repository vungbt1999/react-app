import { CardDiaryProps, CardItemMyRecordProps } from 'libraries/components/cards-item';
import { ExerciseBoardProps } from 'libraries/components/exercise-board';
import { useEffect, useState } from 'react';
import { ButtonChartType, ChartDataRes } from 'types/common';
import ApiUtils from 'utils/api/api.utils';

type MyRecordPageData = {
  blue: CardItemMyRecordProps[];
  yellow: ExerciseBoardProps;
  red: CardDiaryProps[];
};
type MyRecordUtilsResult = {
  myRecordPage: MyRecordPageData;
  chartData?: any;
  buttonActive: ButtonChartType;
  onChangeTime: (value: ButtonChartType) => void;
};

export default function MyRecordUtils(): MyRecordUtilsResult {
  const [loadingRecordPage, setLoadingRecordPage] = useState<boolean>(false);
  const [myRecordPage, setMyRecordPage] = useState<MyRecordPageData>({
    blue: [],
    yellow: { date: '', items: [] },
    red: []
  });

  const [loadingChart, setLoadingChart] = useState<boolean>(false);
  const [chartData, setChartData] = useState<ChartDataRes>();

  const [buttonActive, setButtonActive] = useState<ButtonChartType>('year');

  useEffect(() => {
    fetchMyRecord();
    fetchChartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMyRecord = async () => {
    if (loadingRecordPage) return;
    setLoadingRecordPage(true);
    const res: MyRecordPageData = await ApiUtils.get('/my-record');
    setMyRecordPage(res);
    setLoadingRecordPage(false);
  };

  const fetchChartData = async () => {
    if (loadingChart) return;
    setLoadingChart(true);
    const res: ChartDataRes = await ApiUtils.get('/chart');
    setChartData(res);
    setLoadingChart(false);
  };

  const onChangeTime = (value: ButtonChartType) => setButtonActive(value);

  return {
    myRecordPage,
    chartData,
    buttonActive,
    onChangeTime
  };
}
