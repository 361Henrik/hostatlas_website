import Image from "next/image";
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

            {/* Four pillars */}
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

            {/* Seasonal block */}
            <ScrollReveal delay={320} className="mt-12">
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
          </div>

          {/* ── Image — right column ─────────────────────────────── */}
          <ScrollReveal delay={160} className="hidden lg:flex flex-col gap-4 sticky top-24">
            <div className="relative overflow-hidden rounded-xl" style={{ height: "520px" }}>
              <Image
                src="/images/screen6-operator.jpg"
                alt="Cruise operator reviewing The Host Atlas content platform — managing routes, narratives, and guest experience layers"
                fill
                className="object-cover"
              />
            </div>
            <p
              className="text-center"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                color: "rgba(26,26,46,0.48)",
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
