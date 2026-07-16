import { NextRequest, NextResponse } from 'next/server';

// This route receives admissions enquiries from the AdmissionsForm component.
//
// For production, wire this up to a real destination — pick one:
//   1. Email: use Resend (https://resend.com) or Nodemailer + an SMTP provider
//      to send the payload to admissions@mohdlanapreschool.com
//   2. CRM / Sheet: forward to Airtable, Google Sheets (via a service account),
//      or a lightweight database (Vercel Postgres / Supabase)
//   3. Automation: POST to a Zapier / Make.com webhook that fans out to
//      email + WhatsApp + a spreadsheet in one step
//
// Required environment variables would be added in the Vercel dashboard
// (Project → Settings → Environment Variables), never committed to git.

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.parentName || !data.phone || !data.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // TODO: replace with a real integration (see notes above).
    console.log('New admissions enquiry:', data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
