"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { headerNav } from "@/lib/site";

/**
 * Morphing header. Transparent over the photographic hero at the top of every
 * page, then settles into a warm paper bar on scroll. Minimal at rest, present
 * without clutter. The wordmark is set in the display serif with a small caps
 * locality label so the brand reads editorial, not templated.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  const linkColor = solid
    ? "text-ink-soft hover:text-brass-deep"
    : "text-paper/85 hover:text-brass";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "border-b border-line bg-paper/92 backdrop-blur supports-[backdrop-filter]:bg-paper/80"
          : "border-b border-transparent bg-gradient-to-b from-ink/80 via-ink/35 to-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3.5 sm:px-7">
        <Link href="/" className="flex flex-col leading-none" aria-label="Clarksville Austin Homes, home">
          <span
            className={`font-display text-[1.55rem] font-medium tracking-tight transition-colors ${
              solid ? "text-ink" : "text-paper"
            }`}
          >
            Clarksville
          </span>
          <span
            className={`font-label text-[0.58rem] tracking-[0.24em] ${
              solid ? "text-brass-deep" : "text-brass"
            }`}
          >
            Austin Homes &middot; 78703
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-x-6 lg:flex">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link-underline text-sm transition-colors ${linkColor}`}
            >
              {item.short ?? item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`rounded-[2px] px-4 py-2 text-sm font-semibold transition-all duration-500 ${
              solid
                ? "bg-heritage text-paper hover:bg-canopy"
                : "border border-paper/45 text-paper hover:border-brass hover:text-brass"
            }`}
          >
            Contact Luke
          </Link>
        </nav>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-[2px] border p-2 lg:hidden ${
            solid ? "border-line text-ink" : "border-paper/45 text-paper"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 bg-current shadow-[0_6px_0_0_currentColor,0_-6px_0_0_currentColor]" />
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto flex w-full max-w-7xl flex-col px-5 py-2 sm:px-7">
            {headerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line/60 py-3 text-ink-soft hover:text-brass-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-heritage my-3 w-full"
              >
                Contact Luke Allen
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
