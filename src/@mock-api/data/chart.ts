import { ButtonChartType } from 'types/common';

const labelsJson = () => {
  return {
    day: [
      '1AM',
      '2AM',
      '3AM',
      '4AM',
      '5AM',
      '6AM',
      '7AM',
      '8AM',
      '9AM',
      '10AM',
      '11AM',
      '12AM',
      '1PM',
      '2PM',
      '3PM',
      '4PM',
      '5PM',
      '6PM',
      '7PM',
      '8PM',
      '9PM',
      '10PM',
      '11PM',
      '12PM'
    ],
    week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    month: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30'
    ],
    year: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月']
  };
};

const dataOfDataSet = (type: ButtonChartType) => {
  const labels = (labelsJson() as any)[type];
  return labels.map(() => Math.floor(Math.random() * 1000) + -1000);
};

export const chartData = {
  day: {
    data: {
      labels: labelsJson()['day'],
      datasets: [
        {
          label: 'Dataset 1',
          data: dataOfDataSet('day').map(() => Math.floor(Math.random() * 1000) + -1000),
          borderColor: '#FFCC21',
          backgroundColor: '#FFCC21'
        },
        {
          label: 'Dataset 2',
          data: dataOfDataSet('day').map(() => Math.floor(Math.random() * 1000) + -1000),
          borderColor: '#8FE9D0',
          backgroundColor: '#8FE9D0'
        }
      ]
    }
  },
  week: {
    data: {
      labels: labelsJson()['week'],
      datasets: [
        {
          label: 'Dataset 1',
          data: dataOfDataSet('week').map(() => Math.floor(Math.random() * 1000) + -1000),
          borderColor: '#FFCC21',
          backgroundColor: '#FFCC21'
        },
        {
          label: 'Dataset 2',
          data: dataOfDataSet('week').map(() => Math.floor(Math.random() * 1000) + -1000),
          borderColor: '#8FE9D0',
          backgroundColor: '#8FE9D0'
        }
      ]
    }
  },
  month: {
    data: {
      labels: labelsJson()['month'],
      datasets: [
        {
          label: 'Dataset 1',
          data: dataOfDataSet('month').map(() => Math.floor(Math.random() * 1000) + -1000),
          borderColor: '#FFCC21',
          backgroundColor: '#FFCC21'
        },
        {
          label: 'Dataset 2',
          data: dataOfDataSet('month').map(() => Math.floor(Math.random() * 1000) + -1000),
          borderColor: '#8FE9D0',
          backgroundColor: '#8FE9D0'
        }
      ]
    }
  },
  year: {
    data: {
      labels: labelsJson()['year'],
      datasets: [
        {
          label: 'Dataset 1',
          data: dataOfDataSet('year').map(() => Math.floor(Math.random() * 1000) + -1000),
          borderColor: '#FFCC21',
          backgroundColor: '#FFCC21'
        },
        {
          label: 'Dataset 2',
          data: dataOfDataSet('year').map(() => Math.floor(Math.random() * 1000) + -1000),
          borderColor: '#8FE9D0',
          backgroundColor: '#8FE9D0'
        }
      ]
    }
  }
};
