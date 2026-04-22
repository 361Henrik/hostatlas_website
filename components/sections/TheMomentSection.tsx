import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES, SECTION_IDS } from "@/lib/constants";

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
    <section id={SECTION_IDS.moment} className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[400px] lg:min-h-[700px]">
          <img
            src={IMAGES.moment}
            alt="Guest looking out at a river landscape from a cruise vessel"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-8 py-16 md:px-16 md:py-24 max-w-[600px]">
          <ScrollReveal>
            <p className="font-body font-medium text-xs uppercase tracking-[0.08em] text-deep-green mb-6">
              The Silent Stretches
            </p>
            <h2 className="font-display text-[28px] md:text-[36px] leading-tight text-foreground">
              Every journey carries the same question.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80} className="mt-8">
            <p className="font-body text-base text-foreground max-w-prose">
              You&apos;re on deck. Something catches your eye — a ruined tower
              on a hillside, a cluster of boats in a cove, a stretch of cliff
              face that seems to hold something. And the question forms, almost
              involuntarily.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160} className="mt-10">
            <p className="font-display italic text-xl text-deep-green">
              These are the silent stretches.
            </p>
            <p className="font-body text-base text-muted-foreground max-w-[480px] mt-4">
              The hours between the highlights — when guests are watching,
              curious, and there is nothing there to meet them. Not because the
              landscape is empty — because what it holds is rarely named.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240} className="mt-6">
            <p className="font-body text-base text-muted-foreground max-w-[480px]">
              When information does exist, it often arrives too late. By the
              time an announcement is made, the moment has passed — the castle
              has slipped behind the bend.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={320} className="mt-10">
            <blockquote className="border-l-2 border-accent pl-4">
              <p className="font-display italic text-base text-deep-green">
                Guides bring the highlights to life. The Host Atlas curates the
                silent stretches.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>

      {/* Verbatim callout section — full width */}
      <ScrollReveal className="relative w-full overflow-hidden h-[60vh] min-h-[400px]">
        <img
          src={IMAGES.moment}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        {/* Floating callout boxes */}
        {VERBATIMS.map((v) => (
          <div
            key={v.quote}
            className={`absolute top-[20%] ${v.position} flex flex-col items-center`}
            style={{ maxWidth: "260px" }}
          >
            <div
              className="bg-[#F5F3EF] rounded-lg px-4 py-3.5 font-display italic text-[15px] text-foreground"
              style={{ border: "0.5px solid rgba(196,154,92,0.5)" }}
            >
              &ldquo;{v.quote}&rdquo;
            </div>
            {/* Anchor line */}
            <div className="w-px bg-accent mt-1" style={{ height: "18px" }} />
            <div className="w-[5px] h-[5px] rounded-full bg-accent" />
            <p className="font-body text-[11px] text-white/80 mt-1.5 text-center">
              {v.attribution}
            </p>
          </div>
        ))}
      </ScrollReveal>

      {/* Wallpaper split */}
      <div className="grid grid-cols-2 gap-0">
        {/* Left — desaturated */}
        <div className="relative overflow-hidden" style={{ minHeight: "340px" }}>
          <img
            src={IMAGES.moment}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "saturate(0.35)" }}
          />
          <p className="absolute bottom-4 left-0 right-0 text-center font-body text-xs text-white/70 px-4">
            &ldquo;Without context, scenery becomes wallpaper.&rdquo;
          </p>
        </div>

        {/* Right — full colour with POI card */}
        <div className="relative overflow-hidden" style={{ minHeight: "340px" }}>
          <img
            src={IMAGES.moment}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* POI card */}
          <div
            className="absolute top-6 right-6 rounded-lg px-4 py-3"
            style={{
              background: "rgba(27,61,47,0.92)",
              border: "0.5px solid #C49A5C",
              maxWidth: "180px",
            }}
          >
            <p className="font-body font-medium text-[10px] uppercase tracking-widest text-accent">
              History
            </p>
            <p className="font-display italic text-sm text-white mt-1">
              Burg Sooneck · c.&nbsp;1170
            </p>
          </div>
          <p className="absolute bottom-4 left-0 right-0 text-center font-body text-xs text-white/70 px-4">
            &ldquo;The same stretch. Now it has a story.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
