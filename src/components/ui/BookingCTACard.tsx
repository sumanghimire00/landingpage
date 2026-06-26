import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function BookingCard() {
  return (
    <div className="w-full max-w-xl rounded-2xl bg-[#170029] p-6 shadow-xl">
      <div className="grid grid-cols-2 gap-4 text-sm text-white">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={20} className="text-green-400" />
          Secure and private
        </div>

        <div className="flex items-center gap-2 ">
          <CheckCircle2 size={20} className="text-green-400" />
          Personalized 1-on-1 session
        </div>

        <div className="flex items-center gap-2 ">
          <CheckCircle2 size={20} className="text-green-400" />
          1+ Hr In Depth analysis
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 size={20} className="text-green-400" />
          Practical & actionable guidance
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-white px-4 py-3">
        <span className="font-medium text-gray-700">
          Session Price
        </span>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 line-through">
            NPR 5000
          </span>

          <span className="font-bold text-black">
            NPR 2999
          </span>
        </div>
      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#D59A09] py-4 font-semibold text-black transition hover:opacity-90">
        Book my session Now
        <ArrowRight size={18} />
      </button>
    </div>
  );
}