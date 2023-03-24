export type ButtonProps = {
  title: string;
  onClick?: () => void;
};

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-tertiary font-light text-lg text-light outline-none px-20 py-4 pt-[14px] rounded-md"
    >
      {title}
    </button>
  );
}
