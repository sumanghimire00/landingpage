import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "../ui/Button";
import Image from "next/image";

export default function GuidanceSection() {
  return (
    <section className="bg-[#F3EDDE] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="heading-font font-semibold text-5xl text-slate-900">
              Guidance Beyond Ordinary
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              This experience is designed for those seeking deeper clarity
              beyond ordinary advice. We go beyond basic horoscope readings by
              analyzing both your D1 (Life Path) and D9 (Destiny Path) charts
              together. While the D1 chart reveals your personality,
              relationships, career, and major life events, the D9 chart
              uncovers your deeper destiny, inner strength, marriage, dharma,
              and long-term potential. By combining both, we help you understand
              the hidden patterns shaping your life, emotional cycles,
              opportunities, challenges, and important decisions — giving you
              deeper clarity, direction, and confidence for the future.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle className="h-3.5 w-3.5 text-amber-600"/>
                Deep Insight
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle className="h-3.5 w-3.5 text-amber-600"/>
                Private & Trusted
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button className="group">
                Book Your Session Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/images/chat.png"
              alt="Vedic Astrology Chart"
              width={500}
              height={500}
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
