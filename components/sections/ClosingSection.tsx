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
        style={{ backgroundColor: "rgba(27,61,47,0.78)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-[600px] mx-auto py-24">
        <h2 className="font-display text-[32px] md:text-[44px] leading-tight text-white">
          Currently in conversation with a select number of operators.
        </h2>
        <p className="font-body text-lg text-white/85 mt-6 max-w-prose mx-auto">
          We are in conversation with a small number of river, coastal, and
          expedition cruise operators. If the premise is relevant to your routes
          and your guests, we would be glad to find some time.
        </p>
        <p className="font-body text-lg text-white/85 mt-4 max-w-prose mx-auto">
          There is no form. No funnel. Just a conversation with the people who
          built it.
        </p>

        {/* What the meeting covers */}
        <p className="font-body text-sm text-white/60 mt-8 max-w-prose mx-auto leading-relaxed">
          See the prototype on a real route · Discuss what a deployment could
          look like for your itineraries · Walk through the insight layer with
          real sailing data
        </p>

        {/* Tagline echo */}
        <p className="font-display italic text-base text-accent mt-8">
          Curated narratives for the silent stretches
        </p>

        {/* Bronze CTA — on dark/green background */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center mt-6 font-body font-medium text-base text-deep-green bg-accent px-8 h-12 rounded transition-opacity duration-300 ease-out hover:opacity-90"
        >
          Get in touch
        </a>

        <p className="font-body text-sm text-white/60 mt-4">
          Schedule a call via Calendly · Or write directly:{" "}
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
            The Host Atlas · River, coastal, and expedition cruise operators · hostatlas.guide
            <br />
            Curated narratives for the silent stretches
          </p>
        </footer>
      </div>
    </section>
  );
}
