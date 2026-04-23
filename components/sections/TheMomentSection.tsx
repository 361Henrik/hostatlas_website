import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const VERBATIMS = [
  {
    quote: "What\u2019s that over there?",
    attribution: "Rhine Gorge \u00b7 Day 3",
  },
  {
    quote: "Are those vines? Whose are they? What do they make?",
    attribution: "Douro Valley \u00b7 morning transit",
  },
  {
    quote: "The guide finished an hour ago. We\u2019ve been sailing since.",
    attribution: "Norwegian coast \u00b7 Hurtigruten",
  },
];

const FINDINGS = [
  {
    number: "01",
    statement: "60\u201380% of the journey unfolds without guided context.",
    verbatim:
      "\u201cWe sailed for hours through stunning scenery and had no idea what we were looking at. The guide had finished for the day.\u201d",
    attribution: "Rhine cruise guest",
  },
  {
    number: "02",
    statement: "Curiosity is constant. Answers are often missing.",
    verbatim:
      "\u201cI kept wanting to know more about what I was passing \u2014 the towns, the castles, the vineyards. I couldn\u2019t find much that was specific to where we were.\u201d",
    attribution: "Douro Valley guest",
  },
  {
    number: "03",
    statement: "The journey itself often has no narrator.",
    verbatim:
      "\u201cThe excursions were well explained. But the time on the ship, watching the landscape go by \u2014 we were on our own with that.\u201d",
    attribution: "Norwegian fjord expedition",
  },
];

export default function TheMomentSection() {
  return (
    <section id={SECTION_IDS.moment} style={{ backgroundColor: "#FBFAF8" }}>

      {/* ── Two-column: image left / content right ─────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Image column */}
        <div className="relative min-h-[400px] lg:min-h-[680px]">
          <Image
            src="/images/screen2-deck-river.jpg"
            alt="Guest at the railing of a river cruise vessel looking out at the passing landscape"
            fill
            className="object-cover"
          />
        </div>

        {/* Content column */}
        <div className="px-8 py-20 md:px-16 md:py-28 max-w-[600px]">

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
              The Silent Stretches
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
              Every journey carries the same question.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80} className="mt-8">
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: 1.72,
                color: "#1A1A2E",
                maxWidth: "48ch",
              }}
            >
              You&apos;re on deck. Something catches your eye — a ruined tower
              on a hillside, a cluster of boats in a cove, a stretch of cliff
              face that seems to hold something. And the question forms, almost
              involuntarily.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160} className="mt-10">
            <p
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "20px",
                lineHeight: 1.35,
                color: "#1B3D2F",
              }}
            >
              These are the silent stretches.
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: 1.72,
                color: "rgba(26,26,46,0.68)",
                maxWidth: "46ch",
              }}
            >
              The hours between the highlights — when guests are watching,
              curious, and there is nothing there to meet them. Not because the
              landscape is empty — because what it holds is rarely named.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240} className="mt-6">
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: 1.72,
                color: "rgba(26,26,46,0.68)",
                maxWidth: "46ch",
              }}
            >
              When information does exist, it often arrives too late. By the
              time an announcement is made, the moment has passed — the castle
              has slipped behind the bend.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={320} className="mt-10">
            <blockquote
              style={{ borderLeft: "2px solid #C49A5C", paddingLeft: "16px" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "17px",
                  lineHeight: 1.5,
                  color: "#1B3D2F",
                }}
              >
                Guides bring the highlights to life. The Host Atlas curates the
                silent stretches.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Three verbatim quote cards — clean strip ─────────────────── */}
      <div style={{ backgroundColor: "#F5F3EF" }}>
        <div className="max-w-[960px] mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VERBATIMS.map((v, i) => (
              <ScrollReveal key={v.quote} delay={i * 80}>
                <div
                  style={{
                    borderLeft: "2px solid #C49A5C",
                    paddingLeft: "16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: "16px",
                      lineHeight: 1.55,
                      color: "#1A1A2E",
                      marginBottom: "10px",
                    }}
                  >
                    &ldquo;{v.quote}&rdquo;
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.05em",
                      color: "rgba(26,26,46,0.45)",
                    }}
                  >
                    {v.attribution}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Research Findings — 3-col cards ─────────────────────────── */}
      {/* NOTE: This block will move to position 8 (before CTA) in Step 6 */}
      <div style={{ backgroundColor: "#FBFAF8" }}>
        <div className="max-w-[960px] mx-auto px-6 py-20 md:py-28">

          <ScrollReveal>
            <p
              className="uppercase mb-12"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "#1B3D2F",
              }}
            >
              From the Research
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {FINDINGS.map((f, i) => (
              <ScrollReveal key={f.number} delay={i * 80}>
                <div className="flex flex-col h-full">
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      color: "#C49A5C",
                      marginBottom: "12px",
                    }}
                  >
                    {f.number}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontWeight: 500,
                      fontSize: "17px",
                      lineHeight: 1.4,
                      color: "#1A1A2E",
                      marginBottom: "16px",
                      flexGrow: 1,
                    }}
                  >
                    {f.statement}
                  </p>
                  <div
                    style={{
                      borderLeft: "2px solid #C49A5C",
                      paddingLeft: "12px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontWeight: 400,
                        fontStyle: "italic",
                        fontSize: "13px",
                        lineHeight: 1.6,
                        color: "rgba(26,26,46,0.68)",
                        marginBottom: "6px",
                      }}
                    >
                      {f.verbatim}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "11px",
                        color: "rgba(26,26,46,0.4)",
                      }}
                    >
                      {f.attribution}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={240} className="mt-16">
            <div
              style={{
                borderTop: "1px solid rgba(26,26,46,0.1)",
                paddingTop: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(18px, 2vw, 22px)",
                  lineHeight: 1.35,
                  color: "#1B3D2F",
                }}
              >
                Extraordinary landscapes, quietly unexplained.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </section>
  );
}
