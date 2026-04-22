import Image from "next/image";
import { CONTACT_EMAIL, SECTION_IDS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative h-screen min-h-[680px] flex items-end overflow-hidden"
      aria-label="Hero — The Host Atlas"
    >
      {/* ── Background image ─────────────────────────────────────────── */}
      {/* Local file. No Unsplash. No famous landmark. */}
      <Image
        src="/images/hero-01.jpg"
        alt="A river landscape seen from a vessel deck — unnamed hills, water ahead, world dominant"
        fill
        priority
        className="object-cover animate-ken-burns"
        style={{ zIndex: 0 }}
      />

      {/* ── Overlay ──────────────────────────────────────────────────── */}
      {/* rgba(0,0,0,0.42) — design system minimum for hero slot */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.42)", zIndex: 1 }}
        aria-hidden="true"
      />

      {/* ── Content — bottom-left editorial layout ───────────────────── */}
      <div
        className="relative w-full max-w-[1280px] mx-auto px-8 md:px-16 pb-20 md:pb-28"
        style={{ zIndex: 2 }}
      >
        {/* Overline — cruise types, Inter 500, bronze, uppercase */}
        <p
          className="text-[#C49A5C] uppercase mb-7"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.09em",
          }}
        >
          River · Coastal · Expedition
        </p>

        {/* Headline — Playfair 500, large, tight leading */}
        <h1
          className="text-[#FBFAF8] mb-5"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 500,
            fontSize: "clamp(44px, 5.5vw, 68px)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            maxWidth: "13ch",
          }}
        >
          What&apos;s that
          <br />
          over there?
        </h1>

        {/* Sub-headline — italic, Playfair, white/70 */}
        <p
          className="mb-5"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(18px, 2vw, 22px)",
            lineHeight: 1.35,
            color: "rgba(251,250,248,0.72)",
            maxWidth: "38ch",
          }}
        >
          The highlights are covered. The silent stretches aren&apos;t.
        </p>

        {/* Tagline — Playfair italic, bronze — brand mark, not decoration */}
        <p
          className="text-[#C49A5C] mb-9"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "18px",
            lineHeight: 1.4,
            letterSpacing: "0.005em",
          }}
        >
          Curated narratives for the silent stretches
        </p>

        {/* Bronze rule — jewellery, not paint */}
        <div
          className="bg-[#C49A5C] mb-9"
          style={{ width: "40px", height: "1px" }}
          aria-hidden="true"
        />

        {/* Body copy — Inter 400, white/78, constrained to 48ch */}
        <p
          className="mb-10"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: 1.72,
            color: "rgba(251,250,248,0.78)",
            maxWidth: "48ch",
          }}
        >
          The Host Atlas gives river, coastal, and expedition cruise operators
          a contextual experience layer for the journey between the highlights
          — turning what guests observe into something they understand.
        </p>

        {/* CTA — Inter 500, deep green on bronze, minimal radius */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center transition-opacity duration-300 ease-out hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C49A5C]"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "15px",
            letterSpacing: "0.01em",
            color: "#1B3D2F",
            backgroundColor: "#C49A5C",
            paddingLeft: "32px",
            paddingRight: "32px",
            height: "48px",
            borderRadius: "2px",
          }}
        >
          Get in touch
        </a>
      </div>

      {/* ── Scroll indicator — bottom-right, bronze ──────────────────── */}
      <div
        className="absolute bottom-8 right-8 md:right-16 animate-scroll-pulse"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 7.5l5 5 5-5"
            stroke="#C49A5C"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
