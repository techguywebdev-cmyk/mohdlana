'use client';

import { useState } from 'react';
import { faqs } from '@/lib/data';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-lg font-medium text-ink">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/20 font-mono text-sm transition-transform duration-300 ${
                  isOpen ? 'rotate-45 bg-ink text-white' : ''
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <p className="min-h-0 max-w-2xl text-sm leading-relaxed text-ink/70">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
