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
    <section id={SECTION_IDS.operator} className="bg-background py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content — left */}
          <div>
            <ScrollReveal>
              <p className="font-body font-medium text-xs uppercase tracking-[0.08em] text-deep-green mb-6">
                Your Platform
              </p>
              <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-foreground">
                One platform. Your narrative, entirely.
              </h2>
              <p className="font-body text-lg text-foreground max-w-prose mt-6">
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
                    <p className="font-body font-medium text-sm text-foreground">
                      {pillar.label}
                    </p>
                    <p className="font-body text-base text-muted-foreground mt-2 max-w-prose">
                      {pillar.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Seasonal block */}
            <ScrollReveal delay={320} className="mt-12">
              <div className="bg-deep-green rounded-xl p-10">
                <p className="font-body font-medium text-xs uppercase tracking-widest text-accent">
                  The Seasonal Layer
                </p>
                <h3 className="font-display text-2xl text-white mt-4">
                  The route repeats. The seasons don&apos;t.
                </h3>
                <p className="font-body text-base text-white/85 mt-4 max-w-prose">
                  A sailing on the Rhine in April moves through a different
                  landscape than the same route in October. The Host Atlas
                  content can be layered seasonally.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {SEASON_CARDS.map((card) => (
                    <div
                      key={card.title}
                      className="bg-white/[0.08] border border-accent/30 rounded-lg p-5"
                    >
                      <p className="font-body text-base text-white">
                        {card.title}
                      </p>
                      <p className="font-body font-medium text-xs uppercase tracking-widest text-accent mt-2">
                        {card.label}
                      </p>
                      <p className="font-body text-sm text-white/85 mt-3">
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-2 border-accent pl-5 mt-8">
                  <p className="font-display italic text-lg text-white/80">
                    Guides bring the highlights to life. The Host Atlas curates
                    the silent stretches.
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>

          {/* Mockup — right */}
          <ScrollReveal delay={160} className="flex flex-col items-center justify-start pt-8">
            <div className="w-full max-w-[300px] rounded-3xl border-[8px] border-foreground bg-deep-green overflow-hidden">
              {/* Operator top bar */}
              <div className="bg-deep-green px-4 py-5 flex items-center gap-3 border-b border-accent/20">
                <div className="w-8 h-8 rounded bg-accent/30 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-sm bg-accent/60" />
                </div>
                <div>
                  <div className="h-2 w-20 bg-white/30 rounded" />
                  <div className="h-1.5 w-12 bg-white/15 rounded mt-1.5" />
                </div>
              </div>
              <div className="p-4 space-y-3">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="bg-white/[0.08] rounded-lg p-3 flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/30 flex-shrink-0" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2 w-3/4 bg-white/25 rounded" />
                      <div className="h-1.5 w-1/2 bg-white/15 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground mt-4 text-center max-w-[240px]">
              The guest experience carries your identity
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
