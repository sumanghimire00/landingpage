import { HeartHandshake, TrendingUp, Coins, Brain } from "lucide-react";

import QuestionCard from "../ui/QuestionCard";

const questions = [
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Is your relationship under a karmic test or planetary challenge?",
    description:
      "You are trying your best to maintain understanding, love, and balance in your relationship, yet emotional distance, misunderstandings, and heaviness seem to grow over time. In astrology, such patterns are oftenlinked to karmic connections, planetary transits, or emotional imbalances shown in the birth chart. A deeper astrological analysis can help uncover the real cosmic reason behind these relationship challenges, whether it is timing, karmic lessons, or planetary influences—and guide you towardclarity about your emotional path and future direction. You are trying your best to maintain understanding, love, and balance in your relationship, yet emotional distance, misunderstandings, and heaviness seem to grow over time. In astrology, such patterns are oftenlinked to karmic connections, planetary transits, or emotional imbalances shown in the birth chart. A deeper astrological analysis can help uncover the real cosmic reason behind these relationship challenges, whether it is timing, karmic lessons, or planetary influences—and guide you towardclarity about your emotional path and future direction.You are trying your best to maintain understanding, love, and balance in your relationship, yet emotional distance, misunderstandings, and heaviness seem to grow over time. In astrology, such patterns are oftenlinked to karmic connections, planetary transits, or emotional imbalances shown in the birth chart. A deeper astrological analysis can help uncover the real cosmic reason behind these relationship challenges, whether it is timing, karmic lessons, or planetary influences—and guide you towardclarity about your emotional path and future direction.You are trying your best to maintain understanding, love, and balance in your relationship, yet emotional distance, misunderstandings, and heaviness seem to grow over time. In astrology, such patterns are oftenlinked to karmic connections, planetary transits, or emotional imbalances shown in the birth chart. A deeper astrological analysis can help uncover the real cosmic reason behind these relationship challenges, whether it is timing, karmic lessons, or planetary influences—and guide you towardclarity about your emotional path and future direction.You are trying your best to maintain understanding, love, and balance in your relationship, yet emotional distance, misunderstandings, and heaviness seem to grow over time. In astrology, such patterns are oftenlinked to karmic connections, planetary transits, or emotional imbalances shown in the birth chart. A deeper astrological analysis can help uncover the real cosmic reason behind these relationship challenges, whether it is timing, karmic lessons, or planetary influences—and guide you towardclarity about your emotional path and future direction.You are trying your best to maintain understanding, love, and balance in your relationship, yet emotional distance, misunderstandings, and heaviness seem to grow over time. In astrology, such patterns are oftenlinked to karmic connections, planetary transits, or emotional imbalances shown in the birth chart. A deeper astrological analysis can help uncover the real cosmic reason behind these relationship challenges, whether it is timing, karmic lessons, or planetary influences—and guide you towardclarity about your emotional path and future direction.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "What astrological imbalance is holding your success back?",
    description:
      "You are putting in consistent effort to improve your financial situation, yet the growth feels slow, unstable, or not as expected. In astrology, this is often connected to planetary influences on wealth houses, karmic patterns, or unfavorable dasha and transit periods that temporarily delay financial expansion. A deeper astrological analysis can help reveal the real reason behind your financial struggles—whether it is timing, planetary alignment, or karmic lessons—and guide you toward the right period and direction where prosperity can begin to flow more smoothly.",
  },
  {
    icon: <Coins className="h-5 w-5" />,
    title:
      "What planetary influence is affecting your financial stability right now?",
    description:
      "You are putting in consistent effort to improve your financial situation, yet the growth feels slow, unstable, or not as expected. In astrology, this is often connected to planetary influences on wealth houses, karmic patterns, or unfavorable dasha and transit periods that temporarily delay financial expansion. A deeper astrological analysis can help reveal the real reason behind your financial struggles—whether it is timing, planetary alignment, or karmic lessons—and guide you toward the right period and direction where prosperity can begin to flow more smoothly.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Why does the mind feel unstable despite your efforts to stay calm?",
    description:
      "You may be experiencing continuous overthinking, stress, and mental confusion, where thoughts feel heavy and difficult to control. In astrology, such patterns are often linked to the influence of Moon, Mercury, or karmic imbalances affecting mental stability and emotional clarity. A deeper astrological analysis can help identify what is disturbing your inner peace—whether it is planetary influence, emotional energy blockage, or timing cycles—and guide you toward restoring calmness, clarity, and control over your thoughts.",
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
            Life has pattern. Understanding brings Clarity
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
