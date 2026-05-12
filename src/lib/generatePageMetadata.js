/**
 * generatePageMetadata — Reusable per-page metadata factory
 *
 * Usage in any page.js:
 * ─────────────────────
 *   import { generatePageMetadata } from '@/lib/generatePageMetadata';
 *
 *   export const metadata = generatePageMetadata({
 *     title:       'Premium Wall Panels',
 *     description: 'Explore our range of luxury charcoal and textured wall panels...',
 *     slug:        'products/wall-panels',
 *   });
 *
 * The title template in layout.js handles the " | RK Decor" suffix —
 * do NOT include the brand name in the title string passed here.
 *
 * All fields default gracefully so partial overrides work:
 *   export const metadata = generatePageMetadata({ title: 'Gallery' });
 */

import { SITE_URL, BRAND, OG_IMAGE, KEYWORDS } from '@/app/seo.config';

/**
 * @param {object} params
 * @param {string} [params.title]       - Page title (brand suffix added automatically)
 * @param {string} [params.description] - Page-specific meta description (155 chars max)
 * @param {string} [params.slug]        - URL path segment (e.g. 'about', 'products/flooring')
 * @param {string} [params.ogImage]     - Absolute OG image URL (defaults to site default)
 * @param {string} [params.keywords]    - Comma-separated keywords (merged with site keywords)
 * @returns {import('next').Metadata}
 */
export function generatePageMetadata({
  title       = BRAND.tagline,
  description = BRAND.description,
  slug        = '',
  ogImage     = OG_IMAGE.url,
  keywords    = '',
} = {}) {
  const pageUrl    = slug ? `${SITE_URL}/${slug}` : SITE_URL;
  const allKeywords = keywords
    ? `${keywords}, ${KEYWORDS}`
    : KEYWORDS;

  return {
    title,
    description,
    keywords: allKeywords,

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      type:        'website',
      locale:      BRAND.locale,
      url:         pageUrl,
      siteName:    BRAND.name,
      title:       `${title} | ${BRAND.name}`,
      description,
      images: [
        {
          url:    ogImage,
          width:  OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt:    `${title} — ${BRAND.name}`,
        },
      ],
    },

    twitter: {
      card:        'summary_large_image',
      title:       `${title} | ${BRAND.name}`,
      description,
      images:      [ogImage],
    },
  };
}
