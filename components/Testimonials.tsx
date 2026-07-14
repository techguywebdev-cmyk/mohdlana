import { testimonials } from '@/lib/data';

const initialsPalette = ['bg-teal-500', 'bg-bloom-400', 'bg-sun-500'];

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <figure key={i} className="card-surface flex flex-col justify-between p-7">
          <div className="flex gap-0.5 text-sun-500" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, s) => (
              <svg key={s} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.8l-5.3 2.8 1.1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
              </svg>
            ))}
          </div>
          <blockquote className="mt-4 font-display text-[1.05rem] leading-snug text-ink">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold text-white ${initialsPalette[i % initialsPalette.length]}`}
            >
              {t.name
                .split(' ')
                .map((w) => w[0])
                .slice(0, 2)
                .join('')}
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink">{t.name}</span>
              <span className="block text-xs text-ink/50">{t.context}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
