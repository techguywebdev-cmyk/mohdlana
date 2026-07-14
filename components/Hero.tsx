import Image from 'next/image';
import Link from 'next/link';
import Stamp from './Stamp';
import StatBand from './StatBand';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid gap-12 pb-16 pt-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:pt-16">
        <div>
          <p className="eyebrow">Creche → Kindergarten · Lartebiokorshie, Accra</p>
          <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl">
            Well-rounded,
            <br />
            confident&nbsp;&amp;
            <br />
            <span className="italic text-teal-600">curious</span> minds.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
            A safe, dynamic and vibrant school community where children learn by doing — through
            experiential play, screen-free STEM and real conversations about the wider world.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/admissions#enquire" className="btn-primary">
              Book a tour
            </Link>
            <Link href="/programs" className="btn-secondary">
              Explore programs
            </Link>
          </div>
          <div className="mt-14">
            <StatBand />
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 shadow-card">
            <Image
              src="/images/heritage-ghana.jpg"
              alt="Four Mohdlana Preschool learners dressed in Ghanaian kente and traditional attire, holding the Ghana flag"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <Stamp
            label="Est. Accra"
            sublabel="Ghana"
            tone="bloom"
            size="lg"
            className="absolute -left-6 -top-6 hidden bg-paper sm:flex"
          />
          <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-xl2 border border-ink/10 bg-white p-4 shadow-card sm:block">
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-teal-600">Heritage &amp; Culture Day</p>
            <p className="mt-1 text-sm text-ink/70">Little global citizens, proud of home first.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
