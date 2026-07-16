import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FlowerDoodle, LeafSprigDoodle } from './Doodles';

type Cta = { label: string; href: string; icon?: ReactNode };

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  image: { src: string; alt: string };
  badge?: { label: string; text: string };
};

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
    <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Full hero-style intro used at the top of every inner page — mirrors the
 * homepage Hero (photo, dual CTAs, blob + doodle accents) instead of a
 * plain text band, matching the reference designs for About/Programs/
 * Admissions.
 */
export default function PageIntro({ eyebrow, title, description, primaryCta, secondaryCta, image, badge }: Props) {
  return (
    <section className="relative overflow-hidden bg-paper-warm">
      <div className="container-page relative grid gap-12 pb-16 pt-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:pt-16">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">{title}</h1>
          {description && <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">{description}</p>}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.icon ?? <CalendarIcon />}
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.icon ?? <DownloadIcon />}
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute -right-8 -top-10 flex h-56 w-56 items-start justify-start rounded-blob bg-sun-200 p-7 text-sun-400/70"
            aria-hidden="true"
          >
            <FlowerDoodle className="h-9 w-9" />
          </div>
          <div
            className="pointer-events-none absolute -bottom-8 -right-6 flex h-48 w-64 items-end justify-end rounded-blob bg-teal-200/70 p-7 text-teal-600/60"
            aria-hidden="true"
          >
            <LeafSprigDoodle className="h-9 w-9" />
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-photo shadow-card lg:max-w-none">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          {badge && (
            <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-xl2 bg-white p-4 shadow-card sm:block">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-teal-600">{badge.label}</p>
              <p className="mt-1 text-sm text-ink/70">{badge.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
