import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const STEPS = [
  {
    num: "1",
    label: "Scan",
    sub: "A QR code in the cabin, on a welcome card, or in a message from the operator.",
  },
  {
    num: "2",
    label: "Explore",
    sub: "Stories and context surface as the vessel moves through the route. Personal. Quiet. In their own language.",
  },
  {
    num: "3",
    label: "Pocket the phone",
    sub: "Audio continues in the background. Eyes back on the landscape.",
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

      {/* ── AR Phone Mockup — portrait, CSS-built ────────────────── */}
      <ScrollReveal>
        <div
          className="flex flex-col items-center py-16 px-6"
          style={{ backgroundColor: "#FBFAF8" }}
        >
          {/* Portrait phone frame */}
          <div
            className="relative"
            style={{
              width: "240px",
              height: "480px",
              backgroundColor: "#1B3D2F",
              borderRadius: "28px",
              border: "2px solid rgba(196,154,92,0.35)",
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(27,61,47,0.22), 0 4px 16px rgba(0,0,0,0.12)",
            }}
            aria-label="AR phone mockup showing The Host Atlas in use"
          >
            {/* Status bar */}
            <div
              className="flex items-center justify-between px-5 pt-3 pb-2"
              style={{ backgroundColor: "#1B3D2F" }}
            >
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "9px", color: "rgba(251,250,248,0.7)" }}>The Host Atlas</span>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "9px", color: "#C49A5C" }}>● Live</span>
            </div>

            {/* Map / landscape area */}
            <div
              className="relative"
              style={{
                height: "200px",
                background: "linear-gradient(180deg, #1B3D2F 0%, #2a5c45 60%, #3a7a5a 100%)",
                borderBottom: "0.5px solid rgba(196,154,92,0.25)",
              }}
            >
              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                <path d="M30 180 Q80 120 120 100 Q160 80 210 60" stroke="#C49A5C" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.7" />
                {/* Vessel dot */}
                <circle cx="120" cy="100" r="5" fill="#C49A5C" />
                <circle cx="120" cy="100" r="10" fill="rgba(196,154,92,0.2)" />
              </svg>
              {/* Mini-map label */}
              <div
                className="absolute bottom-3 left-3 rounded"
                style={{ padding: "4px 8px", backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
              >
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "8px", color: "rgba(251,250,248,0.8)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Rhine Gorge</p>
              </div>
            </div>

            {/* POI card 1 */}
            <div
              className="mx-4 mt-4 rounded-lg"
              style={{ padding: "10px 12px", backgroundColor: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(196,154,92,0.4)" }}
            >
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "8px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C49A5C" }}>History</p>
              <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "12px", lineHeight: 1.35, color: "#FBFAF8", marginTop: "3px" }}>Burg Sooneck · c. 1170</p>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "9px", color: "rgba(251,250,248,0.45)", marginTop: "2px" }}>Built as a toll fortress on the Rhine</p>
              {/* Anchor */}
              <div className="flex items-center gap-1.5 mt-2">
                <div style={{ width: "1px", height: "10px", backgroundColor: "#C49A5C" }} />
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "8px", color: "rgba(196,154,92,0.7)" }}>340m ahead</p>
              </div>
            </div>

            {/* POI card 2 */}
            <div
              className="mx-4 mt-2 rounded-lg"
              style={{ padding: "10px 12px", backgroundColor: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(196,154,92,0.4)" }}
            >
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "8px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C49A5C" }}>Local producers</p>
              <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "12px", lineHeight: 1.35, color: "#FBFAF8", marginTop: "3px" }}>Weingut Becker · Riesling</p>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "9px", color: "rgba(251,250,248,0.45)", marginTop: "2px" }}>Estate since 1847</p>
              <div className="flex items-center gap-1.5 mt-2">
                <div style={{ width: "1px", height: "10px", backgroundColor: "#C49A5C" }} />
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "8px", color: "rgba(196,154,92,0.7)" }}>Port side</p>
              </div>
            </div>

            {/* Operator branding strip */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-2"
              style={{ backgroundColor: "rgba(27,61,47,0.95)", borderTop: "0.5px solid rgba(196,154,92,0.2)" }}
            >
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "8px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(196,154,92,0.65)" }}>Powered by The Host Atlas</p>
            </div>
          </div>

          <p
            className="mt-6 text-center"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13px",
              color: "rgba(26,26,46,0.45)",
              maxWidth: "38ch",
            }}
          >
            What the guest holds — personalised, quiet, offline-ready.
          </p>
        </div>
      </ScrollReveal>

      {/* ── Lower panel — off-white ───────────────────────────────── */}
      <div
        className="py-24 px-6 md:py-32"
        style={{ backgroundColor: "#F5F3EF" }}
      >
        <div className="max-w-[860px] mx-auto">
          {/* Three steps — numbered circles */}
          <div className="flex flex-col sm:flex-row gap-12 justify-center">
            {STEPS.map((step, i) => (
              <ScrollReveal
                key={step.label}
                delay={i * 80}
                className="flex flex-col items-center text-center mx-auto sm:mx-0 max-w-[200px]"
              >
                {/* Numbered circle */}
                <div
                  className="flex items-center justify-center mb-4 flex-shrink-0"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1.5px solid #1B3D2F",
                    fontFamily: "var(--font-playfair), serif",
                    fontWeight: 500,
                    fontSize: "15px",
                    color: "#1B3D2F",
                  }}
                >
                  {step.num}
                </div>
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
