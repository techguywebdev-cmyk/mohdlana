import { stats } from '@/lib/data';

const iconBg = ['bg-teal-900', 'bg-bloom-400', 'bg-sun-500', 'bg-teal-500'];

const icons = [
  // sprout / youngest learners
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
    <path d="M12 21v-8M12 13c0-4-3-6-7-6 0 4 3 6 7 6Zm0 0c0-5 3-8 8-8 0 5-3 8-8 8Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // ratio / people
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
    <circle cx="9" cy="8" r="2.6" />
    <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" strokeLinecap="round" />
    <circle cx="17" cy="9" r="2" />
    <path d="M15.5 14c2 .2 3.5 1.8 3.5 4" strokeLinecap="round" />
  </svg>,
  // book / play-based
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
    <path d="M12 6.5c-1.6-1-4-1.5-6-1v12c2 0 4.4.5 6 1.5 1.6-1 4-1.5 6-1.5V5.5c-2-.5-4.4 0-6 1Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 6.5v12" />
  </svg>,
  // shield / global citizens
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
    <circle cx="12" cy="12" r="8" />
    <path d="M4 12h16M12 4c2.2 2.2 3.4 5 3.4 8s-1.2 5.8-3.4 8c-2.2-2.2-3.4-5-3.4-8S9.8 6.2 12 4Z" />
  </svg>
];

export default function StatBand() {
  return (
    <div className="relative overflow-hidden rounded-xl2 bg-teal-800 px-6 py-10 shadow-card sm:px-10">
      <div
        className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-blob bg-white/5"
        aria-hidden="true"
      />
      <div className="relative grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <span className={`flex h-11 w-11 items-center justify-center rounded-full text-white ${iconBg[i % iconBg.length]}`}>
              {icons[i % icons.length]}
            </span>
            <p className="mt-4 font-display text-3xl font-semibold text-white">
              {s.value}
              <span className="text-lg text-sun-300">{s.unit}</span>
            </p>
            <p className="mt-1 text-xs leading-snug text-paper/65">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
