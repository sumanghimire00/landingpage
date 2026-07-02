"use client";

import { Play, ArrowRight, ShieldCheck, Lock, User } from "lucide-react";
import Button from "../ui/Button";
export default function AstroHero() {
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
      {/* Background Glow */}
      

      <div className="mx-auto max-w-6xl px-6">
        {/* Badge Astro */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-purple-400 bg-white px-4 py-2 text-xs font-medium tracking-wide text-purple-500">
            ASTROPARASAR • VEDIC ASTROLOGY
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-6 max-w-4xl text-center">
          <h1 className="heading-font text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Discover what&apos;s silently blocking your
            <span className="block">
              success, relationships & peace.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed ">
            A deep astrological analysis to uncover karmic patterns,
            understand your current life phase, and find the clarity
            you&apos;ve been seeking.
          </p>
        </div>

        {/* Video Section s*/}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-700 via-purple-600 to-violet-500 shadow-[0_25px_60px_rgba(124,58,237,0.35)]">

           {/* Demo Bage */}
            <div className="absolute left-5 top-5 z-10">
              <span className="rounded-full bg-black/20 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
                Demo Video
              </span>
            </div>

            {/* Video Area */}
            <button
              aria-label="Play video"
              className=" group relative flex h-[380px] w-full items-center justify-center"
            >
              <div className="cursor-pointer flex h-24 w-24 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                <Play
                  className="ml-1 h-10 w-10 text-white"
                  fill="white"
                />
              </div>
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            Watch how WhatsApp booking works
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <Button className=" gap-3 group px-8 py-4 " onClick={handleScroll}>
          Book Your Session Now
           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button >
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