import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const STEPS = [
  {
    label: "Scan",
    sub: "A QR code in their cabin or welcome message.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="3" height="3" fill="currentColor" />
        <rect x="18" y="14" width="3" height="3" fill="currentColor" />
        <rect x="14" y="18" width="3" height="3" fill="currentColor" />
        <rect x="18" y="18" width="3" height="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Explore",
    sub: "Stories and context appear as points of interest come into range.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Pocket the phone",
    sub: "Audio plays in the background. Eyes back on the landscape.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const VERBATIMS = [
  "That ruin on the hillside — a 12th century watchtower. The story was extraordinary.",
  "I spent two hours on deck just reading about what we were passing. Couldn\u2019t put it down.",
  "My wife and I kept pointing things out to each other. Best afternoon of the whole trip.",
];

export default function TheExperienceSection() {
  return (
    <section id={SECTION_IDS.experience}>
      {/* Top — white */}
      <div className="bg-background py-24 px-6">
        <div className="max-w-[860px] mx-auto">
          <ScrollReveal>
            <p className="font-body font-medium text-xs uppercase tracking-[0.08em] text-deep-green mb-6">
              The Experience
            </p>
            <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-foreground">
              What if that moment on deck had an answer?
            </h2>
            <p className="font-body text-lg text-foreground max-w-[600px] mt-6">
              HostAtlas is a location-aware story layer — available on the
              guest&apos;s own device, triggered by where the vessel is,
              designed around one principle: the world comes first. The screen
              is only there when the guest reaches for it.
            </p>
          </ScrollReveal>

          {/* Film placeholder */}
          <ScrollReveal delay={80} className="mt-10">
            <div className="aspect-video w-full rounded-lg bg-foreground border border-border flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 5.14v14l11-7-11-7z" fill="white" fillOpacity="0.8" />
                </svg>
              </div>
              <p className="font-body text-sm text-white/60">
                Film coming soon — &ldquo;This is what a guest sees&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom — warm stone */}
      <div className="bg-card py-24 px-6">
        <div className="max-w-[860px] mx-auto">
          <ScrollReveal>
            <h3 className="font-display text-[24px] md:text-[28px] leading-tight text-foreground text-center">
              No download. No account. No setup.
            </h3>
            <p className="font-body text-lg text-foreground max-w-[600px] mx-auto mt-6 text-center">
              Guests scan a QR code — in their cabin, on a welcome card, or in a
              message from the operator — and HostAtlas opens directly in their
              phone&apos;s browser.
            </p>
          </ScrollReveal>

          {/* Three steps */}
          <div className="flex flex-col sm:flex-row gap-12 justify-center mt-10">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 80} className="flex flex-col items-center text-center max-w-[200px] mx-auto sm:mx-0">
                <div className="text-deep-green mb-3">{step.icon}</div>
                <p className="font-display text-base text-foreground">{step.label}</p>
                <p className="font-body text-sm text-muted-foreground mt-2">{step.sub}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={240} className="mt-8 text-center">
            <p className="font-body text-sm text-muted-foreground max-w-[480px] mx-auto">
              Content saves to the device before departure — poor signal in a
              fjord or remote valley is never an issue.
            </p>
          </ScrollReveal>

          {/* Verbatim cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {VERBATIMS.map((quote, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-background border border-border rounded-lg p-6 border-l-[3px] border-l-deep-green">
                  <p className="font-body italic text-base text-foreground">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Phone mockup */}
          <ScrollReveal delay={240} className="mt-12 flex flex-col items-center">
            <div className="w-full max-w-[320px] rounded-3xl border-[8px] border-foreground bg-deep-green overflow-hidden relative min-h-[500px]">
              {/* Simplified map */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* River line */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-accent/20 -translate-y-4 rotate-6" />
                {/* POI dots */}
                <div className="absolute top-[35%] left-[28%] w-3 h-3 rounded-full bg-accent" />
                <div className="absolute top-[50%] left-[55%] w-3 h-3 rounded-full bg-accent" />
                <div className="absolute top-[65%] left-[38%] w-3 h-3 rounded-full bg-accent" />
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground mt-4 text-center">
              Interactive demo loading — the Rhine gorge, 3 points of interest
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
