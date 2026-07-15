import Link from 'next/link';
import type { Program } from '@/lib/data';
import Stamp from './Stamp';

const toneBg: Record<Program['color'], string> = {
  teal: 'bg-teal-50',
  sun: 'bg-sun-50',
  bloom: 'bg-bloom-50'
};

const toneText: Record<Program['color'], string> = {
  teal: 'text-teal-700',
  sun: 'text-sun-600',
  bloom: 'text-bloom-500'
};

export default function ProgramCard({ program, index }: { program: Program; index: number }) {
  return (
    <Link
      href={`/programs#${program.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl2 border border-ink/8 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${toneBg[program.color]}`}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`eyebrow ${toneText[program.color]}`}>{program.ages}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{program.name}</h3>
          </div>
          <Stamp label={program.ages.split(' ')[0]} sublabel="entry" tone={program.color} size="sm" />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">{program.tagline}</p>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/40">0{index}</span>
        <span className={`inline-flex items-center gap-1 text-sm font-semibold ${toneText[program.color]}`}>
          Learn more
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
