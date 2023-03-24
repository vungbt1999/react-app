import clsx from 'clsx';
import { IconName, RenderIcon } from 'libraries/icons';

export type HexagonItemProps = {
  iconName: IconName;
  title: string;
  className?: string;
};
export default function HexagonItem({ iconName, className, title }: HexagonItemProps) {
  return (
    <div
      className={clsx(
        className,
        'bg-gradient-secondary clip-path-hexagon w-[116px] h-[134px] text-light flex flex-col items-center justify-center mx-[10px] my-[1px]'
      )}
    >
      <RenderIcon name={iconName} />
      <p className="capitalize text-xl font-normal font-secondary">{title}</p>
    </div>
  );
}
