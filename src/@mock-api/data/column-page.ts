import { DateFormat } from 'constants/common';
import { CardItemColumnPageProps, CardRecommendProps } from 'libraries/components/cards-item';
import moment from 'moment';

const cardsRecommendColumn: CardRecommendProps[] = [
  {
    title: 'RECOMMENDED COLUMN',
    subtitle: 'オススメ'
  },
  {
    title: 'RECOMMENDED DIET',
    subtitle: 'ダイエット'
  },
  {
    title: 'RECOMMENDED BEAUTY',
    subtitle: '美容'
  },
  {
    title: 'RECOMMENDED HEALTH',
    subtitle: '健康'
  }
];

const cardsColumn: CardItemColumnPageProps[] = [
  {
    image: {
      url: '/images/column-1.jpg'
    },
    time: moment().format(DateFormat.YYYY_MM_DD_HH_mm),
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: {
      url: '/images/column-2.jpg'
    },
    time: moment().format(DateFormat.YYYY_MM_DD_HH_mm),
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: {
      url: '/images/column-3.jpg'
    },
    time: moment().format(DateFormat.YYYY_MM_DD_HH_mm),
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: {
      url: '/images/column-4.jpg'
    },
    time: moment().format(DateFormat.YYYY_MM_DD_HH_mm),
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: {
      url: '/images/column-5.jpg'
    },
    time: moment().format(DateFormat.YYYY_MM_DD_HH_mm),
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: {
      url: '/images/column-6.jpg'
    },
    time: moment().format(DateFormat.YYYY_MM_DD_HH_mm),
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: {
      url: '/images/column-7.jpg'
    },
    time: moment().format(DateFormat.YYYY_MM_DD_HH_mm),
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: {
      url: '/images/column-8.jpg'
    },
    time: moment().format(DateFormat.YYYY_MM_DD_HH_mm),
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    title: '#魚料理  #和食  #DHA'
  }
];

export const columnPage = {
  recommends: cardsRecommendColumn,
  cards: cardsColumn
};
