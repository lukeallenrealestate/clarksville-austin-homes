"use client";

import { useState } from "react";
import { usd } from "@/lib/listings";

/**
 * Seller net-proceeds estimator. A client-side lead magnet: it gives a real,
 * instant estimate (which is what earns the ranking and the citation) and the
 * result panel hands off to a precise, Luke-prepared net sheet (which is what
 * captures the seller lead). Commission is a user-set input, not a fixed rate,
 * to stay accurate and NAR-compliant.
 */
const toNum = (v: string) => {
  const n = Number(v.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
};

const field =
  "w-full rounded-[2px] border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass";
const label = "font-label mb-1.5 block text-[0.62rem] text-ink-soft";

function Row({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between gap-4 ${strong ? "" : "text-cream-soft"}`}>
      <span className={strong ? "font-display text-paper" : "text-sm"}>{k}</span>
      <span className={`font-num ${strong ? "font-display text-2xl text-brass" : "text-sm text-paper"}`}>{v}</span>
    </div>
  );
}

export function NetProceedsCalculator() {
  const [salePrice, setSalePrice] = useState("1300000");
  const [payoff, setPayoff] = useState("");
  const [commissionPct, setCommissionPct] = useState("5");
  const [titlePct, setTitlePct] = useState("1.5");
  const [other, setOther] = useState("");

  const sp = toNum(salePrice);
  const po = toNum(payoff);
  const commission = sp * (toNum(commissionPct) / 100);
  const titleClosing = sp * (toNum(titlePct) / 100);
  const otherCosts = toNum(other);
  const totalCosts = commission + titleClosing + otherCosts;
  const net = sp - po - totalCosts;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
      {/* Inputs */}
      <div className="rounded-[4px] border border-line bg-cream p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="np-sale" className={label}>
              Expected sale price
            </label>
            <input id="np-sale" inputMode="decimal" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} className={field} placeholder="$1,300,000" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="np-payoff" className={label}>
              Mortgage payoff (remaining loan balance)
            </label>
            <input id="np-payoff" inputMode="decimal" value={payoff} onChange={(e) => setPayoff(e.target.value)} className={field} placeholder="$0" />
          </div>
          <div>
            <label htmlFor="np-comm" className={label}>
              Total agent commission (%)
            </label>
            <input id="np-comm" inputMode="decimal" value={commissionPct} onChange={(e) => setCommissionPct(e.target.value)} className={field} placeholder="5" />
          </div>
          <div>
            <label htmlFor="np-title" className={label}>
              Title & closing (est. %)
            </label>
            <input id="np-title" inputMode="decimal" value={titlePct} onChange={(e) => setTitlePct(e.target.value)} className={field} placeholder="1.5" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="np-other" className={label}>
              Other costs (concessions, repairs, prep)
            </label>
            <input id="np-other" inputMode="decimal" value={other} onChange={(e) => setOther(e.target.value)} className={field} placeholder="$0" />
          </div>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted">
          Commission is negotiable and set by you; adjust every field to your situation. This is an
          estimate for planning, not a quote. Texas sellers customarily cover the owner&rsquo;s title
          policy, but costs vary by transaction.
        </p>
      </div>

      {/* Result */}
      <div className="flex flex-col rounded-[4px] border border-white/10 bg-heritage p-6 text-paper sm:p-8">
        <p className="font-label text-[0.56rem] text-brass">Estimated net proceeds</p>
        <p className={`font-display font-num mt-1 text-[2.8rem] leading-none ${net < 0 ? "text-brick" : "text-paper"}`}>
          {usd(Math.round(net))}
        </p>
        <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
          <Row k="Sale price" v={usd(Math.round(sp))} />
          <Row k="Less: mortgage payoff" v={`- ${usd(Math.round(po))}`} />
          <Row k="Less: agent commission" v={`- ${usd(Math.round(commission))}`} />
          <Row k="Less: title & closing" v={`- ${usd(Math.round(titleClosing))}`} />
          <Row k="Less: other costs" v={`- ${usd(Math.round(otherCosts))}`} />
          <div className="mt-3 border-t border-white/10 pt-4">
            <Row k="Your estimated net" v={usd(Math.round(net))} strong />
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-cream-soft">
          Want the exact, line-by-line net sheet for your specific Clarksville home? Luke prepares one
          free, with real local comps behind the sale price. Send your address below.
        </p>
      </div>
    </div>
  );
}
