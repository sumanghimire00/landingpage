import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface QuestionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function QuestionCard({
  icon,
  title,
  description,
}: QuestionCardProps) {
  return (
    <div className="rounded-2xl border border-[#EAE4DA] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2EBFF] text-[#2A0A4A]">
        {icon}
      </div>

      <h3 className="heading-font mt-6 text-2xl leading-snug text-slate-900">
        {title}
      </h3>

      <p className="mt-5 text-sm leading-7 text-slate-500">
        {description}
      </p>

      <button className="cursor-pointer group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
        Readmore
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}