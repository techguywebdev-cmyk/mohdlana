import { site } from '@/lib/data';

export default function AnnouncementBar() {
  return (
    <div className="bg-teal-900 py-2 text-paper">
      <div className="container-page flex flex-wrap items-center justify-between gap-2 text-xs">
        <p className="flex items-center gap-1.5 font-medium">
          <span aria-hidden="true">🎒</span> Now enrolling for 2025/2026 · Limited spaces available
        </p>
        <div className="flex items-center gap-4 text-paper/80">
          <span className="hidden items-center gap-1.5 sm:flex">
            <span aria-hidden="true">📍</span> Visit us in {site.address.split(',').slice(-2, -1)[0]?.trim() || 'Accra, Ghana'}
          </span>
          <a href={`tel:${site.phone1.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-white">
            <span aria-hidden="true">📞</span> {site.phone1}
          </a>
        </div>
      </div>
    </div>
  );
}
