import clsx from 'clsx';
import { RenderIcon } from 'libraries/icons';
import useScrollTop from 'hooks/useScrollTop';

export type BackToTopProps = {
  className?: string;
};

export default function BackToTop({ className }: BackToTopProps) {
  const { onScrollToTop, visible } = useScrollTop({});

  return (
    <div
      className={clsx(
        className,
        'rounded-full text-gray-400 border border-gray-400 bg-light w-12 h-12 flex items-center justify-center cursor-pointer fixed bottom-36 right-24',
        {
          hidden: !visible,
          block: visible
        }
      )}
      onClick={onScrollToTop}
    >
      <RenderIcon name="chevron_up" />
    </div>
  );
}
