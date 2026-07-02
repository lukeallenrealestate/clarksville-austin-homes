import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/mailer";

export const runtime = "nodejs";

/**
 * Lead form handler. Forms across the site POST JSON here:
 * { name, email, phone, intent, message, address }.
 *
 * Delivery: emails the lead to luke@austinmdg.com via Gmail SMTP (see
 * src/lib/mailer.ts for the one-time GMAIL_USER / GMAIL_APP_PASSWORD setup).
 * Also forwards to LEAD_WEBHOOK_URL if set (optional CRM/Zapier fan-out). The
 * lead is always logged server-side so nothing is lost during setup.
 */
export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill "company"; treat as success without delivering.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  if (!data.name || !data.email) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required" },
      { status: 400 },
    );
  }

  const lead = { ...data, receivedAt: new Date().toISOString() };
  console.log("[lead]", lead);

  try {
    const sent = await sendLeadEmail(lead);
    if (!sent) {
      console.warn("[lead] email not configured (set GMAIL_USER / GMAIL_APP_PASSWORD)");
    }
  } catch (err) {
    console.error("[lead] email delivery failed", err);
  }

  // CRM fan-out (Realtor OS webhook). Maps our form fields to the CRM's shape
  // (name, email, phone, type, source, notes) so leads land clean, with the
  // intent, property address, and source folded into the notes.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    const typeByIntent: Record<string, string> = {
      buy: "Buyer",
      sell: "Seller",
      value: "Seller",
      general: "Lead",
    };
    const notes = [
      data.message?.trim(),
      data.address ? `Property: ${data.address}` : null,
      `Interest: ${data.intent ?? "general"}`,
      "Submitted via clarksvilleaustinhomes.com",
    ]
      .filter(Boolean)
      .join("\n");
    const crmPayload = {
      name: data.name,
      email: data.email,
      phone: data.phone ?? "",
      type: typeByIntent[data.intent ?? "general"] ?? "Lead",
      source: "clarksvilleaustinhomes.com",
      notes,
    };
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(crmPayload),
      });
    } catch (err) {
      console.error("[lead] webhook delivery failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
