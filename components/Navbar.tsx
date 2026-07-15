'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/global-citizens', label: 'Global Citizens' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-paper/90 shadow-[0_1px_0_rgba(14,43,51,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-ink/10">
            <Image src="/images/logo.jpg" alt="Mohdlana Preschool badge" fill className="object-cover" />
          </span>
          <span className="font-display text-lg font-semibold leading-none text-ink">
            Mohdlana
            <span className="block font-body text-[0.62rem] font-medium uppercase tracking-[0.3em] text-teal-600">
              Preschool
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium text-ink/75 transition-colors hover:text-bloom-500 ${
                pathname === l.href ? 'text-bloom-500' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/admissions#enquire" className="btn-primary">
            Book a tour
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-[2px] w-4 bg-ink transition-transform ${open ? 'translate-y-[5px] rotate-45' : ''}`}
            />
            <span className={`absolute left-0 top-[5px] h-[2px] w-4 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`absolute left-0 top-[10px] h-[2px] w-4 bg-ink transition-transform ${open ? '-translate-y-[5px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg px-2 py-3 text-base font-medium text-ink/85">
                {l.label}
              </Link>
            ))}
            <Link href="/admissions#enquire" className="btn-primary mt-2 w-full">
              Book a tour
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
