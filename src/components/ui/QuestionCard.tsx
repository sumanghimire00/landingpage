"use client";

import { ArrowRight } from "lucide-react";
import { ReactNode, useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="rounded-2xl border border-[#EAE4DA] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2EBFF] text-[#2A0A4A]">
          {icon}
        </div>

        <h3 className="heading-font mt-6 text-2xl leading-snug text-slate-900">
          {title}
        </h3>

        <p className="mt-5 line-clamp-8 text-sm leading-7 text-slate-500">
          {description}
        </p>

        <button
          onClick={() => setOpen(true)}
          className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-900"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="heading-font text-2xl text-slate-900">
              {title}
            </h2>

            <p className="mt-6 whitespace-pre-line leading-8 text-slate-600">
              {description}
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-8 rounded-lg bg-[#2A0A4A] px-5 py-2 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}