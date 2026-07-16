import type { Metadata } from 'next';
import AdmissionsForm from '@/components/AdmissionsForm';
import FAQAccordion from '@/components/FAQAccordion';
import PageIntro from '@/components/PageIntro';
import SectionHeading from '@/components/SectionHeading';
import { HeartDoodle } from '@/components/Doodles';
import { admissionsSteps, site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Start your enquiry to join Mohdlana Preschool in Accra, Ghana — Creche through Kindergarten and Summer School.'
};

const stepIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4"><path d="M4 6a2 2 0 0 1 2-2h2l2 5-2 1a10 10 0 0 0 6 6l1-2 5 2v2a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6Z" strokeLinejoin="round" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4"><path d="M4 21V8l8-5 8 5v13" strokeLinejoin="round" /><path d="M9 21v-6h6v6" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4"><circle cx="9" cy="8" r="2.6" /><path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" strokeLinecap="round" /><circle cx="17" cy="9" r="2" /><path d="M15.5 14c2 .2 3.5 1.8 3.5 4" strokeLinecap="round" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4"><path d="M12 20s-7-4.3-9.5-9C.8 7.5 2.7 4 6.2 4c2 0 3.6 1.2 5.8 3 2.2-1.8 3.8-3 5.8-3 3.5 0 5.4 3.5 3.7 7-2.5 4.7-9.5 9-9.5 9Z" strokeLinejoin="round" /></svg>
];

const eligibility = [
  'Children aged 12 months – 5 years',
  'Up-to-date immunization records',
  'Parent/guardian identification',
  'Completed application form',
  'Any relevant medical or learning information'
];

export default function AdmissionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Admissions"
        title={
          <>
            A smooth start
            <br />
            <span className="italic text-bloom-500">to a bright future.</span>
          </>
        }
        description="We're excited that you're considering Mohdlana Preschool for your child. Our admissions process is designed to be personal, transparent and stress-free."
        primaryCta={{ label: 'Book a tour', href: '#enquire' }}
        secondaryCta={{ label: 'See the process', href: '#process' }}
        image={{ src: '/images/heritage-ghana.jpg', alt: 'Mohdlana Preschool learners in traditional dress, smiling together' }}
        badge={{ label: 'Response time', text: "We reply to every enquiry within one business day." }}
      />

      <section id="process" className="container-page scroll-mt-24 pb-20 pt-4">
        <SectionHeading eyebrow="Our admissions process" title="Four simple steps to join our family" align="center" />
        <ol className="relative mx-auto mt-14 max-w-lg border-l-2 border-dashed border-ink/15 pl-10">
          {admissionsSteps.map((s, i) => {
            const colors = ['bg-teal-500', 'bg-sun-500', 'bg-bloom-400', 'bg-teal-600'];
            return (
              <li key={s.step} className="relative pb-12 last:pb-0">
                <span
                  className={`absolute -left-[3.25rem] top-0 flex h-9 w-9 items-center justify-center rounded-full ${colors[i % colors.length]} text-white shadow-card`}
                >
                  {stepIcons[i % stepIcons.length]}
                </span>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/40">Step {s.step}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.description}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* What we look for */}
      <section className="border-y border-ink/8 bg-teal-50 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">What we look for</p>
            <h2 className="mt-3 flex items-center gap-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              We welcome children who are ready to explore, learn and grow.
              <HeartDoodle className="hidden h-8 w-8 shrink-0 text-bloom-400 sm:block" />
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">
              We look for curious minds, kind hearts and a readiness to engage in a respectful, nurturing community.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-xl2 bg-white p-6 shadow-card">
            {eligibility.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3"><path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4l2.3 2.3 6.3-6.3a1 1 0 0 1 1.4 0Z" /></svg>
                </span>
                <p className="text-sm text-ink/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-24 bg-paper-warm py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Start here"
              title="Tell us about your child"
              description="Share a few details and our admissions team will follow up by phone or email within one business day."
            />
            <div className="mt-8 space-y-3 text-sm text-ink/65">
              <p className="font-semibold text-ink">Prefer to talk now?</p>
              <p>
                <a href={`tel:${site.phone1.replace(/\s/g, '')}`} className="underline decoration-teal-400 underline-offset-4">
                  {site.phone1}
                </a>{' '}
                /{' '}
                <a href={`tel:${site.phone2.replace(/\s/g, '')}`} className="underline decoration-teal-400 underline-offset-4">
                  {site.phone2}
                </a>
              </p>
              <p>{site.hours}</p>
            </div>
          </div>
          <AdmissionsForm />
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Questions" title="Admissions FAQs" />
        <div className="mt-10">
          <FAQAccordion />
        </div>
      </section>

      {/* Contact strip */}
      <section className="border-t border-ink/8 bg-sun-50 py-6">
        <div className="container-page flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-800 text-white">?</span>
            Have questions? We&apos;re here to help.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-ink/70">
            <a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a>
            <a href={`tel:${site.phone1.replace(/\s/g, '')}`} className="hover:text-ink">{site.phone1}</a>
            <span>{site.hours}</span>
          </div>
        </div>
      </section>
    </>
  );
}
