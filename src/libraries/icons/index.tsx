import { CSSProperties, FC } from 'react';
import Challenge from './challenge';
import ChevronUp from './chevron-up';
import Close from './close';
import Cup from './cup';
import Info from './infor';
import Knife from './knife';
import Memo from './memo';
import Menu from './menu';

export type IconProps = {
  className?: string;
  style?: CSSProperties;
  transform?: string;
  strokeWidth?: number;
};

export type Icon = FC<IconProps>;

export type IconName =
  | 'memo'
  | 'challenge'
  | 'info'
  | 'menu'
  | 'close'
  | 'chevron_up'
  | 'knife'
  | 'cup';

export type IconsType = Record<IconName, Icon>;

export const Icons: IconsType = {
  memo: (props: IconProps) => {
    return <Memo {...props} />;
  },
  challenge: (props: IconProps) => {
    return <Challenge {...props} />;
  },
  info: (props: IconProps) => {
    return <Info {...props} />;
  },
  menu: (props: IconProps) => {
    return <Menu {...props} />;
  },
  close: (props: IconProps) => {
    return <Close {...props} />;
  },
  chevron_up: (props: IconProps) => {
    return <ChevronUp {...props} />;
  },
  knife: (props: IconProps) => {
    return <Knife {...props} />;
  },
  cup: (props: IconProps) => {
    return <Cup {...props} />;
  }
};

export const RenderIcon = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const Icon = Icons[name];
  return <Icon {...reset} />;
};
