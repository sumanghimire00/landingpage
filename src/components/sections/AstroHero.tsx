"use client";

import { Play, ArrowRight, ShieldCheck, Lock, User } from "lucide-react";
import Button from "../ui/Button";

export default function AstroHero() {
  const videoUrl =
    "https://cdn.pixabay.com/video/2023/11/06/188215-881908473_large.mp4";

  const handleScroll = () => {
    const section = document.getElementById("booking-section");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f8f5f2] py-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto mt-6 max-w-4xl text-center">
          <h1 className="heading-font text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Discover what&apos;s silently blocking your
            <span className="block">success, relationships & peace.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed ">
            Get a deeper understanding of why certain things keep happening in your life, what phase you're currently going through, and gain the clarity to make better decisions moving forward.
          </p>
        </div>

        {/* Video */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-700 via-purple-600 to-violet-500 shadow-[0_25px_60px_rgba(124,58,237,0.35)]">
            <video
              className="h-[380px] w-full object-cover"
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="auto"
            />
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            Watch how WhatsApp booking works
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button className="group gap-3 px-8 py-4" onClick={handleScroll}>
            Book Your Session Now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Trust Features */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-amber-500" />
            <span>100% money-back guarantee</span>
          </div>

          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-amber-500" />
            <span>1-on-1 private sessions</span>
          </div>

          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-amber-500" />
            <span>Confidential</span>
          </div>
        </div>
      </div>
    </section>
  );
}
