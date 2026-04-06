import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

export default function TheGapSection() {
  return (
    <section id={SECTION_IDS.gap} className="bg-background py-24 md:py-32 px-6">
      <div className="max-w-[680px] mx-auto">
        <ScrollReveal>
          <p className="font-body font-medium text-xs uppercase tracking-[0.08em] text-deep-green mb-6">
            The Gap
          </p>
          <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-foreground">
            The highlights are covered.
            <br />
            The hours between them aren&apos;t.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-8 space-y-6">
          <p className="font-body text-lg text-foreground max-w-prose">
            Every cruise has guides, narration, and speakers for the moments
            that matter most — the famous landmarks, the signature ports, the
            views people came to see. That part is well handled. Staff are
            attentive. Guides are knowledgeable. They cover what can be
            anticipated and shared with a group.
          </p>
          <p className="font-body text-lg text-foreground max-w-prose">
            What no one has designed for is everything between. The long transit
            between cities. The coast sliding by at dusk. The river valley that
            holds five centuries of history with not a word of explanation. No
            guide can be everywhere at once — and not every feature the
            landscape offers has someone assigned to name it.
          </p>
          <p className="font-body text-lg text-foreground max-w-prose">
            These are the stretches where guest attention is genuinely high, and
            context is absent. More scenery, without meaning, eventually fades.
            And in that silence, curiosity passes — or turns into the quiet
            frustration of a question left unanswered.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160} className="mt-10">
          <blockquote className="border-l-[3px] border-deep-green pl-5">
            <p className="font-display italic text-xl text-foreground max-w-prose">
              &ldquo;We were sailing through beautiful countryside for hours. I
              kept wondering what I was looking at. There was really no one to
              ask.&rdquo;
            </p>
            <footer className="mt-3">
              <cite className="font-body not-italic text-sm text-muted-foreground">
                — Guest review, European river cruise
              </cite>
            </footer>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
