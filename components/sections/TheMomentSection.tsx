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
                lineHeight: 1.7,
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
                lineHeight: 1.7,
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

    </section>
  );
}
