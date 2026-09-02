import nodemailer from "nodemailer";
import { AGENT } from "./site";

/**
 * Lead delivery by email through Gmail SMTP.
 *
 * Env (Vercel + .env.local):
 *   GMAIL_USER=luke@austinmdg.com
 *   GMAIL_APP_PASSWORD=the16charpassword
 *   LEAD_TO=luke+leads@austinmdg.com   (tagged alias so Gmail files it as inbound
 *      and a "to:luke+leads@austinmdg.com -> never spam" filter can pin it to the
 *      inbox; still delivers to the luke@austinmdg.com mailbox)
 *
 * The mail is sent from the account to LEAD_TO, with the prospect's address as
 * reply-to, so you reply with one tap. If creds are missing the lead route logs
 * the lead so nothing is lost.
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

export async function sendLeadEmail(lead: Lead): Promise<boolean> {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return false;

  const to = process.env.LEAD_TO ?? AGENT.email;
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

function escapeHtml(s?: string): string {
  return (s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
