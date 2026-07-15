import Image from 'next/image';
import Link from 'next/link';
import Stamp from './Stamp';
import { FlowerDoodle, LeafSprigDoodle } from './Doodles';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper-warm">
      <div className="container-page relative grid gap-12 pb-16 pt-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:pt-16">
        <div>
          <p className="eyebrow">Creche → Kindergarten · Lartebiokorshie, Accra</p>
          <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl">
            Well-rounded,
            <br />
            confident&nbsp;&amp;
            <br />
            <span className="italic text-bloom-500">curious</span> minds.
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

          {/* Trust row — no fabricated headcount, just an honest signal */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {['bg-teal-400', 'bg-sun-500', 'bg-bloom-400'].map((c, i) => (
                <span
                  key={i}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper-warm text-xs font-semibold text-white ${c}`}
                >
                  {['A', 'K', 'M'][i]}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-sun-500" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.8l-5.3 2.8 1.1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs font-medium text-ink/60">Loved by families across Accra</p>
            </div>
          </div>
        </div>

        {/* Photo with layered organic shapes behind it — soft yellow blob
            with a hand-drawn flower, sage-teal wave with a leaf sprig —
            rather than a solid color block. */}
        <div className="relative">
          <div
            className="pointer-events-none absolute -right-8 -top-10 flex h-64 w-64 items-start justify-start rounded-blob bg-sun-200 p-8 text-sun-400/70"
            aria-hidden="true"
          >
            <FlowerDoodle className="h-10 w-10" />
          </div>
          <div
            className="pointer-events-none absolute -bottom-10 -right-6 flex h-56 w-72 items-end justify-end rounded-blob bg-teal-200/70 p-8 text-teal-600/60"
            aria-hidden="true"
          >
            <LeafSprigDoodle className="h-10 w-10" />
          </div>
          <span className="pointer-events-none absolute left-4 top-2 h-2 w-2 rounded-full bg-sun-400" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-16 left-0 h-1.5 w-1.5 rounded-full bg-teal-400" aria-hidden="true" />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-blob shadow-card lg:max-w-none">
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
            className="absolute -left-6 -top-6 hidden bg-paper-warm sm:flex"
          />
          <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-xl2 bg-white p-4 shadow-card sm:block">
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-teal-600">Heritage &amp; Culture Day</p>
            <p className="mt-1 text-sm text-ink/70">Little global citizens, proud of home first.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
