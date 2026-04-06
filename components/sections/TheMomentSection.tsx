import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES, SECTION_IDS } from "@/lib/constants";

const VERBATIMS_EYES = [
  "What\u2019s that over there?",
  "Can you see that? What is it?",
  "Look at that \u2014 does anyone know what we\u2019re passing?",
];

const VERBATIMS_MIND = [
  "I wonder what this valley looked like during the war.",
  "Are those vines? Whose are they? What do they make?",
  "There must be a story behind that village \u2014 it looks ancient.",
  "The guide finished talking an hour ago. We\u2019ve been sailing since.",
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
              Every guest asks it. In different ways.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80} className="mt-8">
            <p className="font-body font-medium text-[11px] uppercase tracking-[0.08em] text-muted-foreground mb-3">
              What the eye sees
            </p>
            <div className="space-y-3">
              {VERBATIMS_EYES.map((q) => (
                <p
                  key={q}
                  className="border-l-2 border-border pl-4 font-body italic text-base text-muted-foreground"
                >
                  &ldquo;{q}&rdquo;
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160} className="mt-8">
            <p className="font-body text-base text-foreground max-w-prose">
              And sometimes the question goes further than what the eye can see.
              The landscape holds more than its surface — events, geology,
              conflict, and local life that aren&apos;t visible unless someone
              names them.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240} className="mt-8">
            <p className="font-body font-medium text-[11px] uppercase tracking-[0.08em] text-muted-foreground mb-3">
              What the mind reaches for
            </p>
            <div className="space-y-3">
              {VERBATIMS_MIND.map((q) => (
                <p
                  key={q}
                  className="border-l-2 border-accent pl-4 font-body italic text-base text-muted-foreground"
                >
                  &ldquo;{q}&rdquo;
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320} className="mt-10">
            <p className="font-display italic text-xl text-deep-green">
              We call these the silent stretches.
            </p>
            <p className="font-body text-base text-muted-foreground max-w-[480px] mt-4">
              The hours between the highlights — when guests are watching,
              curious, and there is nothing there to meet them. Not because the
              landscape is empty. Because no one has mapped what it holds.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
