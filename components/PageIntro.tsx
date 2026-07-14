import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

/**
 * A bold teal color-block intro band, used at the top of every inner page.
 * Mirrors the homepage hero's treatment so the "brand color, not white
 * background" language carries through the whole site, not just page one.
 */
export default function PageIntro({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-teal-800 pb-0 pt-14 text-paper sm:pt-20">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sun-400/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative pb-16 sm:pb-20">
        <p className="eyebrow text-sun-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h1>
        {description && <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">{description}</p>}
        {children}
      </div>
      <div
        className="h-10 bg-paper sm:h-14"
        style={{ borderTopLeftRadius: '50% 100%', borderTopRightRadius: '50% 100%' }}
      />
    </section>
  );
}
