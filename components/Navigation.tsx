"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setVisible(currentY < lastScrollY.current || currentY < 80);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Site navigation"
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "-translate-y-full",
        scrolled ? "border-b" : "",
      ].join(" ")}
      style={{
        backgroundColor: scrolled ? "#FBFAF8" : "transparent",
        borderColor: scrolled ? "rgba(26,26,46,0.1)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-1">
          {/* 1536×1024 native ratio — rendered at 60px tall = 90px wide */}
          <Image
            src={scrolled ? "/images/logo-dark.png" : "/images/logo-light.png"}
            alt="The Host Atlas"
            width={1536}
            height={1024}
            priority
            className="h-[60px] w-auto"
          />
          <span
            className="hidden md:block"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              fontSize: "11px",
              color: "rgba(196,154,92,0.55)",
            }}
          >
            Curated narratives for the silent stretches
          </span>
        </div>

        {/* CTA */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center transition-opacity duration-300 ease-out hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C49A5C]"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "0.01em",
            color: scrolled ? "#F5F3EF" : "#1B3D2F",
            backgroundColor: scrolled ? "#1B3D2F" : "#C49A5C",
            paddingLeft: "20px",
            paddingRight: "20px",
            height: "38px",
            borderRadius: "2px",
          }}
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
