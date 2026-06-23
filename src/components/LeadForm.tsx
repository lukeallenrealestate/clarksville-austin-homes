"use client";

import { useState } from "react";
import { trackLead, type LeadIntent } from "@/lib/analytics";
import { AGENT } from "@/lib/site";

/**
 * Lead capture form. Posts JSON to /api/lead (see app/api/lead/route.ts) and
 * fires a GA4 + Meta Pixel lead event on success. Wired, not a form that posts
 * nowhere. Includes a honeypot for basic spam protection. The optional address
 * field shows for the seller/valuation intent.
 */
type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm({
  defaultIntent = "general",
  showAddress = false,
  cta = "Send Message",
}: {
  defaultIntent?: LeadIntent;
  showAddress?: boolean;
  cta?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data.company) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      trackLead((data.intent as LeadIntent) ?? "general");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        `Something went wrong sending your message. Please call or text ${AGENT.phone} and Luke will help right away.`,
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[3px] border border-brass/40 bg-brass-soft p-7">
        <p className="font-display text-2xl text-ink">Thank you. Your note is on its way to Luke.</p>
        <p className="mt-2 text-sm text-ink-soft">
          He follows up personally, usually the same day. Need something faster? Call or text{" "}
          <a href={AGENT.phoneHref} className="font-semibold text-brass-deep">
            {AGENT.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-[2px] border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass";
  const label = "font-label mb-1.5 block text-[0.62rem] text-ink-soft";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>

      {showAddress ? (
        <div>
          <label htmlFor="address" className={label}>
            Property address (for your home valuation)
          </label>
          <input id="address" name="address" autoComplete="street-address" className={field} />
        </div>
      ) : null}

      <div>
        <label htmlFor="intent" className={label}>
          I am interested in
        </label>
        <select id="intent" name="intent" defaultValue={defaultIntent} className={field}>
          <option value="buy">Buying in Clarksville</option>
          <option value="sell">Selling my Clarksville home</option>
          <option value="value">A Clarksville home valuation</option>
          <option value="general">General questions</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
          placeholder="Timing, budget, a specific home or condo building, or anything you want to know about Clarksville."
        />
      </div>

      {/* Honeypot, visually hidden from users. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-brick">
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={status === "submitting"} className="btn btn-brass disabled:opacity-60">
        {status === "submitting" ? "Sending..." : cta}
      </button>

      <p className="text-xs text-muted">
        By submitting, you agree to be contacted about your inquiry. Your information is never sold.
      </p>
    </form>
  );
}
