import { HeartHandshake, TrendingUp, Coins, Brain } from "lucide-react";

import QuestionCard from "../ui/QuestionCard";

const questions = [
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Understand Your Current Relationship Patterns",
    description:
      "Every relationship has its ups and downs, but when the same misunderstandings, emotional distance, trust issues, or repeated conflicts keep happening, it can leave you feeling confused and emotionally drained. You may begin to question yourself, wonder why things never seem to improve, or feel like history keeps repeating itself no matter how much effort you put in. Our gurus help you understand the deeper patterns that may be influencing your relationships. Using your birth details and the wisdom passed down through the traditional Guru–Shishya Parampara, they offer personalized guidance to help you recognize recurring challenges, improve communication, and make more confident relationship decisions. Instead of leaving with more questions, you'll gain a clearer understanding of your situation and practical guidance for building stronger, healthier, and more meaningful relationships.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Discover the Right Direction for Career Growth &Business Decisions",
    description:"Have you been working hard but still feel like your career or business isn't growing the way it should? You may feel stuck in the same position, miss important opportunities, or struggle to decide whether it's the right time to change jobs, expand your business, or take a new direction. When your efforts don't match your results, it's natural to feel uncertain about what to do next. Our consultation helps you understand your current situation from a broader perspective and identify the opportunities that deserve your attention. Guided by gurus trained through the traditional Guru–Shishya Parampara, you'll receive thoughtful, personalized guidance to help you make better decisions, avoid unnecessary setbacks, and move forward with greater clarity, confidence, and purpose in your professional journey."
  },
  {
    icon: <Coins className="h-5 w-5" />,
    title:
      "Take Control of Your Financial Patterns & Build a Stable Future",
    description:
      "Many people earn well but still struggle with savings, unexpected expenses, debt, or financial uncertainty. You may feel like money comes in but never stays long enough to create the stability you've been working toward. Over time, this can lead to stress, hesitation in making important financial decisions, and uncertainty about the future. Our gurus help you understand the patterns that may be influencing your financial journey and provide practical, personalized guidance to support wiser financial choices. Rather than making unrealistic promises, we focus on helping you gain clarity, develop healthier financial habits, recognize better opportunities, and build a more secure and stable future with greater confidence.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Understand What's Affecting Your Peace & Feel More Calm and Confident",
    description:"You may appear fine to everyone around you, yet inside you're dealing with constant overthinking, stress, emotional exhaustion, or uncertainty about the future. Small decisions start feeling overwhelming, your mind rarely gets a chance to rest, and it becomes difficult to enjoy the present because you're always worrying about what's next. Through a personalized consultation, our gurus help you understand the factors that may be affecting your emotional well-being and overall peace of mind. Drawing on the wisdom of the traditional Guru–Shishya Parampara, they provide thoughtful guidance that helps you gain greater self-awareness, reduce confusion, strengthen your confidence, and move through life's challenges with a calmer mind and a clearer sense of direction."
  },
];

export default function QuestionsSection() {
  return (
    <section className="bg-[#FAF7F2] py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-light uppercase tracking-[0.2em] text-[#A78BFA]">
            WHY PEOPLE COME TO US
          </p>

          <h2 className="heading-font mt-5 text-4xl text-slate-900 md:text-5xl">
            Understand Your Current Relationship Patterns
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-500">
            Thousands face these exact challenges every day. Astrology reveals
            the cosmic reason behind what ordinary advice cannot explain.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {questions.map((question) => (
            <QuestionCard
              key={question.title}
              icon={question.icon}
              title={question.title}
              description={question.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
