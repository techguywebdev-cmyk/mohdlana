import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/data';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-teal-700 text-paper">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-blob bg-bloom-400/10 blur-2xl"
        aria-hidden="true"
      />
      <div className="container-page relative grid gap-10 divide-y divide-white/10 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] md:gap-12 md:divide-y-0">
        <div className="pb-8 md:pb-0">
          <div className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-teal-500 ring-2 ring-white/20">
              <Image src="/images/logo.jpg" alt="Mohdlana Preschool badge" fill className="object-cover" />
            </span>
            <span className="font-display text-lg font-semibold">Mohdlana Preschool</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">{site.tagline}</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sun-400 hover:text-sun-200"
          >
            @mohdlanapreschool on Instagram →
          </a>
        </div>

        <div className="pt-8 md:pt-0">
          <p className="eyebrow text-sun-300">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-white">Programs</Link></li>
            <li><Link href="/global-citizens" className="hover:text-white">Global Citizens</Link></li>
            <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div className="pt-8 md:pt-0">
          <p className="eyebrow text-bloom-200">Visit</p>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li>{site.address}</li>
            <li>{site.hours}</li>
            <li><a href={`tel:${site.phone1.replace(/\s/g, '')}`} className="hover:text-white">{site.phone1}</a></li>
            <li><a href={`tel:${site.phone2.replace(/\s/g, '')}`} className="hover:text-white">{site.phone2}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
          </ul>
        </div>

        <div className="pt-8 md:pt-0">
          <p className="eyebrow text-teal-300">Stay in the loop</p>
          <p className="mt-4 text-sm text-paper/70">Termly updates, admissions windows and Summer School dates — no spam, ever.</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-2 text-xs text-paper/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Mohdlana Preschool. All rights reserved.</p>
          <p>Eduardo Mohdlana Road, Lartebiokorshie, Accra, Ghana</p>
        </div>
      </div>
    </footer>
  );
}
