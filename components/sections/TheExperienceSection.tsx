import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const STEPS = [
  {
    label: "Scan",
    sub: "A QR code in their cabin or welcome message.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.25" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.25" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.25" />
        <rect x="14" y="14" width="3" height="3" fill="currentColor" />
        <rect x="18" y="14" width="3" height="3" fill="currentColor" />
        <rect x="14" y="18" width="3" height="3" fill="currentColor" />
        <rect x="18" y="18" width="3" height="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Explore",
    sub: "Stories and context appear as points of interest come into range.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.25" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    ),
  },
  {
    label: "Pocket the phone",
    sub: "Eyes back on the landscape. The context stays.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.25" />
        <path d="M10 18h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function TheExperienceSection() {
  return (
    <section id={SECTION_IDS.experience} style={{ backgroundColor: "#FBFAF8" }}>

      {/* ── Intro copy ───────────────────────────────────────────────── */}
      <div className="py-24 px-6 md:py-32">
        <div className="max-w-[860px] mx-auto">
          <ScrollReveal>
            <p
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "#1B3D2F",
              }}
            >
              The Experience
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 500,
                fontSize: "clamp(28px, 3.5vw, 40px)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "#1A1A2E",
              }}
            >
              What if the answer were already there?
            </h2>
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: 1.72,
                color: "#1A1A2E",
                maxWidth: "52ch",
              }}
            >
              The Host Atlas introduces a layer of context — shaped by place,
              and revealed only when the guest reaches for it. There is no app
              to download. No account to create. No announcement to listen out
              for.
            </p>
          </ScrollReveal>

          {/* ── Video — clean, no overlay ─────────────────────────── */}
          <ScrollReveal delay={80} className="mt-12">
            <div
              className="w-full rounded-xl overflow-hidden"
              style={{
                aspectRatio: "16/9",
                backgroundColor: "#1B3D2F",
              }}
            >
              <video
                src="/video/hostatlas-demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label="The Host Atlas demo — points of interest surfaced in real time as the vessel moves"
              />
            </div>
            <p
              className="mt-4 text-center"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                color: "rgba(26,26,46,0.45)",
              }}
            >
              What the guest sees — points of interest surfaced in real time, as the vessel moves through the route.
            </p>
          </ScrollReveal>

          {/* ── Product image — screen3-demo.jpg ─────────────────── */}
          <ScrollReveal delay={120} className="mt-10">
            <div
              className="w-full rounded-xl overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="/images/screen3-demo.jpg"
                alt="The Host Atlas interface — route context delivered to the guest's browser in real time"
                width={1600}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="mt-4 text-center"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                color: "rgba(26,26,46,0.45)",
              }}
            >
              The interface opens in the guest&apos;s phone browser — no installation required.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── How it works — 3 steps ───────────────────────────────────── */}
      <div
        className="py-24 px-6 md:py-32"
        style={{ backgroundColor: "#F5F3EF" }}
      >
        <div className="max-w-[860px] mx-auto">
          <ScrollReveal>
            <h3
              className="text-center"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 500,
                fontSize: "clamp(24px, 2.8vw, 32px)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "#1A1A2E",
              }}
            >
              No download. No account. No setup.
            </h3>
            <p
              className="text-center mt-6 mx-auto"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: 1.72,
                color: "#1A1A2E",
                maxWidth: "52ch",
              }}
            >
              Guests scan a QR code — in their cabin, on a welcome card, or in a
              message from the operator — and The Host Atlas opens directly in
              their phone&apos;s browser.
            </p>
          </ScrollReveal>

          {/* Three steps */}
          <div className="flex flex-col sm:flex-row gap-12 justify-center mt-14">
            {STEPS.map((step, i) => (
              <ScrollReveal
                key={step.label}
                delay={i * 80}
                className="flex flex-col items-center text-center mx-auto sm:mx-0 max-w-[200px]"
              >
                <div style={{ color: "#1B3D2F", marginBottom: "14px" }}>{step.icon}</div>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontWeight: 500,
                    fontSize: "17px",
                    color: "#1A1A2E",
                  }}
                >
                  {step.label}
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "rgba(26,26,46,0.6)",
                  }}
                >
                  {step.sub}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={240} className="mt-12 text-center">
            <p
              className="mx-auto"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "16px",
                lineHeight: 1.72,
                color: "rgba(26,26,46,0.55)",
                maxWidth: "52ch",
              }}
            >
              It is personal and quiet: the guest chooses when to look, and what
              to explore. Nothing is broadcast. Nothing interrupts. The landscape
              stays primary. Content saves to the device before departure — poor
              signal in a fjord or remote valley is never an issue.
            </p>
          </ScrollReveal>
        </div>
      </div>

    </section>
  );
}
