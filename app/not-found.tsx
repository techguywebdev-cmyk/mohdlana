import Link from 'next/link';
import Stamp from '@/components/Stamp';

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center gap-6 py-32 text-center">
      <Stamp label="Not" sublabel="found" tone="bloom" size="lg" />
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">This page wandered off during free play.</h1>
      <p className="max-w-sm text-ink/65">The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to circle time.</p>
      <Link href="/" className="btn-primary">
        Back to homepage
      </Link>
    </section>
  );
}
