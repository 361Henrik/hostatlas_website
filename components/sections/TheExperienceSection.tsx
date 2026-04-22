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

const POI_CARDS = [
  {
    category: "History",
    title: "Medieval fortification · c.\u00a01280",
    sub: "340m ahead",
  },
  {
    category: "Local producers",
    title: "Weingut Becker estate · Riesling",
    sub: "Since 1847",
  },
  {
    category: "Geology",
    title: "Devonian slate formation",
    sub: "380 million years old",
  },
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
              What if the answer were already there?
            </h2>
            <p className="font-body text-lg text-foreground max-w-[600px] mt-6">
              The Host Atlas introduces a layer of context — shaped by place,
              and revealed only when the guest reaches for it. There is no app
              to download. No account to create. No announcement to listen out
              for.
            </p>
          </ScrollReveal>

          {/* AR phone mockup — landscape orientation */}
          <ScrollReveal delay={80} className="mt-10">
            <div
              className="w-full rounded-xl overflow-hidden relative bg-deep-green"
              style={{ aspectRatio: "16/9" }}
            >
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-black/30">
                <span className="font-body text-[11px] text-white/90 font-medium">
                  The Host Atlas · Live · Rhine Valley
                </span>
                <span className="font-body text-[11px] text-white/60">●</span>
              </div>

              {/* Simulated landscape interior */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-accent/10 -translate-y-4 rotate-3" />
              </div>

              {/* POI cards floating */}
              <div className="absolute top-10 left-0 right-0 flex items-start justify-around px-6 pt-6 gap-4">
                {POI_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="flex flex-col items-center"
                    style={{ maxWidth: "180px" }}
                  >
                    <div
                      className="rounded-lg px-3 py-2.5 w-full"
                      style={{
                        background: "rgba(27,61,47,0.92)",
                        border: "0.5px solid #C49A5C",
                      }}
                    >
                      <p className="font-body font-medium text-[9px] uppercase tracking-widest text-accent">
                        {card.category}
                      </p>
                      <p className="font-display italic text-[11px] text-white mt-0.5 leading-tight">
                        {card.title}
                      </p>
                      <p className="font-body text-[9px] text-white/60 mt-0.5">
                        {card.sub}
                      </p>
                    </div>
                    <div className="w-px bg-accent mt-1" style={{ height: "14px" }} />
                    <div className="w-[4px] h-[4px] rounded-full bg-accent" />
                  </div>
                ))}
              </div>

              {/* Mini-map */}
              <div
                className="absolute bottom-4 left-4 rounded-lg px-3 py-2"
                style={{
                  background: "rgba(27,61,47,0.92)",
                  border: "0.5px solid rgba(196,154,92,0.4)",
                  minWidth: "120px",
                }}
              >
                <p className="font-body text-[9px] text-accent/80 uppercase tracking-widest">
                  Rhine Gorge
                </p>
                <p className="font-body text-[10px] text-white/70 mt-0.5">
                  3 nearby stories
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground mt-4 text-center">
              What the guest sees — points of interest surfaced in real time, as the vessel moves through the route.
            </p>
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
              message from the operator — and The Host Atlas opens directly in
              their phone&apos;s browser.
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
            <p className="font-body text-sm text-muted-foreground max-w-[540px] mx-auto">
              It is personal and quiet: the guest chooses when to look, and what
              to explore. Nothing is broadcast. Nothing interrupts. The landscape
              stays primary. Content saves to the device before departure — poor
              signal in a fjord or remote valley is never an issue.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
