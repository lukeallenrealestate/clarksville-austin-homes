"use client";

import { useState } from "react";
import { usd } from "@/lib/listings";

/**
 * Buyer monthly-payment estimator. A client-side lead magnet: instant, useful
 * math (earns the ranking and citation) with a result panel that hands off to a
 * buyer consult / off-market search (captures the buyer lead). Property tax
 * defaults to roughly the Clarksville-area combined rate; everything is editable.
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
    <div className="flex items-baseline justify-between gap-4">
      <span className={strong ? "font-display text-paper" : "text-sm text-cream-soft"}>{k}</span>
      <span className={`font-num ${strong ? "font-display text-2xl text-brass" : "text-sm text-paper"}`}>{v}</span>
    </div>
  );
}

export function MortgageCalculator() {
  const [price, setPrice] = useState("1300000");
  const [downPct, setDownPct] = useState("20");
  const [rate, setRate] = useState("6.5");
  const [term, setTerm] = useState("30");
  const [taxPct, setTaxPct] = useState("2.0");
  const [insurance, setInsurance] = useState("3600");

  const p = toNum(price);
  const dp = p * (toNum(downPct) / 100);
  const loan = Math.max(p - dp, 0);
  const mr = toNum(rate) / 100 / 12;
  const n = toNum(term) * 12;
  const pi = n <= 0 ? 0 : mr === 0 ? loan / n : (loan * mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1);
  const monthlyTax = (p * (toNum(taxPct) / 100)) / 12;
  const monthlyIns = toNum(insurance) / 12;
  const total = pi + monthlyTax + monthlyIns;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
      {/* Inputs */}
      <div className="rounded-[4px] border border-line bg-cream p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="m-price" className={label}>
              Home price
            </label>
            <input id="m-price" inputMode="decimal" value={price} onChange={(e) => setPrice(e.target.value)} className={field} placeholder="$1,300,000" />
          </div>
          <div>
            <label htmlFor="m-down" className={label}>
              Down payment (%)
            </label>
            <input id="m-down" inputMode="decimal" value={downPct} onChange={(e) => setDownPct(e.target.value)} className={field} placeholder="20" />
          </div>
          <div>
            <label htmlFor="m-rate" className={label}>
              Interest rate (%)
            </label>
            <input id="m-rate" inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} className={field} placeholder="6.5" />
          </div>
          <div>
            <label htmlFor="m-term" className={label}>
              Loan term (years)
            </label>
            <input id="m-term" inputMode="decimal" value={term} onChange={(e) => setTerm(e.target.value)} className={field} placeholder="30" />
          </div>
          <div>
            <label htmlFor="m-tax" className={label}>
              Property tax (est. %/yr)
            </label>
            <input id="m-tax" inputMode="decimal" value={taxPct} onChange={(e) => setTaxPct(e.target.value)} className={field} placeholder="2.0" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="m-ins" className={label}>
              Home insurance (est. $/yr)
            </label>
            <input id="m-ins" inputMode="decimal" value={insurance} onChange={(e) => setInsurance(e.target.value)} className={field} placeholder="$3,600" />
          </div>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted">
          Estimate for planning only. Rates, taxes, and insurance vary; a lender provides your real
          numbers. Property tax here defaults to roughly the Clarksville-area combined rate; confirm
          current rates with TCAD.
        </p>
      </div>

      {/* Result */}
      <div className="flex flex-col rounded-[4px] border border-white/10 bg-heritage p-6 text-paper sm:p-8">
        <p className="font-label text-[0.56rem] text-brass">Estimated monthly payment</p>
        <p className="font-display font-num mt-1 text-[2.8rem] leading-none text-paper">
          {usd(Math.round(total))}
          <span className="font-display text-base text-cream-soft">/mo</span>
        </p>
        <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
          <Row k="Principal & interest" v={usd(Math.round(pi))} />
          <Row k="Property taxes" v={usd(Math.round(monthlyTax))} />
          <Row k="Home insurance" v={usd(Math.round(monthlyIns))} />
          <div className="mt-3 border-t border-white/10 pt-4">
            <Row k="Total monthly" v={usd(Math.round(total))} strong />
          </div>
          <p className="pt-2 text-xs text-cream-soft/70">
            Loan amount {usd(Math.round(loan))} after {usd(Math.round(dp))} down.
          </p>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-cream-soft">
          Want Clarksville homes that fit this payment, including off-market ones the portals never
          show? Tell Luke your budget below.
        </p>
      </div>
    </div>
  );
}
