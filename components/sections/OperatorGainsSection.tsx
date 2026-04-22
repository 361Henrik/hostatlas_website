import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const OUTCOME_CARDS = [
  { title: "Stronger guest engagement", body: "Silent stretches become memorable — guests who engage with the landscape stay engaged with the journey." },
  { title: "Post-trip relevance", body: "A guest who understands what they passed through has more to carry home. The trip lives longer." },
  { title: "A distinctive experience", body: "No other operator on your route offers this layer. That's not a small distinction in a competitive market." },
  { title: "Scalable across routes", body: "Once the editorial framework is in place, new routes and regions are faster to build. The system compounds." },
  { title: "Real guest insight", body: "Aggregate engagement data shows you what the route is doing — which stories land, which stretches need attention." },
  { title: "Content that compounds", body: "Each seasonal layer, each new lens, adds depth without replacing what came before. The platform grows with you." },
];

export default function OperatorGainsSection() {
  return (
    <section id={SECTION_IDS.gains} className="bg-background py-24 px-6">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal>
          <p className="font-body font-medium text-xs uppercase tracking-[0.08em] text-deep-green mb-6">
            What Operators Gain
          </p>
          <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-foreground">
            Turning scenic transit into a branded, measurable asset.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {OUTCOME_CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 80}>
              <div className="border-l-[3px] border-deep-green pl-4">
                <p className="font-body font-medium text-base text-foreground">
                  {card.title}
                </p>
                <p className="font-body text-base text-muted-foreground mt-2 max-w-prose">
                  {card.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-16" />

        {/* Local Commerce */}
        <ScrollReveal delay={80}>
          <div className="bg-card rounded-xl p-10">
            <p className="font-body font-medium text-xs uppercase tracking-widest text-accent">
              AN EXPANSION LAYER
            </p>
            <h3 className="font-display text-[24px] md:text-[28px] leading-tight text-foreground mt-4">
              The route as a living commercial journey.
            </h3>
            <p className="font-body text-lg text-foreground max-w-[600px] mt-6">
              When a guest understands the story of a vineyard they&apos;ve been
              sailing past for an hour — the family behind it, the history of
              the estate, the wine they make — the connection between that story
              and a purchase becomes natural and genuine.
            </p>
            <p className="font-body text-lg text-foreground max-w-[600px] mt-4">
              Context creates desire. The route becomes a discovery channel.
              Local producers become part of the journey rather than a stop on
              the way home.
            </p>
            <p className="font-body italic text-sm text-muted-foreground mt-6 max-w-prose">
              Available to operators who want it — present and ready for those
              exploring it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160} className="mt-16 text-center">
          <p className="font-display text-[20px] md:text-[22px] text-deep-green max-w-[700px] mx-auto">
            The Host Atlas transforms the journey between the highlights into
            something defined, measurable, and lasting.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
