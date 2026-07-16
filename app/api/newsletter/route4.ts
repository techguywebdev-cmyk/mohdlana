import { NextRequest, NextResponse } from 'next/server';

// Wire this up to Mailchimp, ConvertKit, Beehiiv, or a Vercel Postgres /
// Supabase table via their respective APIs. Store API keys as environment
// variables in the Vercel dashboard.

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // TODO: forward `email` to your email marketing provider of choice.
    console.log('Newsletter signup:', email);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
