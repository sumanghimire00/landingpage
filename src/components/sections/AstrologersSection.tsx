"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import AstrologerCard from "../ui/AstrologerCard";
import Button from "../ui/Button";
import Autoplay from "embla-carousel-autoplay";

const astrologers = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    name: "Govinda Guru",
    title: "Vedic Astrology & Vastu Expert",
    description:
      "15+ years guiding individuals through complex relationship and career karmic cycles.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=435&auto=format&fit=crop",
    name: "Dr. Meera Desai",
    title: "PhD in Jyotish Shastra",
    description:
      "Specializes in D9 Navamsa chart analysis for deep destiny alignment and marriage timing.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633625763717-045645e9e739?q=80&w=387&auto=format&fit=crop",
    name: "Guru Prakash",
    title: "KP System & Nadi Astrologer",
    description:
      "Known for pinpoint accuracy in financial forecasting and identifying energetic blockages.",
  },
];

export default function AstrologersSection() {


  const autoplay = useRef(
  Autoplay({
    delay: 2000,
    stopOnInteraction: false,
  })
);

 const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    align: "center",
    loop: true,
  },
  [autoplay.current]
);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  
// Page scroller for Button
  const handleScroll = () => {
    document
      .getElementById("booking-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#F3EDDE] py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
            Your Guide
          </p>

          <h2 className="heading-font mt-3 text-4xl text-slate-900 md:text-5xl">
            Guided by Nepal&apos;s most trusted Vedic astrologers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-light text-slate-500">
            Every AstroParasar Guru has been personally trained through the traditional Guru–Shishya Parampara and follows classical Vedic astrology methods. We will personally match you with the astrologer who is best suited to help you with your questions and life concerns.
          </p>
        </div>

        {/* Desktop */}
        <div className="mt-14 hidden gap-8 md:grid md:grid-cols-3">
          {astrologers.map((guru) => (
            <AstrologerCard key={guru.name} {...guru} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="mt-10 md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {astrologers.map((guru) => (
                <div
                  key={guru.name}
                  className="min-w-full px-4"
                >
                  <AstrologerCard {...guru} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-5 flex justify-center gap-2">
            {astrologers.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-6 bg-amber-500"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-sm font-light italic text-slate-800">
          You don&apos;t need to choose — we&apos;ll pair you with the
          astrologer best suited to your chart.
        </p>

        <div className="mt-8 flex justify-center">
          <Button className="group gap-3" onClick={handleScroll}>
            Book Your Session Now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}