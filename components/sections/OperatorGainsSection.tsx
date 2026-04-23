import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const OUTCOME_CARDS = [
  { title: "Stronger guest engagement", body: "Silent stretches become memorable — guests who engage with the landscape stay engaged with the journey." },
  { title: "Post-trip relevance", body: "A guest who understands what they passed through has more to carry home. The trip lives longer." },
  { title: "A distinctive experience", body: "No other operator on your route offers this layer. That\u2019s not a small distinction in a competitive market." },
  { title: "Scalable across routes", body: "Once the editorial framework is in place, new routes and regions are faster to build. The system compounds." },
  { title: "Real guest insight", body: "Aggregate engagement data shows you what the route is doing — which stories land, which stretches need attention." },
  { title: "Content that compounds", body: "Each seasonal layer, each new lens, adds depth without replacing what came before. The platform grows with you." },
];

export default function OperatorGainsSection() {
  return (
    <section
      id={SECTION_IDS.gains}
      className="py-24 px-6 md:py-32"
      style={{ backgroundColor: "#FBFAF8" }}
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
              color: "#1B3D2F",
            }}
          >
            What Operators Gain
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "#1A1A2E",
            }}
          >
            Turning scenic transit into a branded, measurable asset.
          </h2>
        </ScrollReveal>

        {/* ── Outcome cards — 2-col ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {OUTCOME_CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 60}>
              <div style={{ borderLeft: "2px solid #1B3D2F", paddingLeft: "16px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "#1A1A2E",
                  }}
                >
                  {card.title}
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "rgba(26,26,46,0.62)",
                    maxWidth: "38ch",
                  }}
                >
                  {card.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Closing pull-quote ────────────────────────────────── */}
        <ScrollReveal delay={160} className="mt-16 text-center">
          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 500,
              fontSize: "clamp(18px, 2vw, 22px)",
              lineHeight: 1.35,
              letterSpacing: "-0.005em",
              color: "#1B3D2F",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            The Host Atlas transforms the journey between the highlights into
            something defined, measurable, and lasting.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
