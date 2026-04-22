import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const GUEST_CARDS = [
  {
    title: "The history reader",
    body: "Following the conflict history of a valley they\u2019ve been sailing through for two hours. The earthworks, the fortifications, the siege that ended a dynasty.",
  },
  {
    title: "The wine curious",
    body: "Tracing the vineyard estates visible from the deck — the families behind them, the terroir, the harvests that mattered.",
  },
  {
    title: "The geology watcher",
    body: "Reading the rock faces for what they reveal: which era, which force, which event shaped the cliff the vessel is passing right now.",
  },
  {
    title: "The local life follower",
    body: "Noticing the villages, the fishing boats, the small industries along the bank — what people here have always made their lives from.",
  },
];

export default function PersonalRelevanceSection() {
  return (
    <section id={SECTION_IDS.personal} style={{ backgroundColor: "#FBFAF8" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1280px] mx-auto">

        {/* ── Image — left column ───────────────────────────────── */}
        <div className="relative min-h-[400px] lg:min-h-[700px]">
          <Image
            src="/images/screen5-deck-coastal.jpg"
            alt="Guests on deck looking out at a coastal landscape, each absorbed in their own perspective"
            fill
            className="object-cover"
          />
        </div>

        {/* ── Content — right column ────────────────────────────── */}
        <div className="px-8 py-20 md:px-16 md:py-28">

          <ScrollReveal>
            <p
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "0.09em",
                color: "#1B3D2F",
              }}
            >
              For each guest
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
              Not every guest is curious about the same thing.
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
              Two guests stand at the same railing, looking at the same stretch
              of valley. One notices the rows of vines on the slope — who
              planted them, what variety, whose label ends up on the bottle. The
              other notices the earthworks on the hillside above — the outline of
              something older, something that predates the vineyard by eight
              centuries.
            </p>
            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: 1.72,
                color: "#1A1A2E",
                maxWidth: "48ch",
              }}
            >
              A guide with a microphone can tell one story to the group. The
              Host Atlas can tell both stories simultaneously — to different
              guests, in different languages, at different depths.
            </p>
          </ScrollReveal>

          {/* ── Guest example cards — 2×2 grid ──────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {GUEST_CARDS.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 80}>
                <div
                  className="rounded-md"
                  style={{
                    backgroundColor: "#F5F3EF",
                    padding: "14px 16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      fontSize: "12.5px",
                      color: "#1A1A2E",
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="mt-1.5"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                      fontSize: "12.5px",
                      lineHeight: 1.6,
                      color: "rgba(26,26,46,0.62)",
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ── Individual curation blockquote ───────────────────── */}
          <ScrollReveal delay={320} className="mt-10">
            <blockquote style={{ borderLeft: "2px solid #C49A5C", paddingLeft: "16px" }}>
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "17px",
                  lineHeight: 1.55,
                  color: "#1B3D2F",
                }}
              >
                The same silent stretch can hold many different stories. The Host
                Atlas curates the right one for each guest — in their language,
                at their pace, around their own curiosity.
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={400} className="mt-8">
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.72,
                color: "rgba(26,26,46,0.6)",
                maxWidth: "48ch",
              }}
            >
              This is not something a guide — however knowledgeable, however
              skilled — can do for every guest simultaneously. It is not a
              criticism. It is simply the nature of the format: one voice, one
              story, one group. The Host Atlas works in the space that format
              cannot reach.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
