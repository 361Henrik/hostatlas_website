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

          {/* ── Right column — how we work together ─────────────── */}
          <ScrollReveal delay={160} className="hidden lg:block sticky top-24">
            <div
              className="rounded-2xl"
              style={{
                backgroundColor: "#F5F3EF",
                padding: "40px",
                border: "0.5px solid rgba(196,154,92,0.25)",
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
                  marginBottom: "10px",
                }}
              >
                How we work
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 500,
                  fontSize: "22px",
                  lineHeight: 1.2,
                  color: "#1A1A2E",
                  marginBottom: "32px",
                }}
              >
                A close collaboration from brief to launch.
              </h3>

              {/* Timeline steps */}
              <div className="flex flex-col" style={{ gap: "0px" }}>
                {[
                  {
                    step: "01",
                    label: "Brief",
                    body: "We start with your routes, your brand, and your guest. What they should feel. What they should understand. What stays private.",
                  },
                  {
                    step: "02",
                    label: "Research & write",
                    body: "Our editorial team researches and writes every story to your brief — structured, reviewed, and sent to you for sign-off before any guest sees it.",
                  },
                  {
                    step: "03",
                    label: "Approve",
                    body: "Nothing goes live without your approval. You review every piece of content. The tone, the detail, the emphasis — all signed off by you.",
                  },
                  {
                    step: "04",
                    label: "Launch",
                    body: "We configure the platform to your route, deliver a QR activation mechanic that fits your workflow, and remain on hand as the route evolves.",
                  },
                ].map((item, i, arr) => (
                  <div key={item.step} className="flex gap-6">
                    {/* Step marker column */}
                    <div className="flex flex-col items-center" style={{ minWidth: "36px" }}>
                      <div
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          border: "1.5px solid #1B3D2F",
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 500,
                          fontSize: "11px",
                          color: "#1B3D2F",
                        }}
                      >
                        {item.step}
                      </div>
                      {/* Connector line — not on last item */}
                      {i < arr.length - 1 && (
                        <div style={{ width: "1px", flex: 1, backgroundColor: "rgba(27,61,47,0.15)", marginTop: "4px", marginBottom: "4px", minHeight: "28px" }} />
                      )}
                    </div>

                    {/* Step content */}
                    <div style={{ paddingTop: "6px", paddingBottom: i < arr.length - 1 ? "24px" : "0px" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 500,
                          fontSize: "15px",
                          color: "#1A1A2E",
                          marginBottom: "6px",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: 1.65,
                          color: "rgba(26,26,46,0.58)",
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing note */}
              <div
                className="mt-10"
                style={{ borderTop: "0.5px solid rgba(196,154,92,0.3)", paddingTop: "20px" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "15px",
                    lineHeight: 1.5,
                    color: "#1B3D2F",
                  }}
                >
                  We are currently working with a select number of operators.
                  If this is the right fit for your route, we would like to hear from you.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
