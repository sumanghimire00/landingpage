import StoryCard from "../ui/StoryCard";

export default function TransformationStorySection() {
  return (
    <section className="bg-[#170135] py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
            TRANSFORMATION STORY
          </p>

          <h2 className="heading-font mt-3 text-4xl text-white md:text-5xl">
            From Confusion to Clarity
          </h2>
        </div>

        {/* Images */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <StoryCard
            image="/images/before.png"
            label="Before"
            labelColor="bg-white text-slate-600"
          />

          <StoryCard
            image="/images/after.png"
            label="After"
            labelColor="bg-[#E4A003] text-black"
          />
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <h3 className="heading-font text-4xl text-[#E4A003]">
            A Real Story: A real Shift
          </h3>

          <p className="mt-5 text-2xl text-white">
            “Astrology doesn't change your life, but awareness can
            change your direction.”
          </p>

          <p className="mx-auto mt-4 max-w-5xl text-sm leading-6 text-white/60">
           What you're seeing here is the difference between feeling disconnected and feeling understood. With the right guidance, relationships can become healthier, happier, and more fulfilling.
          </p>
        </div>
      </div>
    </section>
  );
}