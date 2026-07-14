import { stats } from '@/lib/data';

export default function StatBand() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="border-l-2 border-sun-400 pl-4">
          <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {s.value}
            <span className="text-lg text-teal-500">{s.unit}</span>
          </p>
          <p className="mt-1 text-xs leading-snug text-ink/60">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
