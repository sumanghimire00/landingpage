import { ShieldCheck } from "lucide-react";

export default function GuaranteeCard() {
  return (
    <div className="rounded-3xl border-2 border-[#E5A500] bg-white p-8 text-center">
      <ShieldCheck
        size={50}
        className="mx-auto text-[#E5A500]"
      />

      <h3 className="mt-4 font-serif text-3xl text-[#24123B]">
        100% Money-Back Guarantee
      </h3>

      <p className="mt-3 text-sm text-[#6F6A78]">
        If the consultation doesn’t meet your expectations, you'll receive a
        complete refund. No questions asked.
      </p>
    </div>
  );
}