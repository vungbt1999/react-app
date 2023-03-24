import clsx from 'clsx';
import { IconProps } from '.';

export default function Memo({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-8', 'w-8')}
      transform={transform}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.01" width="32" height="32" fill="currentColor" />
      <path
        d="M29.5491 10.665L28.5569 9.67389C27.9562 9.07196 26.9812 9.07318 26.3793 9.67389L25.452 10.6024L28.6208 13.7711L29.5491 12.8437C30.1499 12.2419 30.1499 11.2669 29.5491 10.665H29.5491Z"
        fill="currentColor"
      />
      <path
        d="M16.76 19.2868V22.4561H19.9294L27.7571 14.6284L24.5879 11.459L16.76 19.2868Z"
        fill="currentColor"
      />
      <rect x="9.34717" y="9.93433" width="8.9516" height="1.49193" fill="currentColor" />
      <rect x="9.34717" y="15.3984" width="8.9516" height="1.49193" fill="currentColor" />
      <rect x="9.36633" y="20.8625" width="5.47042" height="1.49193" fill="currentColor" />
      <path
        d="M22.5858 26.5985C22.5858 26.826 22.4027 27.0117 22.1775 27.0129H5.36658C5.14148 27.0117 4.9596 26.826 4.95838 26.5985V5.40259C4.9596 5.17407 5.14149 4.98828 5.36658 4.98718H22.1775C22.4027 4.98828 22.5858 5.17407 22.5858 5.40259V11.3897L24.5441 9.40253V5.40259C24.543 4.07593 23.4861 3.0011 22.1775 3H5.36658C4.05933 3.0011 3.00147 4.07593 3 5.40259V26.5985C3.00146 27.9252 4.05933 28.9989 5.36658 29H22.1775C23.4861 28.9989 24.543 28.7748 24.5441 27.4482V19.9488L22.5858 21.9359V26.5985Z"
        fill="currentColor"
      />
    </svg>
  );
}
