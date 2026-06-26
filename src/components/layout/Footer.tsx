import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#170135] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left */}
          <div>
            <h3 className="text-lg font-medium">
              Astroparasar
            </h3>

            <p className="mt-2 text-sm text-[#FAF7F299]">
              Guiding you towards your true
              <br />
              path.
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-12 text-center text-sm text-[#FAF7F299]">
            <Link href="/privacy-policy">
              Privacy
              <br />
              Policy
            </Link>

            <Link href="/terms-of-service">
              Terms of
              <br />
              Service
            </Link>

            <Link href="/refund-policy">
              Refund
              <br />
              Policy
            </Link>
          </div>

          {/* Right */}
          <p className="text-sm text-[#FAF7F299]">
            © 2026 Astroparasar. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}