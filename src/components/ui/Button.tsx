import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center
        rounded-full
        bg-[#E4A003]
        px-8 py-4
        text-sm font-semibold text-black
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-[#f6b800]/80
        hover:shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-[#E4A003]
        focus:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-60
        disabled:hover:translate-y-0
        disabled:hover:bg-[#E4A003]
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}