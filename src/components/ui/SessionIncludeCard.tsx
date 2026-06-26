import { Check } from "lucide-react";

interface Props {
  items: string[];
}

export default function SessionIncludesCard({ items }: Props) {
  return (
    <div className="rounded-3xl bg-[#170135] p-8 text-white">
      <h3 className="mb-6 text-center font-serif text-2xl">
        Your Session Includes
      </h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3"
          >
            <Check
              size={18}
              className="mt-1 shrink-0 text-[#F7B500]"
            />

            <span className="text-sm text-white/90">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}