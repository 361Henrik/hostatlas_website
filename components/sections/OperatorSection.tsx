import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const PILLARS = [
  { label: "You define the lens.", body: "The themes, tone, and narrative priorities are entirely yours — we research and write to your brief." },
  { label: "Your brand, throughout.", body: "Every guest interaction carries your identity, not ours. The platform is shared; the experience is yours." },
  { label: "We research and write.", body: "Our editorial team builds the content — reviewed, approved, and signed off by you before any guest sees it." },
  { label: "It grows with the route.", body: "New stretches, seasonal layers, and additional lenses can be added as the route evolves." },
];

const SEASON_CARDS = [
  {
    title: "Spring sailing — Rhine gorge",
    label: "April",
    body: "Cherry blossom on the slopes. Flooding history of the valley floor. The annual rhythm of the river keepers.",
  },
  {
    title: "Harvest sailing — Rhine gorge",
    label: "October",
    body: "Grape harvest in full view. The estate behind the vine rows. What this particular vintage is expected to produce.",
  },
];

export default function OperatorSection() {
  return (
    <section
      id={SECTION_IDS.operator}
      className="py-24 px-6 md:py-32"
      style={{ backgroundColor: "#FBFAF8" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Content — left ──────────────────────────────────── */}
          <div>
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
                Your Platform
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
                One platform. Your narrative, entirely.
              </h2>
              <p
                className="mt-6"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: 1.72,
                  color: "#1A1A2E",
                  maxWidth: "48ch",
                }}
              >
                The Host Atlas is not a generic content library. Every deployment
                is built specifically for the operator — in their voice, around
                their themes, approved before a single guest sees it. The
                platform is shared. The story, the tone, and the guest
                relationship are entirely yours.
              </p>
            </ScrollReveal>

            {/* Seasonal block — leads, per reference spec */}
            <ScrollReveal delay={80} className="mt-10">
              <div
                className="rounded-xl"
                style={{ backgroundColor: "#1B3D2F", padding: "40px" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C49A5C",
                  }}
                >
                  The Seasonal Layer
                </p>
                <h3
                  className="mt-4"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: 1.15,
                    color: "#F5F3EF",
                  }}
                >
                  The route repeats. The seasons don&apos;t.
                </h3>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: 1.7,
                    color: "rgba(245,243,239,0.82)",
                    maxWidth: "44ch",
                  }}
                >
                  A sailing on the Rhine in April moves through a different
                  landscape than the same route in October. The Host Atlas
                  content can be layered seasonally.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {SEASON_CARDS.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-lg"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.07)",
                        border: "0.5px solid rgba(196,154,92,0.3)",
                        padding: "18px 20px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 500,
                          fontSize: "10px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#C49A5C",
                        }}
                      >
                        {card.label}
                      </p>
                      <p
                        className="mt-2"
                        style={{
                          fontFamily: "var(--font-playfair), serif",
                          fontWeight: 500,
                          fontSize: "15px",
                          lineHeight: 1.35,
                          color: "#F5F3EF",
                        }}
                      >
                        {card.title}
                      </p>
                      <p
                        className="mt-2"
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 400,
                          fontSize: "13px",
                          lineHeight: 1.6,
                          color: "rgba(245,243,239,0.75)",
                        }}
                      >
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>

                <blockquote
                  className="mt-8"
                  style={{ borderLeft: "2px solid #C49A5C", paddingLeft: "20px" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: "18px",
                      lineHeight: 1.5,
                      color: "rgba(245,243,239,0.78)",
                    }}
                  >
                    Guides bring the highlights to life. The Host Atlas curates
                    the silent stretches.
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Four pillars — follow the seasonal block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {PILLARS.map((pillar, i) => (
                <ScrollReveal key={pillar.label} delay={i * 80}>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 500,
                        fontSize: "15px",
                        color: "#1A1A2E",
                      }}
                    >
                      {pillar.label}
                    </p>
                    <p
                      className="mt-2"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: 1.65,
                        color: "rgba(26,26,46,0.62)",
                        maxWidth: "32ch",
                      }}
                    >
                      {pillar.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ── Right column — CSS phone mockup (white-label PWA) ── */}
          <ScrollReveal delay={160} className="hidden lg:flex flex-col items-center gap-4 sticky top-24">
            {/* Portrait phone frame */}
            <div
              className="relative"
              style={{
                width: "260px",
                height: "520px",
                backgroundColor: "#1B3D2F",
                borderRadius: "32px",
                border: "2px solid rgba(196,154,92,0.3)",
                overflow: "hidden",
                boxShadow: "0 28px 72px rgba(27,61,47,0.20), 0 4px 16px rgba(0,0,0,0.10)",
              }}
              aria-label="Operator-branded Host Atlas PWA mockup"
            >
              {/* Operator top bar */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ backgroundColor: "#1B3D2F", borderBottom: "0.5px solid rgba(196,154,92,0.2)" }}
              >
                {/* Operator logo placeholder */}
                <div
                  style={{
                    width: "80px",
                    height: "14px",
                    borderRadius: "2px",
                    backgroundColor: "rgba(196,154,92,0.35)",
                  }}
                  aria-label="Operator logo area"
                />
                <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "9px", color: "#C49A5C" }}>● Live</span>
              </div>

              {/* Route name */}
              <div className="px-5 py-3" style={{ borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(196,154,92,0.7)" }}>Current route</p>
                <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "14px", color: "#F5F3EF", marginTop: "2px" }}>Rhine Valley · Day 3</p>
              </div>

              {/* Map area */}
              <div
                style={{
                  height: "150px",
                  background: "linear-gradient(180deg, #1e4a37 0%, #2a6048 100%)",
                  position: "relative",
                  borderBottom: "0.5px solid rgba(196,154,92,0.15)",
                }}
              >
                <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                  <path d="M20 140 Q80 100 130 80 Q180 60 240 40" stroke="#C49A5C" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.65" />
                  <circle cx="130" cy="80" r="5" fill="#C49A5C" />
                  <circle cx="130" cy="80" r="11" fill="rgba(196,154,92,0.18)" />
                </svg>
                <div className="absolute bottom-3 right-3 rounded" style={{ padding: "3px 8px", backgroundColor: "rgba(0,0,0,0.35)" }}>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "8px", color: "rgba(251,250,248,0.75)", letterSpacing: "0.06em" }}>Loreley · 4.2 km</p>
                </div>
              </div>

              {/* Story card */}
              <div className="mx-4 mt-4 rounded-lg" style={{ padding: "12px 14px", backgroundColor: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(196,154,92,0.35)" }}>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "8px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C49A5C" }}>History</p>
                <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "13px", lineHeight: 1.35, color: "#FBFAF8", marginTop: "3px" }}>Die Loreley · 1245</p>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "9px", lineHeight: 1.5, color: "rgba(251,250,248,0.5)", marginTop: "4px" }}>The rocky headland that has shaped river navigation for eight centuries.</p>
              </div>

              {/* Story card 2 */}
              <div className="mx-4 mt-2 rounded-lg" style={{ padding: "12px 14px", backgroundColor: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(196,154,92,0.35)" }}>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "8px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C49A5C" }}>Geology</p>
                <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "13px", lineHeight: 1.35, color: "#FBFAF8", marginTop: "3px" }}>Devonian slate formation</p>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "9px", lineHeight: 1.5, color: "rgba(251,250,248,0.5)", marginTop: "4px" }}>380 million years old.</p>
              </div>

              {/* Branding strip */}
              <div
                className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-2"
                style={{ backgroundColor: "rgba(27,61,47,0.97)", borderTop: "0.5px solid rgba(196,154,92,0.15)" }}
              >
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "8px", letterSpacing: "0.07em", textTransform: "uppercase", color: "rgba(196,154,92,0.55)" }}>Powered by The Host Atlas</p>
              </div>
            </div>

            <p
              className="text-center"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                color: "rgba(26,26,46,0.45)",
                maxWidth: "28ch",
              }}
            >
              The guest experience carries your identity
            </p>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
