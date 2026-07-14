type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'ink' | 'white';
};

export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'ink' }: Props) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className={`eyebrow ${tone === 'white' ? 'text-sun-300' : ''}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold leading-[1.08] sm:text-4xl ${tone === 'white' ? 'text-white' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${tone === 'white' ? 'text-paper/75' : 'text-ink/70'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
