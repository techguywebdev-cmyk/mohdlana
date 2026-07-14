import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import PageIntro from '@/components/PageIntro';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Visit, call or write to Mohdlana Preschool on Eduardo Mohdlana Road, Lartebiokorshie, Accra.'
};

const info = [
  { label: 'Address', value: site.address },
  { label: 'Phone', value: `${site.phone1} · ${site.phone2}` },
  { label: 'Email', value: site.email },
  { label: 'Hours', value: site.hours }
];

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Come say hello on Eduardo Mohdlana Road." />

      <section className="container-page grid gap-6 pb-12 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        {info.map((i) => (
          <div key={i.label} className="rounded-xl2 border border-ink/8 bg-white p-6">
            <p className="eyebrow">{i.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{i.value}</p>
          </div>
        ))}
      </section>

      <section className="container-page grid gap-10 pb-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-xl2 border border-ink/8 shadow-card">
          <iframe
            title="Map to Mohdlana Preschool, Eduardo Mohdlana Road, Lartebiokorshie, Accra"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
            width="100%"
            height="100%"
            style={{ minHeight: 420, border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <ContactForm />
      </section>
    </>
  );
}
