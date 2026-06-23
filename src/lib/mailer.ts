import nodemailer from "nodemailer";
import { AGENT } from "./site";

/**
 * Lead delivery by email through Gmail SMTP.
 *
 * Setup (one time):
 *   1. On the Google account for luke@austinmdg.com, turn on 2-Step
 *      Verification (required to create an App Password).
 *   2. Create an App Password: Google Account > Security > App passwords.
 *      Pick "Mail" / "Other", name it "Clarksville site". Copy the 16
 *      characters (Google shows them with spaces; remove the spaces).
 *   3. In .env.local (and Vercel env) set:
 *        GMAIL_USER=luke@austinmdg.com
 *        GMAIL_APP_PASSWORD=the16charpassword
 *        LEAD_TO=luke@austinmdg.com        (optional, defaults to the agent email)
 *
 * If those are not set, the lead route falls back to logging the lead so
 * nothing is lost. The email is sent FROM your account TO you, with the
 * prospect's address as reply-to, so you can reply with one tap.
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

export async function sendLeadEmail(lead: Lead): Promise<boolean> {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return false;

  const to = process.env.LEAD_TO ?? AGENT.email;
  const label = intentLabel[lead.intent ?? "general"] ?? "Inquiry";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const lines = [
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
  ];

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

  await transporter.sendMail({
    from: `"Clarksville Austin Homes" <${user}>`,
    to,
    replyTo: lead.email,
    subject: `New ${label} lead: ${lead.name ?? "website visitor"}`,
    text: lines.join("\n"),
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
