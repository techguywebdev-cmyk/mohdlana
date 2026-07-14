import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import SectionHeading from '@/components/SectionHeading';
import Stamp from '@/components/Stamp';
import { dayInTheLife, pillars } from '@/lib/data';

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
        title="A school built on the idea that children learn best with their hands, their voices and their whole hearts."
        description="Mohdlana Preschool sits on Eduardo Mohdlana Road in Lartebiokorshie, Accra — a safe, dynamic and vibrant school community nurturing well-rounded, confident and curious critical thinkers through experiential learning, from our youngest Creche learners to our Kindergarten graduates."
      />

      <section className="container-page grid gap-6 pb-20 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-xl2 border border-ink/8 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.description}</p>
          </div>
        ))}
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
      <section className="border-t border-ink/8 bg-ink py-20 text-paper">
        <div className="container-page">
          <SectionHeading eyebrow="The people" title="The team behind every school day" tone="white" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.role} className="rounded-xl2 border border-white/15 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun-400 font-display text-sm font-semibold text-ink">
                  M
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{t.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{t.focus}</p>
              </div>
            ))}
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
