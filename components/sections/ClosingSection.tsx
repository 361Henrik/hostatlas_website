import Image from "next/image";
import { CONTACT_EMAIL, CONTACT_PHONE, SECTION_IDS } from "@/lib/constants";

export default function ClosingSection() {
  return (
    <section
      id={SECTION_IDS.closing}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background image ─────────────────────────────────────── */}
      <Image
        src="/images/screen9-evening-water.jpg"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover"
        style={{ zIndex: 0 }}
      />

      {/* ── Overlay rgba(27,61,47,0.78) — design system §6 ──────── */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(27,61,47,0.78)", zIndex: 1 }}
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div
        className="relative text-center px-6 max-w-[600px] mx-auto py-24 md:py-32"
        style={{ zIndex: 2 }}
      >
        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 500,
            fontSize: "clamp(28px, 4vw, 44px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "#F5F3EF",
          }}
        >
          Currently in conversation with a select number of operators.
        </h2>

        {/* Body paragraphs */}
        <p
          className="mt-6 mx-auto"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: 1.72,
            color: "rgba(245,243,239,0.82)",
            maxWidth: "48ch",
          }}
        >
          We are in conversation with a small number of river, coastal, and
          expedition cruise operators. If the premise is relevant to your routes
          and your guests, we would be glad to find some time.
        </p>
        <p
          className="mt-4 mx-auto"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: 1.72,
            color: "rgba(245,243,239,0.82)",
            maxWidth: "48ch",
          }}
        >
          There is no form. No funnel. Just a conversation with the people who
          built it.
        </p>

        {/* What the meeting covers */}
        <p
          className="mt-8 mx-auto"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: 1.7,
            color: "rgba(245,243,239,0.55)",
            maxWidth: "44ch",
          }}
        >
          See the prototype on a real route · Discuss what a deployment could
          look like for your itineraries · Walk through the insight layer with
          real sailing data
        </p>

        {/* Finding 6 verbatim — final emotional beat before CTA */}
        <p
          className="mx-auto"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(18px, 2.2vw, 22px)",
            lineHeight: 1.5,
            color: "rgba(245,243,239,0.85)",
            maxWidth: "560px",
            padding: "40px 0",
          }}
        >
          &ldquo;The scenery was extraordinary, but too often the journey passed
          without explanation, leaving us to wonder what we were seeing.&rdquo;
        </p>

        {/* Tagline echo */}
        <p
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "18px",
            lineHeight: 1.4,
            letterSpacing: "0.005em",
            color: "#C49A5C",
          }}
        >
          Curated narratives for the silent stretches
        </p>

        {/* Bronze CTA — on green panel */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center mt-6 transition-opacity duration-300 ease-out hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C49A5C]"
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

        {/* Secondary contact */}
        <p
          className="mt-4"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            color: "rgba(245,243,239,0.55)",
          }}
        >
          {CONTACT_PHONE} ·{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline underline-offset-2 transition-opacity duration-300 ease-out hover:opacity-80"
            style={{ color: "rgba(245,243,239,0.55)" }}
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        {/* Footer */}
        <footer className="mt-16">
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "rgba(196,154,92,0.4)",
              margin: "0 auto 16px",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              lineHeight: 1.7,
              color: "rgba(245,243,239,0.35)",
            }}
          >
            The Host Atlas · River, coastal, and expedition cruise operators · hostatlas.guide
            <br />
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
                fontSize: "12px",
              }}
            >
              Curated narratives for the silent stretches
            </span>
          </p>
        </footer>
      </div>
    </section>
  );
}
