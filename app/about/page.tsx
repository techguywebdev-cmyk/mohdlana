import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import SectionHeading from '@/components/SectionHeading';
import Stamp from '@/components/Stamp';
import { dayInTheLife } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'The philosophy, people and safety standards behind Mohdlana Preschool in Accra, Ghana.'
};

const team = [
  {
    role: 'Head of School',
    focus: 'Sets the vision, oversees curriculum quality and leads staff development.'
  },
  {
    role: 'Early Years Lead',
    focus: 'Guides Creche & Nursery routines, from attachment care to first words.'
  },
  {
    role: 'STEM & Discovery Coordinator',
    focus: 'Designs screen-free science, engineering and coding-unplugged activities.'
  },
  {
    role: 'Admissions & Family Liaison',
    focus: 'Your first call — tours, enrolment and day-to-day parent communication.'
  }
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Mohdlana"
        title={
          <>
            A school built on the idea that children learn best
            <br />
            with their <span className="italic text-bloom-500">hands, hearts and voices.</span>
          </>
        }
        description="Mohdlana Preschool sits on Eduardo Mohdlana Road in Lartebiokorshie, Accra — a safe, dynamic and vibrant school community nurturing well-rounded, confident and curious critical thinkers through experiential learning, from our youngest Creche learners to our Kindergarten graduates."
        primaryCta={{ label: 'Book a tour', href: '/admissions#enquire' }}
        image={{ src: '/images/heritage-italy.jpg', alt: 'Mohdlana Preschool learners in traditional dress, smiling together' }}
        badge={{ label: 'Est. Accra', text: 'A community rooted in Ghana, open to the world.' }}
      />

      <section className="container-page pb-20 pt-12">
        <div className="relative overflow-hidden rounded-xl2 bg-teal-800 px-6 py-12 shadow-card sm:px-12">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-blob bg-white/5"
            aria-hidden="true"
          />
          <div className="relative grid gap-10 sm:grid-cols-3">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bloom-400 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5"><path d="M12 20s-7-4.3-9.5-9C.8 7.5 2.7 4 6.2 4c2 0 3.6 1.2 5.8 3 2.2-1.8 3.8-3 5.8-3 3.5 0 5.4 3.5 3.7 7-2.5 4.7-9.5 9-9.5 9Z" strokeLinejoin="round" /></svg>
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">To nurture confident, kind and curious learners who are ready to thrive in a changing world.</p>
            </div>
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sun-400 text-ink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5"><circle cx="12" cy="12" r="3" /><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" /></svg>
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">To be Accra&apos;s most trusted preschool community, known for excellence in early childhood education.</p>
            </div>
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-400 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5"><path d="m12 3 2 4.5 5 .6-3.6 3.5.9 5-4.3-2.3-4.3 2.3.9-5L5 8.1l5-.6L12 3Z" strokeLinejoin="round" /></svg>
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">Our Promise</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">A safe environment. Caring teachers. Meaningful learning. Every child, every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Day in the life */}
      <section className="border-t border-ink/8 bg-paper-warm py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="A day at Mohdlana"
              title="Structured enough to feel safe, open enough to feel like play"
              description="Every classroom follows a predictable rhythm — children thrive on knowing what comes next — while leaving room for the wonder of an unplanned discovery."
            />
          </div>
          <ol className="relative space-y-0 border-l border-ink/15 pl-8">
            {dayInTheLife.map((item) => (
              <li key={item.time} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[2.35rem] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-teal-500 bg-paper-warm" />
                <p className="font-mono text-xs uppercase tracking-widest text-teal-600">{item.time}</p>
                <p className="mt-1 font-display text-lg font-medium text-ink">{item.activity}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 shadow-card">
            <Image
              src="/images/heritage-ghana.jpg"
              alt="Mohdlana Preschool learners smiling together outdoors"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <Stamp label="Safety" sublabel="first" tone="teal" className="absolute -bottom-6 -right-6 bg-white" size="lg" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Safety & wellbeing"
              title="Peace of mind, built into every corner"
            />
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70">
              <li>• CCTV-monitored classrooms and outdoor play areas</li>
              <li>• Verified guardian pick-up with a signed authorisation list</li>
              <li>• First-aid trained staff and a daily wellness check-in</li>
              <li>• Low teacher-to-child ratios across every age group</li>
              <li>• Allergy-aware kitchen with individual dietary tracking</li>
              <li>• Fire drills and emergency procedures rehearsed termly</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative overflow-hidden bg-paper-warm py-20">
        <div
          className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-blob bg-bloom-200/40"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <SectionHeading eyebrow="The people" title="The team behind every school day" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => {
              const tones = ['bg-teal-500', 'bg-sun-500', 'bg-bloom-400', 'bg-teal-700'];
              return (
                <div key={t.role} className="rounded-xl2 bg-white p-6 shadow-card">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold text-white ${tones[i % tones.length]}`}>
                    M
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{t.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{t.focus}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Ready to see it for yourself?</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/65">Book a walkthrough and meet the classroom your child will call their own.</p>
        <Link href="/admissions#enquire" className="btn-primary mt-8 inline-flex">
          Book a tour
        </Link>
      </section>
    </>
  );
}
