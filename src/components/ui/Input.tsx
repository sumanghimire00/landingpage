import {
  forwardRef,
  InputHTMLAttributes,
} from "react";
import { LucideIcon } from "lucide-react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      icon: Icon,
      error,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <label className="mb-2 block text-sm text-[#5A4C73]">
          {label}
        </label>

        <div className="relative">
          {Icon && (
            <Icon
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          )}

          <input
            ref={ref}
            {...props}
            className={`w-full rounded-lg border bg-white py-3 pr-4 pl-11 text-sm outline-none transition

            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-[#D9D3E3] focus:border-[#9B7FFF]"
            }

            ${className}`}
          />
        </div>

        {error && (
          <p className="mt-1 text-xs text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;