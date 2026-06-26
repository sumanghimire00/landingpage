import FAQItem from "../ui/FAQCard";

const faqs = [
  {
    question: "Will my problem get solved?",
    answer:
      "The consultation is designed to provide clarity, guidance, and actionable insights. While no one can guarantee outcomes, many clients leave with a clearer understanding of their situation and practical next steps.",
  },
  {
    question: "Can I trust this consultation?",
    answer:
      "Yes. Every consultation is conducted professionally and confidentially, with a focus on providing honest guidance rather than unrealistic promises.",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "After booking, you'll provide your birth details and attend a one-on-one consultation where your questions and concerns are discussed in depth.",
  },
  {
    question: "Is my money worth it?",
    answer:
      "Clients often find value in the clarity, confidence, and personalized guidance they receive during the session.",
  },
  {
    question: "Is my personal data safe?",
    answer:
      "Absolutely. Your information is kept private and used solely for the purpose of your consultation.",
  },
  {
    question: "How long is the session?",
    answer:
      "Most consultations last between 60–90 minutes depending on the topics discussed.",
  },
  {
    question: "What kind of problem can I ask about?",
    answer:
      "You can ask about relationships, marriage, career, finances, personal growth, family matters, timing of important decisions, and more.",
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