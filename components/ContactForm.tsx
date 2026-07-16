'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="card-surface p-8 text-center">
        <p className="font-display text-xl font-semibold text-ink">Message sent ✓</p>
        <p className="mt-2 text-sm text-ink/65">We&apos;ll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface grid gap-5 p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink/80">Full name</label>
        <input id="name" name="name" required className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none" />
      </div>
      <div>
        <label htmlFor="c-email" className="mb-2 block text-sm font-medium text-ink/80">Email address</label>
        <input id="c-email" name="email" type="email" required className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink/80">Message</label>
        <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none" />
      </div>
      <button type="submit" disabled={status === 'loading'} className="btn-primary w-fit">
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'error' && <p className="text-sm text-bloom-500">Something went wrong — please try again.</p>}
    </form>
  );
}
