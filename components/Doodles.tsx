type DoodleProps = { className?: string };

/** A loose, hand-drawn style flower — sits inside the yellow blob accents. */
export function FlowerDoodle({ className = 'h-10 w-10' }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="3.2" />
      <path d="M20 16.8c-2-3-2-7 0-9.8 2 2.8 2 6.8 0 9.8ZM20 23.2c2 3 2 7 0 9.8-2-2.8-2-6.8 0-9.8ZM16.8 20c-3 2-7 2-9.8 0 2.8-2 6.8-2 9.8 0ZM23.2 20c3-2 7-2 9.8 0-2.8 2-6.8 2-9.8 0ZM17.7 17.7c-2.6-2.2-4-5.9-3.4-9 3 .8 5.7 3.4 6.9 6.4ZM22.3 22.3c2.6 2.2 4 5.9 3.4 9-3-.8-5.7-3.4-6.9-6.4ZM17.7 22.3c-2.6 2.2-5.9 4-9 3.4.8-3 3.4-5.7 6.4-6.9ZM22.3 17.7c2.6-2.2 5.9-4 9-3.4-.8 3-3.4 5.7-6.4 6.9Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A simple leaf sprig — sits inside the sage/teal wave accents. */
export function LeafSprigDoodle({ className = 'h-10 w-10' }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} aria-hidden="true">
      <path d="M20 34V12" strokeLinecap="round" />
      <path d="M20 26c-2.5-4-7-5-10-3 1.5 4 5.5 6.5 10 3ZM20 20c2.5-4 7-5 10-3-1.5 4-5.5 6.5-10 3ZM20 14c-2-3-5.5-4-8-2.5 1.2 3.2 4.5 5 8 2.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A small outlined heart. */
export function HeartDoodle({ className = 'h-6 w-6' }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M12 20s-7-4.3-9.5-9C.8 7.5 2.7 4 6.2 4c2 0 3.6 1.2 5.8 3 2.2-1.8 3.8-3 5.8-3 3.5 0 5.4 3.5 3.7 7-2.5 4.7-9.5 9-9.5 9Z" strokeLinejoin="round" />
    </svg>
  );
}

/** A hand-drawn sun with rays. */
export function SunDoodle({ className = 'h-10 w-10' }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="7" />
      <path d="M20 4v4M20 32v4M4 20h4M32 20h4M8.5 8.5l2.8 2.8M28.7 28.7l2.8 2.8M8.5 31.5l2.8-2.8M28.7 11.3l2.8-2.8" strokeLinecap="round" />
    </svg>
  );
}

/** A loose sketchy underline used beneath emphasized headline words. */
export function SketchUnderline({ className = 'h-3 w-28 text-sun-400' }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 12" fill="none" stroke="currentColor" strokeWidth="3" className={className} aria-hidden="true">
      <path d="M2 8c20-4 40-6 60-5s38 3 56 2" strokeLinecap="round" />
    </svg>
  );
}

/** An outlined star, used as a small floating accent. */
export function StarDoodle({ className = 'h-6 w-6' }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden="true">
      <path d="m12 3 2.4 5.3 5.6.6-4.2 4 1.1 5.7L12 15.9l-5 2.7 1.1-5.7-4.2-4 5.6-.6L12 3Z" strokeLinejoin="round" />
    </svg>
  );
}

/** A small radiating sparkle burst. */
export function SparkleDoodle({ className = 'h-8 w-8' }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden="true">
      <path d="M16 4v6M16 22v6M4 16h6M22 16h6M7.5 7.5l3.2 3.2M21.3 21.3l3.2 3.2M7.5 24.5l3.2-3.2M21.3 10.7l3.2-3.2" strokeLinecap="round" />
    </svg>
  );
}
