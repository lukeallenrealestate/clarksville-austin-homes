"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-triggered reveal. Content is visible by default (server-rendered, no-JS
 * safe). On mount this arms the hidden state, then reveals on scroll via
 * IntersectionObserver. Respects prefers-reduced-motion. No animation library;
 * nothing blocks the critical render path.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("reveal-armed");
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("reveal-in");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    // @ts-expect-error polymorphic ref across a small fixed set of tags
    <As ref={ref} className={className}>
      {children}
    </As>
  );
}
