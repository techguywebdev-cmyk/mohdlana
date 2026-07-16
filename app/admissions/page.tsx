'use client';
import type { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';

import AdmissionsForm from '@/components/AdmissionsForm';
import FAQAccordion from '@/components/FAQAccordion';
import PageIntro from '@/components/PageIntro';
import SectionHeading from '@/components/SectionHeading';
import { HeartDoodle } from '@/components/Doodles';
import { admissionsSteps, site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Start your enquiry to join Mohdlana Preschool in Accra, Ghana — Creche through Kindergarten and Summer School.'
};

const stepIcons = ['☎', '⌂', '◌', '♡'];

const stepImages = [
  '/images/admissions/enquiry.png',
  '/images/admissions/tour-school.png',
  '/images/admissions/settle-in.png',
  '/images/admissions/enrol.png'
];

const colors = [
  'bg-teal-500',
  'bg-sun-500',
  'bg-bloom-400',
  'bg-teal-600'
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
            <span className="italic text-bloom-500">
              to a bright future.
            </span>
          </>
        }
        description="We're excited that you're considering Mohdlana Preschool for your child. Our admissions process is designed to be personal, transparent and stress-free."
        primaryCta={{ label: 'Book a tour', href: '#enquire' }}
        secondaryCta={{ label: 'See the process', href: '#process' }}
        image={{
          src: '/images/heritage-ghana.jpg',
          alt: 'Mohdlana Preschool learners'
        }}
        badge={{
          label: 'Response time',
          text: 'We reply within one business day.'
        }}
      />

      <section
        id="process"
        className="container-page scroll-mt-24 py-20"
      >
        <SectionHeading
          eyebrow="Simple steps"
          title={
            <>
              How to join
              <span className="italic text-bloom-500">
                {' '}Mohdlana Preschool
              </span>
            </>
          }
          description="A simple and friendly journey from your first enquiry to your child's first day."
          align="center"
        />

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute left-6 top-0 hidden h-full border-l-2 border-dashed border-ink/15 md:block" />

          <div className="space-y-8">
            {admissionsSteps.map((step, index) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative grid gap-6 rounded-3xl bg-white p-6 shadow-card md:grid-cols-[80px_1fr_180px] md:items-center"
              >
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${colors[index]} text-xl text-white shadow-card`}
                >
                  {stepIcons[index]}
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-ink/40">
                    Step {step.step}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {step.description}
                  </p>
                </div>

                <div className="hidden md:block">
                  <Image
                    src={stepImages[index]}
                    width={160}
                    height={120}
                    alt={step.title}
                    className="object-contain"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-teal-50 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">What we look for</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              We welcome children ready to explore, learn and grow.
              <HeartDoodle className="ml-3 inline h-8 w-8 text-bloom-400" />
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-card">
            {eligibility.map(item => (
              <p key={item} className="border-b py-3 text-sm text-ink/70 last:border-0">
                ✓ {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="bg-paper-warm py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Start here"
            title="Tell us about your child"
            description="Share your details and our admissions team will contact you."
          />
          <AdmissionsForm />
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Questions" title="Admissions FAQs" />
        <FAQAccordion />
      </section>

      <a
        href={`https://wa.me/${site.phone1.replace(/\D/g, '')}`}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-xl"
      >
        WhatsApp
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-bloom-500 p-4 text-center text-white md:hidden">
        <a href="#enquire" className="font-semibold">
          Start your enquiry
        </a>
      </div>
    </>
  );
}
