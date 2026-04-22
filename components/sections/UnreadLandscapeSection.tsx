import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES, SECTION_IDS } from "@/lib/constants";

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
      className="relative bg-deep-green overflow-hidden"
    >
      {/* Background image with overlay */}
      <img
        src={IMAGES.landscape}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(27,61,47,0.87)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 max-w-[900px] mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-white max-w-[700px]">
            What passes by is rarely explained.
          </h2>
          <p className="font-body text-lg text-white/85 max-w-[640px] mt-6">
            A hill is just a hill until it has a story. A bridge is just a
            bridge. A ruin on a slope is just a ruin. Without interpretation,
            the guest&apos;s eye moves across the landscape without landing
            anywhere. The scenery accumulates — and eventually becomes
            background.
          </p>
          <p className="font-body text-lg text-white/85 max-w-[640px] mt-4">
            The Host Atlas adds the interpretive layer that makes the landscape
            legible. History. Folklore. Geology. Local life. The people who have
            lived, worked, and made things in the places the vessel is passing
            through right now.
          </p>
        </ScrollReveal>

        {/* Lens cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {LENS_CARDS.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 80}>
              <div className="bg-white/[0.08] border border-accent/30 rounded-lg p-6">
                <p className="font-body font-medium text-xs uppercase tracking-widest text-accent">
                  {card.label}
                </p>
                <p className="font-body text-base text-white/85 mt-3">
                  {card.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={320} className="mt-12 text-center">
          <p className="font-display italic text-xl text-white/80">
            Applied to the same stretch of river, these lenses turn a silent
            hour into a rich one. The landscape doesn&apos;t change. What guests
            understand about it does.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
