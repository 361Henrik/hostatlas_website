import ScrollReveal from "@/components/ScrollReveal";

const FINDINGS = [
  {
    number: "01",
    statement: "60\u201380% of the journey unfolds without guided context.",
    verbatim:
      "\u201cWe sailed for hours through stunning scenery and had no idea what we were looking at. The guide had finished for the day.\u201d",
    attribution: "Rhine cruise guest",
  },
  {
    number: "02",
    statement: "Curiosity is constant. Answers are often missing.",
    verbatim:
      "\u201cI kept wanting to know more about what I was passing \u2014 the towns, the castles, the vineyards. I couldn\u2019t find much that was specific to where we were.\u201d",
    attribution: "Douro Valley guest",
  },
  {
    number: "03",
    statement: "The journey itself often has no narrator.",
    verbatim:
      "\u201cThe excursions were well explained. But the time on the ship, watching the landscape go by \u2014 we were on our own with that.\u201d",
    attribution: "Norwegian fjord expedition",
  },
];

export default function ResearchSection() {
  return (
    <section style={{ backgroundColor: "#FBFAF8" }}>
      <div className="max-w-[960px] mx-auto px-6 py-20 md:py-28">

        <ScrollReveal>
          <p
            className="uppercase mb-12"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "#1B3D2F",
            }}
          >
            From the Research
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {FINDINGS.map((f, i) => (
            <ScrollReveal key={f.number} delay={i * 80}>
              <div className="flex flex-col h-full">
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    color: "#C49A5C",
                    marginBottom: "12px",
                  }}
                >
                  {f.number}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontWeight: 500,
                    fontSize: "17px",
                    lineHeight: 1.4,
                    color: "#1A1A2E",
                    marginBottom: "16px",
                    flexGrow: 1,
                  }}
                >
                  {f.statement}
                </p>
                <div
                  style={{
                    borderLeft: "2px solid #C49A5C",
                    paddingLeft: "12px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "rgba(26,26,46,0.68)",
                      marginBottom: "6px",
                    }}
                  >
                    {f.verbatim}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "11px",
                      color: "rgba(26,26,46,0.4)",
                    }}
                  >
                    {f.attribution}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={240} className="mt-16">
          <div
            style={{
              borderTop: "1px solid rgba(26,26,46,0.1)",
              paddingTop: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(18px, 2vw, 22px)",
                lineHeight: 1.35,
                color: "#1B3D2F",
              }}
            >
              Extraordinary landscapes, quietly unexplained.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
