import type { Metadata } from 'next';
import AdmissionsForm from '@/components/AdmissionsForm';
import FAQAccordion from '@/components/FAQAccordion';
import PageIntro from '@/components/PageIntro';
import SectionHeading from '@/components/SectionHeading';
import { admissionsSteps, site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Start your enquiry to join Mohdlana Preschool in Accra, Ghana — Creche through Kindergarten and Summer School.'
};

export default function AdmissionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Admissions"
        title="Your family's place at Mohdlana starts with a conversation."
        description="We keep our classes small, so enrolment windows can close early. Reach out as soon as you're considering us — there's no pressure, only answers."
      />

      <section className="container-page pb-20 pt-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {admissionsSteps.map((s) => (
            <div key={s.step} className="rounded-xl2 border border-ink/8 bg-white p-6">
              <span className="font-mono text-xs text-teal-500">{s.step}</span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="enquire" className="scroll-mt-24 border-y border-ink/8 bg-paper-warm py-20">
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
    </>
  );
}
