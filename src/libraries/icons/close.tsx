import clsx from 'clsx';
import { IconProps } from '.';

export default function Close({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-8', 'w-8')}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      transform={transform}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.01" width="32" height="32" fill="currentColor" />
      <path d="M7 7L26 26" stroke="currentColor" strokeWidth="3" />
      <path d="M7 26L26 7" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
