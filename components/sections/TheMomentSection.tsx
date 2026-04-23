import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const VERBATIMS = [
  {
    quote: "What\u2019s that over there?",
    attribution: "Rhine Gorge \u00b7 Day 3 \u00b7 afternoon sailing",
    position: "left-[5%]",
  },
  {
    quote: "Are those vines? Whose are they? What do they make?",
    attribution: "Douro Valley \u00b7 morning transit",
    position: "left-[35%]",
  },
  {
    quote: "The guide finished an hour ago. We\u2019ve been sailing since.",
    attribution: "Norwegian coast \u00b7 Hurtigruten sailing",
    position: "right-[5%]",
  },
];

export default function TheMomentSection() {
  return (
    <section id={SECTION_IDS.moment} className="bg-[#FBFAF8]">

      {/* ── Single-column intro — white panel, centred, max-width 760px ── */}
      <div
        className="mx-auto px-8 md:px-16"
        style={{
          maxWidth: "760px",
          paddingTop: "clamp(64px, 9vw, 112px)",
          paddingBottom: "clamp(48px, 7vw, 80px)",
        }}
      >
        <ScrollReveal>
          <p
            className="text-[#1B3D2F] uppercase mb-6"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.08em",
            }}
          >
            The Silent Stretches
          </p>
          <h2
            className="text-[#1A1A2E]"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Every journey carries the same question.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-8">
          <p
            className="text-[#1A1A2E]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            You&apos;re on deck. Something catches your eye — a ruined tower on
            a hillside, a cluster of boats in a cove, a stretch of cliff face
            that seems to hold something. And the question forms, almost
            involuntarily.
          </p>
        </ScrollReveal>

        {/* "These are the silent stretches." — standalone typographic moment */}
        <ScrollReveal delay={140} className="mt-12">
          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(20px, 2.5vw, 24px)",
              lineHeight: 1.35,
              color: "#1B3D2F",
            }}
          >
            These are the silent stretches.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} className="mt-8">
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(26,26,46,0.75)",
            }}
          >
            Travel operators cover the highlights well. They have guides,
            shore excursions, port talks, and onboard programming. But the
            journey between those highlights — the hours of sailing, the passing
            landscapes, the unnamed villages and unexplained cliff faces — is
            left to the guest to interpret alone.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={260} className="mt-6">
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(26,26,46,0.75)",
            }}
          >
            What no one has designed for is everything between. The unnamed
            stretches. The passing villages. The cliff face that no one
            explains. Guests look up. Guests wonder. And then the moment passes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={320} className="mt-6">
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(26,26,46,0.75)",
            }}
          >
            Guests are still curious during these stretches — they are watching,
            noticing, and reaching for context that is not there. The question
            forms. The moment passes. The question is never answered.
          </p>
        </ScrollReveal>
      </div>

      {/* ── Verbatim callouts over landscape image ─────────────────── */}
      <ScrollReveal className="relative w-full overflow-hidden h-[60vh] min-h-[400px]">
        <Image
          src="/images/screen2-deck-river.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.22)" }}
          aria-hidden="true"
        />

        {/* Floating callout boxes — hidden below md to avoid overlap */}
        <div className="hidden md:block">
          {VERBATIMS.map((v) => (
            <div
              key={v.quote}
              className={`absolute top-[20%] ${v.position} flex flex-col items-center`}
              style={{ maxWidth: "260px" }}
            >
              <div
                style={{
                  backgroundColor: "#F5F3EF",
                  border: "0.5px solid rgba(196,154,92,0.5)",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  fontFamily: "var(--font-playfair), serif",
                  fontStyle: "italic",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  color: "#1A1A2E",
                }}
              >
                &ldquo;{v.quote}&rdquo;
              </div>
              {/* Anchor line + dot */}
              <div
                style={{
                  width: "1px",
                  height: "18px",
                  backgroundColor: "#C49A5C",
                  marginTop: "4px",
                }}
              />
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "#C49A5C",
                }}
              />
              <p
                className="mt-1.5 text-center"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                {v.attribution}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: single centred callout */}
        <div className="md:hidden absolute inset-0 flex items-center justify-center px-6">
          <div
            style={{
              backgroundColor: "#F5F3EF",
              border: "0.5px solid rgba(196,154,92,0.5)",
              borderRadius: "8px",
              padding: "14px 16px",
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              fontSize: "15px",
              lineHeight: 1.5,
              color: "#1A1A2E",
              maxWidth: "280px",
            }}
          >
            &ldquo;{VERBATIMS[0].quote}&rdquo;
          </div>
        </div>
      </ScrollReveal>

      {/* ── Wallpaper split ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

        {/* Left — desaturated / without context */}
        <div className="relative overflow-hidden" style={{ minHeight: "340px" }}>
          <Image
            src="/images/screen2-deck-river.jpg"
            alt="River landscape without interpretive context — scenery as background"
            fill
            className="object-cover"
            style={{ filter: "saturate(0.3) brightness(0.9)" }}
          />
          <div className="absolute inset-0 flex flex-col justify-end pb-6 px-6">
            <p
              className="text-center"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Without context, scenery becomes wallpaper.
            </p>
          </div>
        </div>

        {/* Right — full colour with POI card */}
        <div className="relative overflow-hidden" style={{ minHeight: "340px" }}>
          <Image
            src="/images/screen2-deck-river.jpg"
            alt="The same river landscape — now with named context and a story"
            fill
            className="object-cover"
          />
          {/* POI card */}
          <div
            className="absolute top-6 right-6"
            style={{
              background: "rgba(27,61,47,0.92)",
              border: "0.5px solid #C49A5C",
              borderRadius: "8px",
              padding: "12px 14px",
              maxWidth: "180px",
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
              History
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
                fontSize: "14px",
                lineHeight: 1.4,
                color: "#FBFAF8",
              }}
            >
              Burg Sooneck · c.&nbsp;1170
            </p>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end pb-6 px-6">
            <p
              className="text-center"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              The same stretch. Now it has a story.
            </p>
          </div>
        </div>
      </div>

      {/* ── Research Findings Block — atmospheric image bg ─────────── */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#1B3D2F" }}>
        {/* Background: coastal/expedition landscape at low opacity */}
        <Image
          src="/images/screen4-fjord-cliffs.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
          style={{ opacity: 0.18, zIndex: 0 }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(27,61,47,0.82)", zIndex: 1 }} aria-hidden="true" />

        <div
          className="relative"
          style={{
            zIndex: 2,
            padding: "clamp(64px, 9vw, 112px) clamp(24px, 6vw, 96px)",
          }}
        >
          {/* Overline */}
          <ScrollReveal>
            <p
              className="uppercase mb-5"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "#C49A5C",
              }}
            >
              From the research
            </p>

            {/* Editorial intro — explains the gap */}
            <h3
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 500,
                fontSize: "clamp(24px, 3vw, 34px)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "#F5F3EF",
                maxWidth: "20ch",
              }}
            >
              The gap is not subtle. It is structural.
            </h3>
            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "17px",
                lineHeight: 1.72,
                color: "rgba(245,243,239,0.75)",
                maxWidth: "58ch",
              }}
            >
              Across thousands of reviews of river, coastal, and expedition
              cruises, a consistent pattern emerges. Guests are not passive.
              They are watching, noticing, and asking questions throughout the
              journey. The gap is not in the highlights — those are handled
              well. The gap is in everything between them: the hours of sailing,
              the unnamed landscapes, the passing villages no one explains. This
              is where the product lives.
            </p>
          </ScrollReveal>

          {/* Bronze divider */}
          <div className="mt-14 mb-14" style={{ width: "48px", height: "1px", backgroundColor: "#C49A5C" }} aria-hidden="true" />

          {/* Three findings — two-column rows: stat + verbatim */}
          <div className="flex flex-col" style={{ gap: "56px", maxWidth: "900px" }}>

            {/* Finding 1 */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(245,243,239,0.4)",
                      marginBottom: "10px",
                    }}
                  >
                    Finding 01
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontStyle: "italic",
                      fontWeight: 500,
                      fontSize: "clamp(18px, 2vw, 22px)",
                      lineHeight: 1.35,
                      color: "#F5F3EF",
                      marginBottom: "12px",
                    }}
                  >
                    60&ndash;80% of the journey unfolds without guided context.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "rgba(245,243,239,0.6)",
                    }}
                  >
                    Most commentary is triggered at major landmarks. The quiet time between castles, villages, and scenic points often passes in silence.
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#FBFAF8",
                    borderRadius: "8px",
                    padding: "20px 22px",
                    borderLeft: "3px solid #C49A5C",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontStyle: "italic",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "#1A1A2E",
                    }}
                  >
                    &ldquo;The journey was fine… but was expecting a narrated tour, but that did not occur.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Horizontal rule */}
            <div style={{ height: "0.5px", backgroundColor: "rgba(245,243,239,0.12)" }} aria-hidden="true" />

            {/* Finding 2 */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(245,243,239,0.4)",
                      marginBottom: "10px",
                    }}
                  >
                    Finding 02
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontStyle: "italic",
                      fontWeight: 500,
                      fontSize: "clamp(18px, 2vw, 22px)",
                      lineHeight: 1.35,
                      color: "#F5F3EF",
                      marginBottom: "12px",
                    }}
                  >
                    Curiosity is constant. Answers are often missing.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "rgba(245,243,239,0.6)",
                    }}
                  >
                    Guests try to identify what they see in real time — Googling from the deck, taking repeated photos, asking each other what they just passed.
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#FBFAF8",
                    borderRadius: "8px",
                    padding: "20px 22px",
                    borderLeft: "3px solid #C49A5C",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontStyle: "italic",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "#1A1A2E",
                    }}
                  >
                    &ldquo;Staff didn&apos;t know the landmarks… asked about the mountain… they didn&apos;t know.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Horizontal rule */}
            <div style={{ height: "0.5px", backgroundColor: "rgba(245,243,239,0.12)" }} aria-hidden="true" />

            {/* Finding 3 */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(245,243,239,0.4)",
                      marginBottom: "10px",
                    }}
                  >
                    Finding 03
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontStyle: "italic",
                      fontWeight: 500,
                      fontSize: "clamp(18px, 2vw, 22px)",
                      lineHeight: 1.35,
                      color: "#F5F3EF",
                      marginBottom: "12px",
                    }}
                  >
                    The journey itself often has no narrator.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "rgba(245,243,239,0.6)",
                    }}
                  >
                    Guides cover landmarks. Excursions cover destinations. Port talks cover what comes next. But the journey in between is often left unexplained.
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#FBFAF8",
                    borderRadius: "8px",
                    padding: "20px 22px",
                    borderLeft: "3px solid #C49A5C",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontStyle: "italic",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "#1A1A2E",
                    }}
                  >
                    &ldquo;The scenery was extraordinary, but too often the journey passed without explanation, leaving us to wonder what we were seeing.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Source attribution */}
          <p
            className="mt-16"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              lineHeight: 1.6,
              color: "rgba(245,243,239,0.28)",
            }}
          >
            Research drawn from Cruise Critic, TripAdvisor, River Cruise Advisor, Rick Steves Travel Forum, Viator, and independent travel blogs.
          </p>
        </div>
      </div>

      {/* ── Closing typographic line ────────────────────────────────── */}
      <ScrollReveal>
        <div className="bg-[#FBFAF8] px-6 py-16 text-center">
          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(20px, 3vw, 28px)",
              lineHeight: 1.4,
              color: "#1B3D2F",
            }}
          >
            &ldquo;Extraordinary landscapes, quietly unexplained.&rdquo;
          </p>
        </div>
      </ScrollReveal>

      {/* ── Positioning line ────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="bg-[#FBFAF8] px-8 pb-20 md:px-16">
          <blockquote
            style={{
              borderLeft: "2px solid #C49A5C",
              paddingLeft: "16px",
              maxWidth: "560px",
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
              Guides bring the highlights to life. The Host Atlas curates the silent stretches.
            </p>
          </blockquote>
        </div>
      </ScrollReveal>

    </section>
  );
}
