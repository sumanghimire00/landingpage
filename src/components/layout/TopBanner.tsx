"use client";

import BookingSection from "../sections/BookingSection";
import Button from "../ui/Button";

export default function TopBanner() {


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
    <div className="sticky top-0 z-50 bg-[#16003d] px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="text-xs text-white sm:text-sm">
          <span className="font-semibold">Limited Offer:</span>
          <span className="ml-1 text-white/80">
            Book your session at ₹2999 and save ₹2001 today
          </span>
        </div>

        <Button onClick={handleScroll} className="shrink-0">
          Book Now
        </Button>
      </div>
    </div>
  );
}