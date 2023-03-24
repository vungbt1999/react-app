import { ReactNode } from 'react';

export type ButtonProps = {
  children: JSX.Element | ReactNode | string;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-tertiary font-light text-lg text-light outline-none px-20 py-4 pt-[14px] rounded-md"
    >
      {children}
    </button>
  );
}
