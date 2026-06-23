/**
 * Small presentational primitives. Server components, zero client JS.
 * `tone` switches type/treatment between light editorial surfaces and dark
 * heritage-green / ink surfaces.
 */
import type { ReactNode } from "react";

export type Tone = "light" | "dark";

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  const max =
    size === "wide" ? "max-w-7xl" : size === "narrow" ? "max-w-3xl" : "max-w-6xl";
  return (
    <div className={`mx-auto w-full ${max} px-5 sm:px-7 ${className}`}>{children}</div>
  );
}

/** Letter-spaced label with a small brass diamond, the recurring eyebrow mark. */
export function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={`font-label flex items-center gap-2.5 ${
        tone === "dark" ? "text-brass" : "text-brass-deep"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-block h-[6px] w-[6px] rotate-45 bg-brass"
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  as: As = "h2",
  tone = "light",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2";
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <As
        className={`font-display mt-4 text-[2.1rem] font-medium leading-[1.08] tracking-tight sm:text-[2.7rem] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </As>
      {lead ? (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-cream-soft" : "text-ink-soft"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** A single statistic, display-serif value over a letter-spaced label. */
export function Stat({
  value,
  label,
  sub,
  tone = "light",
}: {
  value: ReactNode;
  label: string;
  sub?: string;
  tone?: Tone;
}) {
  const dark = tone === "dark";
  return (
    <div>
      <div
        className={`font-display font-num text-[2.3rem] leading-none sm:text-[2.8rem] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {value}
      </div>
      <div
        className={`font-label mt-3 ${dark ? "text-brass" : "text-brass-deep"}`}
      >
        {label}
      </div>
      {sub ? (
        <div className={`mt-1.5 text-sm ${dark ? "text-cream-soft" : "text-muted"}`}>
          {sub}
        </div>
      ) : null}
    </div>
  );
}

/** Letterpress divider with a centered diamond ornament. */
export function RuleOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`rule-ornament ${className}`} aria-hidden="true">
      <span />
    </div>
  );
}

/** Small tag/pill used on listing cards and category labels. */
export function Pill({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: Tone | "brass";
}) {
  const styles =
    tone === "brass"
      ? "bg-brass-soft text-brass-deep border-brass/30"
      : tone === "dark"
        ? "bg-heritage-soft text-cream-soft border-white/10"
        : "bg-cream text-ink-soft border-line";
  return (
    <span
      className={`font-label inline-flex items-center rounded-[2px] border px-2.5 py-1 text-[0.62rem] ${styles}`}
    >
      {children}
    </span>
  );
}
