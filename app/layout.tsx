import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <AnnouncementBar />
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
