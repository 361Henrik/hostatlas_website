import { CONTACT_EMAIL, IMAGES, SECTION_IDS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image with Ken Burns */}
      <img
        src={IMAGES.hero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 animate-ken-burns"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35 z-10" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-[680px] mx-auto">
        <h1 className="font-display text-[36px] md:text-[56px] leading-tight text-white">
          What&apos;s that over there?
        </h1>
        <p className="font-display italic text-lg md:text-2xl text-white/80 mt-4">
          The highlights are covered. The silent stretches aren&apos;t.
        </p>
        <p className="font-body text-lg text-white/85 max-w-[520px] mx-auto mt-6">
          HostAtlas gives river and coastal cruise operators a contextual
          experience layer for the journey between the highlights — turning what
          guests see into something they understand.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center mt-10 font-body font-medium text-base text-white bg-primary px-8 h-12 rounded transition-opacity duration-300 ease-out hover:opacity-90"
        >
          Request a conversation →
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-scroll-pulse"
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/60"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
