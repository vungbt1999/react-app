import clsx from 'clsx';
import { ImageObject } from 'types/common';

export type CardItemMyRecordProps = {
  image: ImageObject;
  title: string;
  subtitle: string;
  className?: string;
};

export function CardItemMyRecord({ image, title, subtitle, className }: CardItemMyRecordProps) {
  return (
    <div className={clsx(className, 'bg-primary-300 p-6 w-full aspect-square relative')}>
      {/** Image Background */}
      <div className="w-full h-auto aspect-square relative">
        <img
          src={image.url}
          alt={image.alt || 'image-card-my-record'}
          className="w-full h-auto aspect-square object-cover mix-blend-luminosity opacity-25 relative z-[1]"
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black"></div>
      </div>

      {/** Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 z-[1]">
        <p className="uppercase text-primary-300 font-secondary text-[25px] leading-[30px] tracking-[0.125px] w-full line-clamp-1 text-center">
          {title}
        </p>
        <div className="bg-primary-400 font-light text-sm text-light px-[17px] pt-[1px] pb-[3px] w-fit mx-auto line-clamp-1 mt-[10px]">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
