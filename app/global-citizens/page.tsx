import type { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import SectionHeading from '@/components/SectionHeading';
import Stamp from '@/components/Stamp';

export const metadata: Metadata = {
  title: 'Global Citizens',
  description: 'Heritage & Culture Day at Mohdlana Preschool — building pride in Ghana and curiosity about the world.'
};

const countries = ['Ghana', 'Italy', 'France', 'Nigeria', 'Kenya', 'Japan', 'Egypt', 'Mexico', 'Netherlands'];

export default function GlobalCitizensPage() {
  return (
    <>
      <section className="container-page pb-12 pt-12">
        <p className="eyebrow">Global Citizens</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          Proud of home first — curious about the world always.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          Once a term, our Heritage &amp; Culture Day turns every classroom into a passport stamp. Children dress in
          traditional attire, taste new foods, learn a handful of words in a new language, and present what makes a
          culture special — starting always with pride in being Ghanaian.
        </p>
      </section>

      <section className="container-page pb-20">
        <Gallery />
      </section>

      <section className="border-y border-ink/8 bg-paper-warm py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Why it matters"
            title="Culture is a curriculum, not a costume"
            description="Research shows children form ideas about identity and difference early. We use Heritage & Culture Day as a structured, teacher-guided unit — covering geography, food, music, dress and a handful of vocabulary for each nation studied — so admiration and curiosity replace stereotypes before they can form."
          />
          <div className="rounded-xl2 border border-ink/10 bg-white p-8">
            <p className="eyebrow text-teal-600">Nations explored so far</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {countries.map((c) => (
                <span key={c} className="rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Stamp label="Passport" sublabel="stamped" tone="bloom" size="sm" />
              <p className="text-sm text-ink/60">A new stamp is added to our classroom &ldquo;passport wall&rdquo; after every celebration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Follow along on Instagram</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/65">
          We post every Heritage Day, field trip and classroom milestone — come see today&apos;s highlights.
        </p>
        <Link
          href="https://www.instagram.com/mohdlanapreschool/"
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-8 inline-flex"
        >
          @mohdlanapreschool
        </Link>
      </section>
    </>
  );
}
