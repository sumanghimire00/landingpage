"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQCardProps {
  question: string;
  answer: string;
}

export default function FAQCard({
  question,
  answer,
}: FAQCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-[#B9A8E8] bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-4 text-left"
      >
        <span className="text-sm font-medium text-[#2D1A45]">
          {question}
        </span>

        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-[#E7E1F7] px-4 py-4">
          <p className="text-sm leading-relaxed text-[#6F687A]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}