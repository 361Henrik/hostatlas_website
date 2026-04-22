"use client";

import { useEffect, useRef, useState } from "react";
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
        scrolled
          ? "bg-background border-b border-border"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-display text-lg text-deep-green">The Host Atlas</span>
          <span className="hidden md:block font-body italic text-[11px] text-accent/45">
            Curated narratives for the silent stretches
          </span>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-body font-medium text-sm text-background bg-primary px-5 py-2.5 rounded-full transition-opacity duration-300 ease-out hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
