'use client';

import { FormEvent, useState } from 'react';
import { programs } from '@/lib/data';

export default function AdmissionsForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/admissions', {
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
      <div className="card-surface flex flex-col items-center gap-3 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf-500/15 text-2xl text-leaf-500">✓</span>
        <h3 className="font-display text-2xl font-semibold text-ink">Enquiry received!</h3>
        <p className="max-w-sm text-sm text-ink/65">
          Thank you for reaching out. Our admissions team will call or email you within one business day to schedule your visit.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary mt-2">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface grid gap-5 p-8 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Parent / guardian name" name="parentName" required />
        <Field label="Phone number" name="phone" type="tel" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email address" name="email" type="email" required />
        <Field label="Child's name" name="childName" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink/80" htmlFor="program">
            Program of interest
          </label>
          <select
            id="program"
            name="program"
            required
            className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-teal-500 focus:outline-none"
          >
            <option value="">Select a program</option>
            {programs.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name} ({p.ages})
              </option>
            ))}
          </select>
        </div>
        <Field label="Child's date of birth" name="dob" type="date" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-ink/80" htmlFor="message">
          Anything we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Preferred start date, allergies, questions for our team…"
          className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-teal-500 focus:outline-none"
        />
      </div>

      <button type="submit" disabled={status === 'loading'} className="btn-primary mt-2 w-full sm:w-fit">
        {status === 'loading' ? 'Sending…' : 'Submit enquiry'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-bloom-500">Something went wrong — please call us at +233 20 300 9932 instead.</p>
      )}
      <p className="text-xs text-ink/45">
        By submitting, you agree to be contacted by Mohdlana Preschool regarding your enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink/80" htmlFor={name}>
        {label}
        {required && <span className="text-bloom-400"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-teal-500 focus:outline-none"
      />
    </div>
  );
}
