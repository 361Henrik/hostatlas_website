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

const POI_CARDS = [
  { category: "History", title: "Medieval fortification · c.\u00a01280", sub: "340m ahead" },
  { category: "Local producers", title: "Weingut Becker estate · Riesling", sub: "Since 1847" },
  { category: "Geology", title: "Devonian slate formation", sub: "380 million years old" },
];

export default function TheExperienceSection() {
  return (
    <section id={SECTION_IDS.experience}>

      {/* ── Upper panel — warm white ──────────────────────────────── */}
      <div
        className="py-24 px-6 md:py-32"
        style={{ backgroundColor: "#FBFAF8" }}
      >
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

          {/* ── Demo video — landscape ───────────────────────────── */}
          <ScrollReveal delay={80} className="mt-12">
            <div
              className="w-full rounded-xl overflow-hidden relative"
              style={{ aspectRatio: "16/9", backgroundColor: "#1B3D2F" }}
            >
              {/* Video background */}
              <video
                src="/video/hostatlas-demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                aria-label="The Host Atlas demo — points of interest surfaced in real time as the vessel moves"
              />
              {/* Subtle overlay to ensure UI elements stay legible */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(27,61,47,0.35)" }}
              />

              {/* Status bar */}
              <div
                className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-2.5"
                style={{ backgroundColor: "rgba(0,0,0,0.28)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  The Host Atlas · Live · Rhine Valley
                </span>
                <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)" }}>● GPS</span>
              </div>

              {/* POI cards */}
              <div className="absolute top-12 left-0 right-0 flex items-start justify-around px-6 pt-4 gap-3">
                {POI_CARDS.map((card) => (
                  <div key={card.title} className="flex flex-col items-center" style={{ maxWidth: "180px" }}>
                    <div
                      className="rounded-lg w-full"
                      style={{
                        padding: "10px 12px",
                        background: "rgba(27,61,47,0.92)",
                        border: "0.5px solid #C49A5C",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 500,
                          fontSize: "9px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#C49A5C",
                        }}
                      >
                        {card.category}
                      </p>
                      <p
                        className="mt-0.5"
                        style={{
                          fontFamily: "var(--font-playfair), serif",
                          fontStyle: "italic",
                          fontSize: "11px",
                          lineHeight: 1.35,
                          color: "#FBFAF8",
                        }}
                      >
                        {card.title}
                      </p>
                      <p
                        className="mt-0.5"
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "9px",
                          color: "rgba(251,250,248,0.55)",
                        }}
                      >
                        {card.sub}
                      </p>
                    </div>
                    <div style={{ width: "1px", height: "14px", backgroundColor: "#C49A5C", marginTop: "3px" }} />
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#C49A5C" }} />
                  </div>
                ))}
              </div>

              {/* Mini-map */}
              <div
                className="absolute bottom-4 left-4 rounded-lg"
                style={{
                  padding: "8px 12px",
                  background: "rgba(27,61,47,0.92)",
                  border: "0.5px solid rgba(196,154,92,0.4)",
                  minWidth: "110px",
                }}
              >
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(196,154,92,0.8)" }}>
                  Rhine Gorge
                </p>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", color: "rgba(251,250,248,0.65)", marginTop: "2px" }}>
                  3 nearby stories
                </p>
              </div>
            </div>
            <p
              className="mt-4 text-center"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                color: "rgba(26,26,46,0.5)",
              }}
            >
              What the guest sees — points of interest surfaced in real time, as the vessel moves through the route.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Lower panel — off-white ───────────────────────────────── */}
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
          <div className="flex flex-col sm:flex-row gap-12 justify-center mt-12">
            {STEPS.map((step, i) => (
              <ScrollReveal
                key={step.label}
                delay={i * 80}
                className="flex flex-col items-center text-center mx-auto sm:mx-0 max-w-[200px]"
              >
                <div style={{ color: "#1B3D2F", marginBottom: "12px" }}>{step.icon}</div>
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

          <ScrollReveal delay={240} className="mt-10 text-center">
            <p
              className="mx-auto"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "16px",
                lineHeight: 1.72,
                color: "rgba(26,26,46,0.6)",
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
