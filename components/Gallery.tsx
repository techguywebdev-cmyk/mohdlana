'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { heritageGallery } from '@/lib/data';
import Stamp from './Stamp';

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (active === null) return;
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((v) => (v === null ? v : (v + 1) % heritageGallery.length));
      if (e.key === 'ArrowLeft') setActive((v) => (v === null ? v : (v - 1 + heritageGallery.length) % heritageGallery.length));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-3">
        {heritageGallery.map((img, i) => (
          <button
            key={img.country}
            onClick={() => setActive(i)}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl2"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-white">{img.country}</span>
              <Stamp label="Culture" sublabel="day" tone="sun" size="sm" className="hidden sm:flex" />
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${heritageGallery[active].country} photo, enlarged`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-xl2"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={heritageGallery[active].src}
              alt={heritageGallery[active].alt}
              fill
              sizes="90vw"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}
