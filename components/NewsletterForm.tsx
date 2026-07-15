'use client';

import { FormEvent, useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return <p className="mt-4 text-sm font-medium text-sun-400">You&apos;re on the list — welcome! 🎉</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex max-w-xs gap-2">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="parent@email.com"
        className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-paper/40 focus:border-sun-400 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="shrink-0 rounded-full bg-sun-400 px-4 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === 'loading' ? '…' : 'Join'}
      </button>
      {status === 'error' && <p className="text-xs text-bloom-200">Something went wrong — try again.</p>}
    </form>
  );
}
