import Image from 'next/image';
import Link from 'next/link';
import Stamp from './Stamp';
import StatBand from './StatBand';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-teal-800 text-paper">
      {/* subtle brand texture so the color block doesn't sit flat */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay bg-grain" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-sun-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid gap-10 pb-0 pt-10 lg:grid-cols-[1fr_0.95fr] lg:items-end lg:pt-16">
        <div className="pb-16 lg:pb-24">
          <p className="eyebrow text-sun-300">Creche → Kindergarten · Lartebiokorshie, Accra</p>
          <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl">
            Well-rounded,
            <br />
            confident&nbsp;&amp;
            <br />
            <span className="italic text-sun-300">curious</span> minds.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/75">
            A safe, dynamic and vibrant school community where children learn by doing — through
            experiential play, screen-free STEM and real conversations about the wider world.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/admissions#enquire" className="btn-primary">
              Book a tour
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/60"
            >
              Explore programs
            </Link>
          </div>
          <div className="mt-14">
            <StatBand dark />
          </div>
        </div>

        {/* Image with an organic arc mask that bites into the bottom edge,
            letting the teal-800 background show through — same trick that
            makes the Goddard School hero feel expensive, tuned to our own
            brand color instead of borrowing theirs. */}
        <div className="relative lg:self-end">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-xl2 shadow-card lg:max-w-none">
            <Image
              src="/images/heritage-ghana.jpg"
              alt="Four Mohdlana Preschool learners dressed in Ghanaian kente and traditional attire, holding the Ghana flag"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div
              className="absolute -bottom-1 left-1/2 h-24 w-[130%] -translate-x-1/2 translate-y-1/2 rounded-[100%] bg-teal-800"
              aria-hidden="true"
            />
          </div>

          <Stamp
            label="Est. Accra"
            sublabel="Ghana"
            tone="sun"
            size="lg"
            className="absolute -left-4 top-6 hidden bg-teal-800 sm:flex"
          />
          <div className="absolute bottom-10 -right-2 hidden max-w-[220px] rounded-xl2 border border-white/15 bg-teal-900/80 p-4 backdrop-blur-sm sm:block">
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-sun-300">Heritage &amp; Culture Day</p>
            <p className="mt-1 text-sm text-paper/80">Little global citizens, proud of home first.</p>
          </div>
        </div>
      </div>

      {/* seam into the next section, echoing the arc above */}
      <div className="h-10 bg-paper sm:h-14" style={{ borderTopLeftRadius: '50% 100%', borderTopRightRadius: '50% 100%' }} />
    </section>
  );
}
