import type { MetadataRoute } from 'next';

const base = 'https://mohdlanapreschool.vercel.app';
const routes = ['', '/about', '/programs', '/global-citizens', '/admissions', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
