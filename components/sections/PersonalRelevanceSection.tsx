import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES, SECTION_IDS } from "@/lib/constants";

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
    <section id={SECTION_IDS.personal} className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1100px] mx-auto">
        {/* Image — left column */}
        <div className="relative min-h-[400px] lg:min-h-[700px]">
          <img
            src={IMAGES.personal}
            alt="Guests on deck looking out at a coastal landscape, each absorbed in their own perspective"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content — right column */}
        <div className="px-8 py-16 md:px-16 md:py-24">
          <ScrollReveal>
            <p className="font-body font-medium text-[10px] uppercase tracking-[0.09em] text-deep-green mb-6">
              For each guest
            </p>
            <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-foreground">
              Not every guest is curious about the same thing.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80} className="mt-8 space-y-5">
            <p className="font-body text-base text-foreground max-w-prose">
              Two guests stand at the same railing, looking at the same stretch
              of valley. One notices the rows of vines on the slope — who
              planted them, what variety, whose label ends up on the bottle. The
              other notices the earthworks on the hillside above — the outline of
              something older, something that predates the vineyard by eight
              centuries.
            </p>
            <p className="font-body text-base text-foreground max-w-prose">
              A guide with a microphone can tell one story to the group. The
              Host Atlas can tell both stories simultaneously — to different
              guests, in different languages, at different depths.
            </p>
          </ScrollReveal>

          {/* Guest example cards — 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {GUEST_CARDS.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 80}>
                <div className="bg-[#F5F3EF] rounded-md p-3.5">
                  <p className="font-body font-medium text-[12.5px] text-foreground">
                    {card.title}
                  </p>
                  <p className="font-body text-[12.5px] text-muted-foreground mt-1.5 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Individual curation statement */}
          <ScrollReveal delay={320} className="mt-10">
            <blockquote
              className="border-l-2 pl-4"
              style={{ borderColor: "#C49A5C" }}
            >
              <p className="font-display italic text-base text-deep-green">
                The same silent stretch can hold many different stories. The Host
                Atlas curates the right one for each guest — in their language,
                at their pace, around their own curiosity.
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={400} className="mt-8">
            <p className="font-body text-base text-muted-foreground max-w-prose">
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
