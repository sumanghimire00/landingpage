import FAQItem from "../ui/FAQCard";

const faqs = [
  {
    question: "Will my problem get solved?",
    answer:
      "We can't promise that every problem will disappear. What we do promise is an honest consultation that helps you understand your situation, the possible reasons behind it, and practical guidance on what you can do next. Many clients leave with more clarity, confidence, and a clear direction.",
  },
  {
    question: "Can I trust this consultation?",
    answer:
      "Yes. Every consultation is conducted personally, based on your birth details, and tailored to your situation. We focus on giving genuine guidance—not false promises, fear, or unrealistic guarantees.",
  },
  {
    question: "How does the consultation process work?",
    answer: [
      "Book your consultation online.",
      "Share your birth details.",
      "Join the session at the scheduled time.",
      "Discuss your questions openly.",
      "Receive clear guidance and practical suggestions based on your situation.",
    ],
  },
  {
    question: "Is my money worth it?",
    answer:
      "If you're looking for honest guidance instead of quick promises, many people find the consultation worthwhile. Our goal is to help you make better decisions with greater clarity, not to sell unrealistic expectations.",
  },
  {
    question: "Is my personal data safe?",
    answer:
      "Absolutely. Your birth details, personal information, and everything discussed during the consultation remain completely private and confidential. We never share your information with anyone.",
  },
  {
    question: "How long is the session?",
    answer:
      "Most consultations last 40 to 60 minutes, depending on your questions and the package you choose. We make sure you have enough time to discuss your concerns without feeling rushed.",
  },
  {
    question: "What kind of problem can I ask about?",
    answer: [
      "Career and job",
      "Business",
      "Marriage and relationships",
      "Love life",
      "Family matters",
      "Education",
      "Finance",
      "Health concerns",
      "Foreign travel or settlement",
      "Personal growth",
      "Any other life challenge you'd like guidance on",
    ],
  },
];

export default function FAQSection() {
  return (
    <section className="bg-[#F3EDDE] py-10">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#A68DFF]">
            Frequently Asked
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#24123B]">
            Your Questions Answered Honestly
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
