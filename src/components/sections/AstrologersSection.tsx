import { ArrowRight } from "lucide-react";
import AstrologerCard from "../ui/AstrologerCard";
import Button from "../ui/Button";

const astrologers = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    name: "Govinda Guru",
    title: "Vedic Astrology & Vastu Expert",
    description:
      "15+ years guiding individuals through complex relationship and career karmic cycles.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Dr. Meera Desai",
    title: "PhD in Jyotish Shastra",
    description:
      "Specializes in D9 Navamsa chart analysis for deep destiny alignment and marriage timing.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633625763717-045645e9e739?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Guru Prakash",
    title: "KP System & Nadi Astrologer",
    description:
      "Known for pinpoint accuracy in financial forecasting and identifying energetic blockages.",
  },
];

export default function AstrologersSection() {
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

          <p className="mx-auto mt-5 max-w-2xl text-slate-500 font-light">
            Every Astroparasar guru is hand-picked, verified, and trained in
            classical Vedic methods. We&apos;ll personally match you with the
            right astrologer based on your birth chart and questions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {astrologers.map((guru) => (
            <AstrologerCard
              key={guru.name}
              image={guru.image}
              name={guru.name}
              title={guru.title}
              description={guru.description}
            />
          ))}
        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-sm italic text-slate-800 font-light">
          You don&apos;t need to choose — we&apos;ll pair you with the
          astrologer best suited to your chart.
        </p>

        <div className="mt-8 flex justify-center">
          <Button className=" gap-3 group  ">
            Book Your Session Now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
