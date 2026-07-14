import type { Metadata } from 'next';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT', 'WONK'],
  weight: ['400', '500', '600', '700']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mohdlanapreschool.vercel.app'),
  title: {
    default: 'Mohdlana Preschool — Accra, Ghana',
    template: '%s · Mohdlana Preschool'
  },
  description:
    'Mohdlana Preschool nurtures well-rounded, confident and curious critical thinkers in Accra, Ghana, through experiential, screen-free and globally-minded learning — Creche through Kindergarten.',
  openGraph: {
    title: 'Mohdlana Preschool — Accra, Ghana',
    description:
      'Experiential, screen-free, globally-minded early childhood education in Lartebiokorshie, Accra.',
    images: ['/images/heritage-ghana.jpg'],
    locale: 'en_GH',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
