import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <figure key={i} className="card-surface flex flex-col justify-between p-7">
          <blockquote className="font-display text-[1.05rem] leading-snug text-ink">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 font-mono text-xs font-semibold text-teal-700">
              {String(i + 1).padStart(2, '0')}
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
