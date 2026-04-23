import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden"
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

      {/* ── Content — left-aligned, max-width 1280px container, left half ── */}
      <div
        className="relative w-full px-8 md:px-16"
        style={{ zIndex: 2, maxWidth: "1280px", margin: "0 auto" }}
      >
        <div style={{ maxWidth: "540px" }}>
          {/* Headline */}
          <h1
            className="text-[#FBFAF8] mb-5"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 500,
              fontSize: "clamp(44px, 5.5vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            What&apos;s that
            <br />
            over there?
          </h1>

          {/* Sub-headline */}
          <p
            className="mb-5"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(18px, 2vw, 22px)",
              lineHeight: 1.35,
              color: "rgba(251,250,248,0.72)",
            }}
          >
            The highlights are covered. The silent stretches aren&apos;t.
          </p>

          {/* Tagline — bronze brand mark */}
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

          {/* Bronze rule */}
          <div
            className="bg-[#C49A5C] mb-9"
            style={{ width: "40px", height: "1px" }}
            aria-hidden="true"
          />

          {/* Body copy */}
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: 1.72,
              color: "rgba(251,250,248,0.78)",
            }}
          >
            The Host Atlas gives river, coastal, and expedition cruise operators
            a contextual experience layer for the journey between the highlights
            — turning what guests observe into something they understand.
          </p>
        </div>
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
