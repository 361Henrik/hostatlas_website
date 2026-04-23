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
    verbatim: "\u201cWe sailed for hours through stunning scenery and had no idea what we were looking at. The guide had finished for the day.\u201d",
    attribution: "Rhine cruise guest",
  },
  {
    number: "02",
    statement: "Curiosity is constant. Answers are often missing.",
    verbatim: "\u201cI kept wanting to know more about what I was passing \u2014 the towns, the castles, the vineyards. I couldn\u2019t find much that was specific to where we were.\u201d",
    attribution: "Douro Valley guest",
  },
  {
    number: "03",
    statement: "The journey itself often has no narrator.",
    verbatim: "\u201cThe excursions were well explained. But the time on the ship, watching the landscape go by \u2014 we were on our own with that.\u201d",
    attribution: "Norwegian fjord expedition",
  },
];

export default function TheMomentSection() {
  return (
    <section id={SECTION_IDS.moment} style={{ backgroundColor: "#FBFAF8" }}>

      {/* ── Two-column: image left / content right ─────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Image column */}
        <div className="relative min-h-[400px] lg:min-h-[700px]">
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

      {/* ── Verbatim callouts — light strip over image ──────────────── */}
      <div style={{ height: "50vh", minHeight: "320px" }}>
      <ScrollReveal className="relative w-full overflow-hidden h-full">
        <Image
          src="/images/screen2-deck-river.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover object-top"
        />
        {/* Very light overlay so the image stays bright */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(251,250,248,0.08)" }}
          aria-hidden="true"
        />

        {/* Three floating verbatim boxes — desktop */}
        <div className="hidden md:flex absolute inset-0 items-end justify-around px-8 pb-10 gap-4">
          {VERBATIMS.map((v) => (
            <div
              key={v.quote}
              style={{
                backgroundColor: "rgba(251,250,248,0.92)",
                border: "0.5px solid rgba(196,154,92,0.6)",
                borderRadius: "8px",
                padding: "14px 16px",
                maxWidth: "240px",
                backdropFilter: "blur(4px)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontStyle: "italic",
                  fontSize: "14px",
                  lineHeight: 1.5,
                  color: "#1A1A2E",
                  marginBottom: "6px",
                }}
              >
                &ldquo;{v.quote}&rdquo;
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "11px",
                  color: "rgba(26,26,46,0.5)",
                }}
              >
                {v.attribution}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: single centred callout */}
        <div className="md:hidden absolute inset-0 flex items-end justify-center px-6 pb-8">
          <div
            style={{
              backgroundColor: "rgba(251,250,248,0.92)",
              border: "0.5px solid rgba(196,154,92,0.6)",
              borderRadius: "8px",
              padding: "14px 16px",
              maxWidth: "280px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
                fontSize: "14px",
                lineHeight: 1.5,
                color: "#1A1A2E",
              }}
            >
              &ldquo;{VERBATIMS[0].quote}&rdquo;
            </p>
          </div>
        </div>
      </ScrollReveal>
      </div>

      {/* ── Wallpaper split ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

        {/* Left — desaturated / without context */}
        <div className="relative overflow-hidden" style={{ minHeight: "300px" }}>
          <Image
            src="/images/screen2-deck-river.jpg"
            alt="River landscape without interpretive context"
            fill
            className="object-cover"
            style={{ filter: "saturate(0.25) brightness(0.88)" }}
          />
          <div className="absolute inset-0 flex flex-col justify-end pb-5 px-6">
            <p
              className="text-center"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Without context, scenery becomes wallpaper.
            </p>
          </div>
        </div>

        {/* Right — full colour with POI card */}
        <div className="relative overflow-hidden" style={{ minHeight: "300px" }}>
          <Image
            src="/images/screen2-deck-river.jpg"
            alt="The same river landscape — now named and storied"
            fill
            className="object-cover"
          />
          <div
            className="absolute top-5 right-5"
            style={{
              background: "rgba(27,61,47,0.92)",
              border: "0.5px solid #C49A5C",
              borderRadius: "8px",
              padding: "10px 13px",
              maxWidth: "170px",
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
              History
            </p>
            <p
              className="mt-0.5"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
                fontSize: "13px",
                lineHeight: 1.4,
                color: "#FBFAF8",
              }}
            >
              Burg Sooneck · c.&nbsp;1170
            </p>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end pb-5 px-6">
            <p
              className="text-center"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              The same stretch. Now it has a story.
            </p>
          </div>
        </div>
      </div>

      {/* ── Research Findings — clean 3-card layout on off-white ────── */}
      <div style={{ backgroundColor: "#F5F3EF" }}>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FINDINGS.map((f, i) => (
              <ScrollReveal key={f.number} delay={i * 80}>
                <div className="flex flex-col h-full">
                  {/* Number */}
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

                  {/* Statement */}
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: 1.4,
                      color: "#1A1A2E",
                      marginBottom: "16px",
                      flexGrow: 1,
                    }}
                  >
                    {f.statement}
                  </p>

                  {/* Verbatim */}
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
                        color: "rgba(26,26,46,0.7)",
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

          {/* Closing line */}
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
