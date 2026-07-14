type StampProps = {
  label: string;
  sublabel?: string;
  tone?: 'teal' | 'sun' | 'bloom' | 'ink';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const toneMap = {
  teal: 'text-teal-700 border-teal-700/70',
  sun: 'text-sun-600 border-sun-600/70',
  bloom: 'text-bloom-500 border-bloom-500/70',
  ink: 'text-ink border-ink/70'
};

const sizeMap = {
  sm: 'h-16 w-16 text-[0.5rem]',
  md: 'h-24 w-24 text-[0.6rem]',
  lg: 'h-32 w-32 text-[0.68rem]'
};

/**
 * The Stamp is Mohdlana's signature motif: a passport-style ink stamp that
 * echoes the school's circular badge logo, used to mark milestones, program
 * ages and cultural moments across the site — like a passport being stamped
 * on every leg of a child's learning journey.
 */
export default function Stamp({ label, sublabel, tone = 'ink', className = '', size = 'md' }: StampProps) {
  return (
    <div
      className={`relative flex shrink-0 rotate-[-8deg] select-none items-center justify-center rounded-full border-[1.5px] border-dashed font-mono uppercase tracking-[0.14em] ${toneMap[tone]} ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-1 rounded-full border border-current opacity-40" />
      <div className="flex flex-col items-center justify-center gap-0.5 px-2 text-center leading-tight">
        <span className="font-semibold">{label}</span>
        {sublabel && <span className="opacity-80">{sublabel}</span>}
      </div>
    </div>
  );
}
