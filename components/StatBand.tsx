import { stats } from '@/lib/data';

export default function StatBand({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className={`border-l-2 pl-4 ${dark ? 'border-sun-400' : 'border-sun-400'}`}>
          <p className={`font-display text-3xl font-semibold sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`}>
            {s.value}
            <span className={dark ? 'text-lg text-sun-300' : 'text-lg text-teal-500'}>{s.unit}</span>
          </p>
          <p className={`mt-1 text-xs leading-snug ${dark ? 'text-paper/65' : 'text-ink/60'}`}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
