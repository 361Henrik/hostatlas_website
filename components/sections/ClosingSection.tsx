import { CONTACT_EMAIL, IMAGES, SECTION_IDS } from "@/lib/constants";

export default function ClosingSection() {
  return (
    <section
      id={SECTION_IDS.closing}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={IMAGES.closing}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Deep Green overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(31,74,58,0.75)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-[600px] mx-auto py-24">
        <h2 className="font-display text-[32px] md:text-[44px] leading-tight text-white">
          Currently working with a select number of operators.
        </h2>
        <p className="font-body text-lg text-white/85 mt-6 max-w-prose mx-auto">
          We are in early conversations with a small group of river and coastal
          cruise operators exploring what a contextual experience layer could
          mean for their routes and their guests.
        </p>
        <p className="font-body text-lg text-white/85 mt-4 max-w-prose mx-auto">
          If you&apos;d like to understand more — or walk through a working
          prototype — we&apos;d be pleased to set aside some time.
        </p>

        {/* Bronze CTA — on dark/green background */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center mt-10 font-body font-medium text-base text-deep-green bg-accent px-8 h-12 rounded transition-opacity duration-300 ease-out hover:opacity-90"
        >
          Request a conversation →
        </a>

        <p className="font-body text-sm text-white/60 mt-4">
          Or write directly:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline underline-offset-2 hover:text-white/80 transition-colors duration-300 ease-out"
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        {/* Footer */}
        <footer className="mt-16">
          <p className="font-body text-xs text-white/40">
            HostAtlas — a contextual experience layer for scenic transit.
            <br />
            River and coastal cruise operators. hostatlas.guide
          </p>
        </footer>
      </div>
    </section>
  );
}
