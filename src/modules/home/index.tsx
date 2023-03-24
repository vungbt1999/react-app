import BackToTop from 'libraries/components/back-to-top';
import { Button } from 'libraries/components/button';
import {
  CardItemColumnPageProps,
  CardItemColumnPage,
  CardDiary,
  CardDiaryProps,
  CardItemMyRecord,
  CardItemMyRecordProps,
  CardRecommend,
  CardRecommendProps,
  CardItemTopPage,
  CardItemTopPageProps
} from 'libraries/components/cards-item';
import CirclePercent from 'libraries/components/circle-percent';
import ExerciseBoard from 'libraries/components/exercise-board';
import HexagonItem from 'libraries/components/hexagon-item';
import MyChart from 'libraries/components/my-chart';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();
  const cardsTopPage: CardItemTopPageProps[] = [
    {
      tag: '05.21.Morning',
      image: { url: '/images/d01.jpg' }
    },
    {
      tag: '05.21.Lunch',
      image: { url: '/images/d02.jpg' }
    },
    {
      tag: '05.21.Dinner',
      image: { url: '/images/l01.jpg' }
    },
    {
      tag: '05.21.Snack',
      image: { url: '/images/l02.jpg' }
    },
    {
      tag: '05.21.Morning',
      image: { url: '/images/l03.jpg' }
    },
    {
      tag: '05.21.Dinner',
      image: { url: '/images/m01.jpg' }
    },
    {
      tag: '05.21.Snack',
      image: { url: '/images/m02.jpg' }
    },
    {
      tag: '05.21.Snack',
      image: { url: '/images/m03.jpg' }
    }
  ];

  const cardsRecord: CardItemMyRecordProps[] = [
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

  const cardsColumn: CardItemColumnPageProps[] = [
    {
      image: {
        url: '/images/column-1.jpg'
      },
      time: '2021.05.17   23:25',
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      title: '#魚料理  #和食  #DHA'
    },
    {
      image: {
        url: '/images/column-2.jpg'
      },
      time: '2021.05.17   23:25',
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      title: '#魚料理  #和食  #DHA'
    },
    {
      image: {
        url: '/images/column-3.jpg'
      },
      time: '2021.05.17   23:25',
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      title: '#魚料理  #和食  #DHA'
    },
    {
      image: {
        url: '/images/column-4.jpg'
      },
      time: '2021.05.17   23:25',
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      title: '#魚料理  #和食  #DHA'
    },
    {
      image: {
        url: '/images/column-5.jpg'
      },
      time: '2021.05.17   23:25',
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      title: '#魚料理  #和食  #DHA'
    },
    {
      image: {
        url: '/images/column-6.jpg'
      },
      time: '2021.05.17   23:25',
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      title: '#魚料理  #和食  #DHA'
    },
    {
      image: {
        url: '/images/column-7.jpg'
      },
      time: '2021.05.17   23:25',
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      title: '#魚料理  #和食  #DHA'
    }
  ];

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

  const diaryItems: CardDiaryProps[] = [
    {
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    }
  ];

  return (
    <div className="container">
      <HexagonItem iconName="knife" title="morning" />

      <HexagonItem iconName="cup" title="Dinner" />

      <Button onClick={() => alert('')} title={t('see_more_record')} />
      <BackToTop />
      <div className="grid grid-cols-4 gap-2">
        {cardsTopPage.map((item, index) => {
          return <CardItemTopPage key={index} {...item} className="col-span-1" />;
        })}
      </div>
      <div className="grid grid-cols-3 gap-12">
        {cardsRecord.map((item, index) => {
          return <CardItemMyRecord {...item} key={index} className="col-span-1" />;
        })}
      </div>

      <div className="grid grid-cols-4 gap-x-2 gap-y-[18px]">
        {cardsColumn.map((item, index) => {
          return <CardItemColumnPage {...item} key={index} className="col-span-1" />;
        })}
      </div>

      <div className="grid grid-cols-4 gap-8">
        {cardsRecommendColumn.map((item, index) => {
          return <CardRecommend {...item} key={index} className="col-span-1" />;
        })}
      </div>

      <div className="grid grid-cols-4 gap-3">
        {diaryItems.map((item, index) => {
          return <CardDiary {...item} key={index} className="col-span-1" />;
        })}
      </div>

      <div className="bg-black">
        <CirclePercent number1={17} number2={21} />
      </div>

      <div>
        <MyChart date="2021.05.21" isShowButton={true} />
        <MyChart />
      </div>

      <div>
        <ExerciseBoard
          date="2021.05.21"
          items={[
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
          ]}
        />
      </div>
    </div>
  );
}
