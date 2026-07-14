import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ProgramCard from '@/components/ProgramCard';
import Testimonials from '@/components/Testimonials';
import Stamp from '@/components/Stamp';
import { admissionsSteps, pillars, programs, site } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Pillars */}
      <section className="border-t border-ink/8 bg-paper-warm py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our approach"
            title="Six commitments behind every school day"
            description="Every classroom decision — from the toys on the shelf to the questions we ask — traces back to these."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl2 border border-ink/8 bg-white p-6">
                <PillarIcon name={p.icon} />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Programs"
              title="A learning journey from 12 months to age 9"
              description="Four stages, one continuous philosophy — play-based, hands-on and rooted in confidence."
            />
            <Link href="/programs" className="btn-secondary shrink-0">
              View full curriculum
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <ProgramCard key={p.slug} program={p} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Citizens teaser */}
      <section className="bg-ink py-20 text-paper">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Global Citizens"
              title="Proud of home. Curious about the world."
              tone="white"
              description="Our annual Heritage & Culture Day sends every classroom on a journey — through dress, food, language and story — starting with Ghana and reaching outward to the world our children will inherit."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {['Ghana', 'Italy', 'France', '+ 6 more'].map((c) => (
                <span key={c} className="rounded-full border border-white/20 px-4 py-2 text-sm text-paper/80">
                  {c}
                </span>
              ))}
            </div>
            <Link href="/global-citizens" className="btn-light mt-8 inline-flex">
              See the celebration
            </Link>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl2">
              <Image src="/images/heritage-france.jpg" alt="Children dressed in French traditional attire holding the France flag" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-xl2">
              <Image src="/images/heritage-italy.jpg" alt="Children dressed in Italian traditional attire holding the Italy flag" fill className="object-cover" sizes="25vw" />
            </div>
            <Stamp label="9+" sublabel="cultures" tone="sun" size="lg" className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-ink" />
          </div>
        </div>
      </section>

      {/* Admissions steps */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Admissions"
            title="Four simple steps to join our family"
            align="center"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {admissionsSteps.map((s, i) => (
              <div key={s.step} className="relative pl-6">
                <span className="font-mono text-xs text-teal-500">{s.step}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.description}</p>
                {i < admissionsSteps.length - 1 && (
                  <span className="absolute -right-4 top-1 hidden text-ink/20 lg:block">—</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/admissions#enquire" className="btn-primary">
              Start your enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-paper-warm py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Families" title="What parents notice first" align="center" />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-xl2 bg-bloom-400 px-8 py-16 text-center text-white sm:px-16">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Come see a school day in session.</h2>
            <p className="mx-auto mt-4 max-w-md text-white/85">
              The best way to understand Mohdlana is to walk our halls. Tours run every weekday morning.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/admissions#enquire" className="btn-light">
                Book a tour
              </Link>
              <a href={`tel:${site.phone1.replace(/\s/g, '')}`} className="text-sm font-semibold text-white underline underline-offset-4">
                or call {site.phone1}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PillarIcon({ name }: { name: string }) {
  const common = 'h-5 w-5';
  const icons: Record<string, JSX.Element> = {
    hand: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
        <path d="M8 12V5a1.5 1.5 0 0 1 3 0v6M11 11V4a1.5 1.5 0 0 1 3 0v7M14 12V6a1.5 1.5 0 0 1 3 0v8M8 12v3a5 5 0 0 0 5 5h1a5 5 0 0 0 5-5v-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" strokeLinecap="round" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
      </svg>
    ),
    mic: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
        <path d="M12 20s-7-4.3-9.5-9C.8 7.5 2.7 4 6.2 4c2 0 3.6 1.2 5.8 3 2.2-1.8 3.8-3 5.8-3 3.5 0 5.4 3.5 3.7 7-2.5 4.7-9.5 9-9.5 9Z" strokeLinejoin="round" />
      </svg>
    )
  };

  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-600">
      {icons[name]}
    </span>
  );
}
