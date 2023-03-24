import { DateFormat } from 'constants/common';
import { CardDiaryProps, CardItemMyRecordProps } from 'libraries/components/cards-item';
import { ExerciseBoardProps } from 'libraries/components/exercise-board';
import moment from 'moment';

const blueColumn: CardItemMyRecordProps[] = [
  {
    title: 'BODY RECORD',
    subtitle: '自分のカラダの記録',
    image: {
      url: '/images/MyRecommend-1.jpg'
    }
  },
  {
    title: 'BODY RECORD',
    subtitle: '自分のカラダの記録',
    image: {
      url: '/images/MyRecommend-2.jpg'
    }
  },
  {
    title: 'BODY RECORD',
    subtitle: '自分のカラダの記録',
    image: {
      url: '/images/MyRecommend-3.jpg'
    }
  }
];

const yellowColumn: ExerciseBoardProps = {
  date: moment().format(DateFormat.YYYY_MM_DD),
  items: [
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    },
    {
      title: '家事全般（立位・軽い）',
      kcal: 26,
      minute: 10
    }
  ]
};

const redColumn: CardDiaryProps[] = [
  {
    date: moment().format(DateFormat.YYYY_MM_DD),
    time: moment().format(DateFormat.HH_MM),
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: moment().format(DateFormat.YYYY_MM_DD),
    time: moment().format(DateFormat.HH_MM),
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: moment().format(DateFormat.YYYY_MM_DD),
    time: moment().format(DateFormat.HH_MM),
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: moment().format(DateFormat.YYYY_MM_DD),
    time: moment().format(DateFormat.HH_MM),
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: moment().format(DateFormat.YYYY_MM_DD),
    time: moment().format(DateFormat.HH_MM),
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: moment().format(DateFormat.YYYY_MM_DD),
    time: moment().format(DateFormat.HH_MM),
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: moment().format(DateFormat.YYYY_MM_DD),
    time: moment().format(DateFormat.HH_MM),
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: moment().format(DateFormat.YYYY_MM_DD),
    time: moment().format(DateFormat.HH_MM),
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  }
];

export const myRecord = {
  red: redColumn,
  blue: blueColumn,
  yellow: yellowColumn
};
