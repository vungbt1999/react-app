import clsx from 'clsx';
import { ImageObject } from 'types/common';

export type CardItemColumnPageProps = {
  image: ImageObject;
  time: string;
  description: string;
  title: string;
  className?: string;
};
export function CardItemColumnPage({
  image,
  time,
  description,
  title,
  className
}: CardItemColumnPageProps) {
  return (
    <div className={clsx(className)}>
      <div className="h-36 max-h-36 w-full aspect-auto relative">
        <img
          src={image.url}
          alt={image.alt || 'image-card-column-page'}
          className="h-36 max-h-36 w-full aspect-auto"
        />
        <div className="bg-primary-300 px-2 font-secondary text-[15px] leading-[30px] text-light absolute bottom-0 left-0 line-clamp-1">
          {time}
        </div>
      </div>
      <p className="mt-2 text-[15px] leading-[22px] tracking-[0.075px] text-dark-500 font-light line-clamp-2">
        {description}
      </p>
      <p className="text-primary-400 font-light text-xs leading-[22px] tracking-[0.06px]">
        {title}
      </p>
    </div>
  );
}
