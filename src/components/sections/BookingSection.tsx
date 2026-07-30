import BookingForm from "../ui/BookingForm";
import GuaranteeCard from "../ui/GuarenteeCard";
import SessionIncludesCard from "../ui/SessionIncludeCard";

const includes = [
  "Deep D1 & D9 Chart Analysis for Life Path, Destiny & Future Clarity",
  "Personalized 1-on-1 Astrology Consultation Based on Your Birth Details",
  "Career, Financial, Relationship & Marriage Guidance",
  "Root Cause Analysis of Life Challenges with Accurate Timing Insights",
  "Personalized Remedies & Practical Guidance",
  "100% Secure & Private Consultation",
];

export default function BookingSection() {
  return (
    <section 
    
    className="bg-[#FAF7F2] py-10">
      <div className="container mx-auto px-5">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9B7FFF]">
            Your Investment, Protected
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#24123B]">
            Book with Complete Confidence
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#6F6A78]">
            Comprehensive guidance across all life areas. Everything you share
            is handled with complete confidentiality and care.
          </p>
        </div>

        <div className="grid gap-30 lg:grid-cols-2">
          <div className="space-y-6">
            <GuaranteeCard />
            <SessionIncludesCard items={includes} />
          </div>

          <BookingForm />
        </div>
      </div>
    </section>
  );
}