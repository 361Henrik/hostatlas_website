import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background image ─────────────────────────────────────── */}
      <Image
        src="/images/hero-01.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover"
        style={{ zIndex: 0 }}
      />

      {/* ── Overlay rgba(0,0,0,0.55) ─────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)", zIndex: 1 }}
        aria-hidden="true"
      />

      {/* ── Content — left-aligned ───────────────────────────────── */}
      <div
        className="relative px-8 md:px-16 lg:px-24 max-w-[640px]"
        style={{ zIndex: 2 }}
      >
        {/* Overline */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(245,243,239,0.6)",
            marginBottom: "28px",
          }}
        >
          The Host Atlas
        </p>

        {/* Headline with quotation marks */}
        <h1
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 500,
            fontSize: "clamp(44px, 6vw, 76px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#F5F3EF",
            marginBottom: "28px",
          }}
        >
          &ldquo;What&rsquo;s that<br />over there?&rdquo;
        </h1>

        {/* Sub-headline — italic */}
        <p
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(18px, 2vw, 24px)",
            lineHeight: 1.45,
            color: "rgba(245,243,239,0.82)",
            marginBottom: "20px",
          }}
        >
          The question every guest asks.<br />The one that rarely gets answered.
        </p>

        {/* Tagline — bronze */}
        <p
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "15px",
            letterSpacing: "0.01em",
            color: "#C49A5C",
            marginBottom: "32px",
          }}
        >
          Curated narratives for the silent stretches
        </p>

        {/* Body */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: 1.72,
            color: "rgba(245,243,239,0.72)",
            maxWidth: "44ch",
          }}
        >
          The Host Atlas brings the landscape to life for guests on river
          cruises, coastal voyages, and scenic journeys — quietly, without
          interruption, exactly when they want it.
        </p>
        <p
          className="mt-4"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: 1.72,
            color: "rgba(245,243,239,0.52)",
            maxWidth: "42ch",
          }}
        >
          For operators, it turns the hours between the highlights into a
          branded, measurable part of the guest experience.
        </p>
      </div>

      {/* ── Scroll indicator — bottom centre ─────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(245,243,239,0.35)",
          }}
        >
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          style={{ color: "rgba(245,243,239,0.35)" }}
        >
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.2" />
          <rect x="7" y="5" width="2" height="5" rx="1" fill="currentColor" className="animate-bounce" />
        </svg>
      </div>
    </section>
  );
}
