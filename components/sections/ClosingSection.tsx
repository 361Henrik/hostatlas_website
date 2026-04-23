import Image from "next/image";
import { CONTACT_EMAIL, CONTACT_PHONE, SECTION_IDS } from "@/lib/constants";

export default function ClosingSection() {
  return (
    <section
      id={SECTION_IDS.closing}
      className="grid grid-cols-1 lg:grid-cols-2 min-h-screen"
    >

      {/* ── Left column — Deep Green panel ───────────────────────── */}
      <div
        className="flex flex-col justify-center px-10 py-20 md:px-16 md:py-28 lg:px-20"
        style={{ backgroundColor: "#1B3D2F" }}
      >
        {/* Overline */}
        <p
          className="uppercase mb-10"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "rgba(196,154,92,0.7)",
          }}
        >
          Get in touch
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 500,
            fontSize: "clamp(26px, 3vw, 40px)",
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
            color: "#F5F3EF",
            maxWidth: "18ch",
          }}
        >
          Currently in conversation with a select number of operators.
        </h2>

        {/* Body */}
        <p
          className="mt-8"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "17px",
            lineHeight: 1.72,
            color: "rgba(245,243,239,0.75)",
            maxWidth: "42ch",
          }}
        >
          We are in conversation with a small number of river, coastal, and
          expedition cruise operators. If the premise is relevant to your routes
          and your guests, we would be glad to find some time.
        </p>

        <p
          className="mt-4"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "17px",
            lineHeight: 1.72,
            color: "rgba(245,243,239,0.75)",
            maxWidth: "42ch",
          }}
        >
          There is no form. No funnel. Just a conversation with the people who
          built it.
        </p>

        {/* What the meeting covers */}
        <div
          className="mt-8"
          style={{
            borderLeft: "2px solid rgba(196,154,92,0.35)",
            paddingLeft: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: 1.75,
              color: "rgba(245,243,239,0.5)",
            }}
          >
            See the prototype on a real route
            <br />
            Discuss what a deployment could look like for your itineraries
            <br />
            Walk through the insight layer with real sailing data
          </p>
        </div>

        {/* Tagline */}
        <p
          className="mt-10"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "16px",
            color: "#C49A5C",
            letterSpacing: "0.005em",
          }}
        >
          Curated narratives for the silent stretches
        </p>

        {/* CTA */}
        <div className="mt-8">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center transition-opacity duration-300 ease-out hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C49A5C]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "15px",
              letterSpacing: "0.01em",
              color: "#1B3D2F",
              backgroundColor: "#C49A5C",
              paddingLeft: "32px",
              paddingRight: "32px",
              height: "48px",
              borderRadius: "2px",
            }}
          >
            Get in touch
          </a>
        </div>

        {/* Secondary contact */}
        <p
          className="mt-5"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            color: "rgba(245,243,239,0.45)",
          }}
        >
          {CONTACT_PHONE} ·{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline underline-offset-2 transition-opacity duration-300 ease-out hover:opacity-80"
            style={{ color: "rgba(245,243,239,0.45)" }}
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        {/* Footer */}
        <footer className="mt-16">
          <div
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: "rgba(196,154,92,0.3)",
              marginBottom: "14px",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              lineHeight: 1.7,
              color: "rgba(245,243,239,0.28)",
            }}
          >
            The Host Atlas · River, coastal &amp; expedition cruise operators
            <br />
            hostatlas.guide
          </p>
        </footer>
      </div>

      {/* ── Right column — evening water image ───────────────────── */}
      <div className="relative hidden lg:block">
        <Image
          src="/images/screen9-evening-water.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
        />
        {/* Very subtle dark gradient on left edge to blend into green panel */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(27,61,47,0.35) 0%, transparent 40%)",
          }}
          aria-hidden="true"
        />
      </div>

    </section>
  );
}
