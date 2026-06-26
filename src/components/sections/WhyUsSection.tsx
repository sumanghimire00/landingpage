import Image from "next/image";

export default function WhyChooseSection() {
  return (
    <section className="bg-[#f8f5f2] py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[2px] text-[#8E7CFF]">
            Why Astroparasar
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-serif text-[#2A2148]">
            Why people choose Astroparasar over ordinary astrology
          </h2>

          <p className="mt-4 text-[#7A7685]">
            Beyond predictions — a tradition of depth, empathy, and clarity
            that people genuinely return to.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Image
            src="/images/why_us.png"
            alt="Why people choose Astroparasar"
            width={1000}
            height={600}
            priority
            className="h-auto w-full max-w-5xl"
          />
        </div>
      </div>
    </section>
  );
}