import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const CARDS = [
  {
    title: "Engagement depth",
    body: "Which stories genuinely hold attention — not just what was tapped, but how long guests stayed and how deep they went.",
  },
  {
    title: "Theme resonance",
    body: "Which lenses — history, geology, local life — draw guests further. Patterns across sailings inform how routes develop and how itineraries are framed.",
  },
  {
    title: "Where nothing was there yet",
    body: "When guests reach for context and find nothing, that moment is logged. Over time, operators see exactly which stretches are holding attention that isn't yet served.",
  },
];

export default function InsightSection() {
  return (
    <section id={SECTION_IDS.insight} className="bg-card py-24 px-6">
      <div className="max-w-[860px] mx-auto">
        <ScrollReveal>
          <p className="font-body font-medium text-xs uppercase tracking-[0.08em] text-deep-green mb-6">
            The Insight Layer
          </p>
          <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-foreground">
            Curiosity becomes signal.
          </h2>
          <p className="font-body text-lg text-foreground max-w-[640px] mt-6">
            When a guest reaches for their device on a stretch of river that had
            no content, that moment tells you something. Not what they found —
            what caught their attention when nothing was there to meet it.
          </p>
          <p className="font-body text-lg text-foreground max-w-[640px] mt-4">
            If guests on successive sailings all look for context at the same
            bend in the river, that&apos;s not coincidence. Something is holding
            attention that the route hasn&apos;t named yet.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 80}>
              <article className="bg-background border border-border rounded-lg p-6 h-full">
                <h3 className="font-body font-medium text-base text-foreground">
                  {card.title}
                </h3>
                <p className="font-body text-[15px] text-muted-foreground mt-3 max-w-prose">
                  {card.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={240} className="mt-12 text-center">
          <blockquote>
            <p className="font-display italic text-[22px] text-deep-green max-w-[500px] mx-auto">
              &ldquo;When there&apos;s nothing there yet — that&apos;s the most
              interesting signal of all.&rdquo;
            </p>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
