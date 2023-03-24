import { CardItemTopPageProps } from 'libraries/components/cards-item';
import { HexagonItemProps } from 'libraries/components/hexagon-item';

const blueColumn: HexagonItemProps[] = [
  {
    iconName: 'knife',
    title: 'Morning'
  },
  {
    iconName: 'knife',
    title: 'Lunch'
  },
  {
    iconName: 'knife',
    title: 'Dinner'
  },
  {
    iconName: 'cup',
    title: 'Snack'
  }
];
const yellowColumn: CardItemTopPageProps[] = [
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

export const homePage = {
  blue: blueColumn,
  yellow: yellowColumn
};
