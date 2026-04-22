import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

const LENS_CARDS = [
  {
    label: "History & Stories",
    body: "The events, conflicts, and human narratives written into the landscape over centuries.",
  },
  {
    label: "Geology & Nature",
    body: "The forces that shaped the cliffs, valleys, and waterways guests are moving through.",
  },
  {
    label: "Culture & Local Life",
    body: "The villages, traditions, and ways of living along the route — past and present.",
  },
  {
    label: "Local Producers & Makers",
    body: "The vineyards, workshops, and artisans whose story begins where the guest is standing.",
  },
];

export default function UnreadLandscapeSection() {
  return (
    <section
      id={SECTION_IDS.landscape}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1B3D2F" }}
    >
      {/* ── Background image ─────────────────────────────────────── */}
      <Image
        src="/images/screen4-background.jpg"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover"
        style={{ zIndex: 0 }}
      />

      {/* ── Green overlay rgba(27,61,47,0.87) — design system §6 ── */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(27,61,47,0.87)", zIndex: 1 }}
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div
        className="relative max-w-[900px] mx-auto px-6 py-24 md:py-32"
        style={{ zIndex: 2 }}
      >
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
            The Transformation
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "#F5F3EF",
              maxWidth: "700px",
            }}
          >
            What passes by is rarely explained.
          </h2>
          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: 1.72,
              color: "rgba(245,243,239,0.85)",
              maxWidth: "54ch",
            }}
          >
            A hill is just a hill until it has a story. A bridge is just a
            bridge. A ruin on a slope is just a ruin. Without interpretation,
            the guest&apos;s eye moves across the landscape without landing
            anywhere. The scenery accumulates — and eventually becomes
            background.
          </p>
          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: 1.72,
              color: "rgba(245,243,239,0.85)",
              maxWidth: "54ch",
            }}
          >
            The Host Atlas adds the interpretive layer that makes the landscape
            legible. History. Folklore. Geology. Local life. The people who have
            lived, worked, and made things in the places the vessel is passing
            through right now.
          </p>
        </ScrollReveal>

        {/* ── Lens cards — 2×2 grid ────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
          {LENS_CARDS.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 80}>
              <div
                className="rounded-lg"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "0.5px solid rgba(196,154,92,0.3)",
                  padding: "20px 24px",
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
                  className="mt-3"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: 1.65,
                    color: "rgba(245,243,239,0.82)",
                  }}
                >
                  {card.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Closing italic ───────────────────────────────────── */}
        <ScrollReveal delay={320} className="mt-12 text-center">
          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(18px, 2vw, 22px)",
              lineHeight: 1.45,
              color: "rgba(245,243,239,0.78)",
              maxWidth: "54ch",
              margin: "0 auto",
            }}
          >
            Applied to the same stretch of river, these lenses turn a silent
            hour into a rich one. The landscape doesn&apos;t change. What guests
            understand about it does.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
