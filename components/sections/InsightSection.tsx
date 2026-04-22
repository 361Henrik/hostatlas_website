import Image from "next/image";
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
    <section
      id={SECTION_IDS.insight}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1B3D2F" }}
    >
      {/* ── Supporting image — subtle background texture ─────────── */}
      <Image
        src="/images/screen7-insight.png"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover"
        style={{ zIndex: 0, opacity: 0.12 }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(27,61,47,0.82)", zIndex: 1 }}
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div
        className="relative py-24 px-6 md:py-32"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "#C49A5C",
              }}
            >
              The Insight Layer
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 500,
                fontSize: "clamp(28px, 3.5vw, 40px)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "#F5F3EF",
              }}
            >
              Curiosity leaves a trace.
            </h2>
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: 1.72,
                color: "rgba(245,243,239,0.82)",
                maxWidth: "54ch",
              }}
            >
              When a guest reaches for their device on a stretch of river that had
              no content, that moment tells you something. Not what they found —
              what caught their attention when nothing was there to meet it.
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: 1.72,
                color: "rgba(245,243,239,0.82)",
                maxWidth: "54ch",
              }}
            >
              If guests on successive sailings all look for context at the same
              bend in the river, that&apos;s not coincidence. Something is holding
              attention that the route hasn&apos;t named yet.
            </p>
          </ScrollReveal>

          {/* ── Route signal cards ───────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {CARDS.map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 80}>
                <article
                  className="rounded-lg h-full flex flex-col gap-3"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: "0.5px solid rgba(196,154,92,0.25)",
                    padding: "16px 18px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C49A5C",
                    }}
                  >
                    {card.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontStyle: "italic",
                      fontSize: "14px",
                      lineHeight: 1.55,
                      color: "rgba(245,243,239,0.9)",
                    }}
                  >
                    &ldquo;{card.finding}&rdquo;
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "12px",
                      lineHeight: 1.65,
                      color: "rgba(245,243,239,0.62)",
                    }}
                  >
                    {card.recommendation}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* ── Closing quote ─────────────────────────────────────── */}
          <ScrollReveal delay={240} className="mt-12 text-center">
            <blockquote>
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(18px, 2vw, 22px)",
                  lineHeight: 1.45,
                  color: "#C49A5C",
                  maxWidth: "480px",
                  margin: "0 auto",
                }}
              >
                &ldquo;When there&apos;s nothing there yet — that&apos;s the most
                interesting signal of all.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
