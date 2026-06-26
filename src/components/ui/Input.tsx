import { LucideIcon } from "lucide-react";

interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
  icon?: LucideIcon;
}

export default function Input({
  label,
  placeholder,
  type = "text",
  icon: Icon,
}: InputProps) {
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
          type={type}
          placeholder={placeholder}
          className="w-full rounded-lg border border-[#D9D3E3] bg-white py-3 pr-4 pl-11 text-sm outline-none transition focus:border-[#9B7FFF]"
        />
      </div>
    </div>
  );
}