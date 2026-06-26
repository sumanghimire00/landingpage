import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-3 px-8 py-4 
        rounded-full cursor-pointer bg-[#E4A003] px-6 py-2 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#f6b800]/80 hover:shadow-sm
        ${className}
      `}
    >
      {children}
    </button>
  );
}
