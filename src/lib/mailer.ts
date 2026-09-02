import nodemailer from "nodemailer";
import { AGENT } from "./site";

/**
 * Lead delivery by email.
 *
 * Preferred: Resend (a transactional email service) for reliable inbox delivery.
 * Set in Vercel env:
 *   RESEND_API_KEY=re_xxx
 *   RESEND_FROM="Clarksville Leads <leads@clarksvilleaustinhomes.com>"  (optional;
 *      defaults to onboarding@resend.dev, which works before domain verification)
 *   LEAD_TO=luke@austinmdg.com   (where leads are delivered)
 *
 * Fallback: Gmail SMTP (from luke@austinmdg.com to luke@austinmdg.com). This
 * self-send can be filtered to spam by Gmail, which is why Resend is preferred.
 *   GMAIL_USER / GMAIL_APP_PASSWORD / LEAD_TO
 *
 * If neither is configured, the lead route logs the lead so nothing is lost.
 * Either way the prospect's address is the reply-to, so you reply with one tap.
 */
export type Lead = {
  name?: string;
  email?: string;
  phone?: string;
  intent?: string;
  message?: string;
  address?: string;
  receivedAt?: string;
};

const intentLabel: Record<string, string> = {
  buy: "Buying in Clarksville",
  sell: "Selling a Clarksville home",
  value: "Clarksville home valuation",
  general: "General inquiry",
};

function buildMessage(lead: Lead) {
  const label = intentLabel[lead.intent ?? "general"] ?? "Inquiry";
  const subject = `New ${label} lead: ${lead.name ?? "website visitor"}`;
  const text = [
    `New lead from clarksvilleaustinhomes.com`,
    ``,
    `Intent:   ${label}`,
    `Name:     ${lead.name ?? "(none)"}`,
    `Email:    ${lead.email ?? "(none)"}`,
    `Phone:    ${lead.phone ?? "(none)"}`,
    `Address:  ${lead.address ?? "(none)"}`,
    ``,
    `Message:`,
    lead.message?.trim() || "(none)",
    ``,
    `Received: ${lead.receivedAt ?? ""}`,
  ].join("\n");
  const html = `
    <div style="font-family:Georgia,serif;color:#1E1B16;max-width:560px">
      <h2 style="margin:0 0 4px">New Clarksville lead</h2>
      <p style="margin:0 0 16px;color:#8a8474">${label}</p>
      <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
        <tr><td style="padding:6px 0;color:#8a8474;width:90px">Name</td><td style="padding:6px 0;font-weight:600">${escapeHtml(lead.name)}</td></tr>
        <tr><td style="padding:6px 0;color:#8a8474">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#8a8474">Phone</td><td style="padding:6px 0">${escapeHtml(lead.phone)}</td></tr>
        <tr><td style="padding:6px 0;color:#8a8474">Address</td><td style="padding:6px 0">${escapeHtml(lead.address)}</td></tr>
      </table>
      <p style="margin:16px 0 4px;color:#8a8474;font-family:Arial,sans-serif">Message</p>
      <p style="margin:0;white-space:pre-wrap;font-family:Arial,sans-serif">${escapeHtml(lead.message) || "(none)"}</p>
    </div>`;
  return { subject, text, html };
}

/** Send via Resend's HTTP API. Returns true on success. */
async function sendViaResend(lead: Lead, to: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const from = process.env.RESEND_FROM || "Clarksville Leads <onboarding@resend.dev>";
  const { subject, text, html } = buildMessage(lead);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      html,
      ...(lead.email ? { reply_to: lead.email } : {}),
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${body.slice(0, 300)}`);
  }
  return true;
}

/** Send via Gmail SMTP (fallback). */
async function sendViaGmail(lead: Lead, to: string): Promise<boolean> {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return false;

  const { subject, text, html } = buildMessage(lead);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
  await transporter.sendMail({
    from: `"Clarksville Austin Homes" <${user}>`,
    to,
    replyTo: lead.email,
    subject,
    text,
    html,
  });
  return true;
}

export async function sendLeadEmail(lead: Lead): Promise<boolean> {
  const to = process.env.LEAD_TO ?? AGENT.email;
  // Prefer Resend when configured; fall back to Gmail SMTP.
  if (process.env.RESEND_API_KEY) return sendViaResend(lead, to);
  return sendViaGmail(lead, to);
}

function escapeHtml(s?: string): string {
  return (s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
