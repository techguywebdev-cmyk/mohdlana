import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Stamp from '@/components/Stamp';
import { programs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Creche, Nursery, Kindergarten and Summer School programs at Mohdlana Preschool, Accra.'
};

const toneBg = { teal: 'bg-teal-50', sun: 'bg-sun-50', bloom: 'bg-bloom-50' } as const;
const toneText = { teal: 'text-teal-700', sun: 'text-sun-600', bloom: 'text-bloom-500' } as const;
const toneBorder = { teal: 'border-teal-200', sun: 'border-sun-200', bloom: 'border-bloom-200' } as const;

export default function ProgramsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Programs"
        title={
          <>
            Programs that <span className="italic text-bloom-500">grow</span>
            <br />
            with your child.
          </>
        }
        description="From our Creche to Kindergarten, every stage is designed to meet your child where they are — and inspire them to go further."
        primaryCta={{ label: 'Book a tour', href: '/admissions#enquire' }}
        secondaryCta={{ label: 'Explore below', href: '#creche' }}
        image={{ src: '/images/heritage-france.jpg', alt: 'Mohdlana Preschool learners in traditional dress, smiling together' }}
        badge={{ label: 'Ages', text: '12 months through Kindergarten, plus Summer School.' }}
      />

      <section className="container-page grid gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => {
          const badgeTone = { teal: 'bg-teal-500', sun: 'bg-sun-500', bloom: 'bg-bloom-400' } as const;
          return (
            <a
              key={program.slug}
              href={`#${program.slug}`}
              className="group relative rounded-xl2 bg-white p-6 pt-9 shadow-card transition-transform hover:-translate-y-1"
            >
              <span
                className={`absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold text-white ${badgeTone[program.color]}`}
              >
                {program.name[0]}
              </span>
              <p className={`eyebrow ${toneText[program.color]}`}>{program.ages}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink">{program.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{program.tagline}</p>
              <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${toneText[program.color]}`}>
                Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          );
        })}
      </section>

      <div className="space-y-6 pb-24">
        {programs.map((program, i) => (
          <section
            key={program.slug}
            id={program.slug}
            className={`scroll-mt-24 border-y ${toneBorder[program.color]} ${toneBg[program.color]} py-16`}
          >
            <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="flex items-center gap-4">
                  <Stamp label={program.ages.split(' ')[0]} sublabel="entry age" tone={program.color} />
                  <div>
                    <p className={`eyebrow ${toneText[program.color]}`}>{program.ages}</p>
                    <h2 className="mt-1 font-display text-3xl font-semibold text-ink">{program.name}</h2>
                  </div>
                </div>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">{program.description}</p>
                <div className="mt-6 flex flex-col gap-1 text-sm text-ink/60">
                  <span className="font-semibold text-ink">Schedule</span>
                  <span>{program.schedule}</span>
                </div>
                <Link href="/admissions#enquire" className="btn-primary mt-8 inline-flex">
                  Enquire about {program.name}
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {program.highlights.map((h) => (
                  <div key={h} className="rounded-xl2 border border-ink/8 bg-white p-5">
                    <p className="text-sm leading-relaxed text-ink/75">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="container-page pb-24 text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Not sure which program fits?</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/65">
          Tell us your child&apos;s age and personality — our admissions team will recommend the right fit.
        </p>
        <Link href="/admissions#enquire" className="btn-primary mt-8 inline-flex">
          Talk to admissions
        </Link>
      </section>
    </>
  );
}
