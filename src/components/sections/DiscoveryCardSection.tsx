import DiscoveryCard from "../ui/DiscoveryCard";

const discoveries = [
  {
    number: "01",
    title: "Hidden emotional patterns",
    description:"Understand why you react or feel a certain way in different situations and relationships.",
  },
  {
    number: "02",
    title: "Relationship dynamics",
    description:"Gain clarity and discover ways to build stronger, healthier connections about your relationships and learn what may be causing misunderstandings or emotional distance."
  },
  {
    number: "03",
    title: "Timing & life direction",
    description:"Understand what phase of life you're currently in and when to take important steps with greater clarity and confidence."
  },
  {
    number: "04",
    title: "Personal strengths",
    description:"Discover your natural strengths and learn how to use them to overcome challenges with confidence."
  },
  {
    number: "05",
    title: "Greater self-awareness",
    description:"Gain a deeper understanding of yourself, your habits, and what truly matters to you. See yourself from a fresh perspective, understand your motivations, and make decisions that match with your goals."
  },
  {
    number: "06",
    title: "Practical guidance",
    description:
      "Actionable insights and meaningful next steps tailored to your current situation.",
    
  },
];

export default function DiscoverySection() {
  return (
    <section className="bg-[#F3EDDE] py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9C8CF4]">
            After Your Session
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#2D2336] md:text-5xl">
            What People Often Discover
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#7A7481]">
            These are common realizations clients share after their consultation.
            Not predictions, but meaningful moments of clarity, self-awareness,
            and perspective.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {discoveries.map((item) => (
            <DiscoveryCard
              key={item.title}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}