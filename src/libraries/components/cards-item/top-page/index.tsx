import clsx from 'clsx';
import { ImageObject } from 'types/common';

export type CardItemTopPageProps = {
  tag: string;
  image: ImageObject;
  className?: string;
};

export function CardItemTopPage({ tag, image, className }: CardItemTopPageProps) {
  return (
    <div className={clsx('relative w-full', className)}>
      <img
        src={image.url}
        alt={image.alt || 'image-card-top-page'}
        className="w-full h-auto aspect-square object-cover"
      />
      <p className="bg-primary-300 font-secondary text-[15px] leading-[18px] text-light capitalize py-[7px] pl-2 pr-[10px] absolute left-0 bottom-0 w-fit">
        {tag}
      </p>
    </div>
  );
}
