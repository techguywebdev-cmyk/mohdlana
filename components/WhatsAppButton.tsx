import { site } from '@/lib/data';

export default function WhatsAppButton() {
  const number = site.phone2.replace(/\s|\+/g, '');
  const message = encodeURIComponent("Hello Mohdlana Preschool! I'd like to know more about enrolment.");

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-leaf-500 text-white shadow-card transition-transform hover:-translate-y-1 hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.36.68 4.55 1.86 6.4L4 29l7.8-1.8A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.64 28 15S22.63 3 16.02 3Zm0 21.6a9.5 9.5 0 0 1-4.86-1.33l-.35-.2-4.63 1.07 1.1-4.5-.23-.37A9.55 9.55 0 1 1 25.6 15a9.6 9.6 0 0 1-9.58 9.6Zm5.27-7.17c-.29-.15-1.7-.84-1.96-.94-.26-.1-.46-.15-.65.15-.19.29-.75.94-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43a8.7 8.7 0 0 1-1.61-2c-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.24-.57-.48-.5-.65-.5h-.56c-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.42 0 1.43 1.05 2.81 1.19 3 .15.19 2.06 3.14 5 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"/>
      </svg>
    </a>
  );
}
