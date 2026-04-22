import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const CARDS = [
  {
    label: "ROUTE SIGNAL \u00b7 RHINE \u00b7 KM 512",
    finding: "12 guests reached for context here on the last three sailings. No story exists yet.",
    recommendation: "Feature drawing attention: remains of a medieval toll station, currently unnamed in the route. Recommended: one story, history lens, 3-minute audio — before the next sailing.",
  },
  {
    label: "THEME RESONANCE \u00b7 DOURO \u00b7 THIS SEASON",
    finding: "Geology stories outperformed history stories by 2.3\u00d7 dwell time.",
    recommendation: "Guests staying significantly longer with schist terracing content than village histories. Recommended: expand geology lens on the upper Douro corridor before spring sailings.",
  },
  {
    label: "SEASONAL DRIFT \u00b7 MOSELLE \u00b7 OCTOBER",
    finding: "October guests show 40% lower engagement with harvest content than September guests.",
    recommendation: "They already know the harvest. They want the post-harvest story — what happens to the wine, where it goes. Recommended: a late-season layer before October sailings resume.",
  },
];

export default function InsightSection() {
  return (
    <section id={SECTION_IDS.insight} className="py-24 px-6" style={{ backgroundColor: "#1B3D2F" }}>
      <div className="max-w-[860px] mx-auto">
        <ScrollReveal>
          <p className="font-body font-medium text-xs uppercase tracking-[0.08em] text-accent mb-6">
            The Insight Layer
          </p>
          <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-white">
            Curiosity leaves a trace.
          </h2>
          <p className="font-body text-lg text-white/85 max-w-[640px] mt-6">
            When a guest reaches for their device on a stretch of river that had
            no content, that moment tells you something. Not what they found —
            what caught their attention when nothing was there to meet it.
          </p>
          <p className="font-body text-lg text-white/85 max-w-[640px] mt-4">
            If guests on successive sailings all look for context at the same
            bend in the river, that&apos;s not coincidence. Something is holding
            attention that the route hasn&apos;t named yet.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 80}>
              <article
                className="rounded-lg p-[16px_18px] h-full flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "0.5px solid rgba(196,154,92,0.25)",
                }}
              >
                <p className="font-body font-medium text-[10px] uppercase tracking-widest text-accent">
                  {card.label}
                </p>
                <p className="font-display italic text-[14px] text-white/90 leading-snug">
                  &ldquo;{card.finding}&rdquo;
                </p>
                <p className="font-body text-[12px] text-white/65 leading-relaxed">
                  {card.recommendation}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={240} className="mt-12 text-center">
          <blockquote>
            <p className="font-display italic text-[22px] text-accent max-w-[500px] mx-auto">
              &ldquo;When there&apos;s nothing there yet — that&apos;s the most
              interesting signal of all.&rdquo;
            </p>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
