/**
 * sitemap.js — Dynamic XML sitemap
 *
 * Next.js App Router generates /sitemap.xml automatically from this file.
 * Submit this URL to Google Search Console and Bing Webmaster Tools:
 *   https://www.rkdecor.in/sitemap.xml
 *
 * Priority guide:
 *   1.0 — Homepage (most important)
 *   0.9 — Core service/product pages
 *   0.8 — Gallery, About (trust-building pages)
 *   0.7 — Blog, Contact
 *   0.5 — Utility pages (legal, privacy)
 *
 * changeFrequency guide:
 *   'weekly'  — Content updated regularly (blog, gallery)
 *   'monthly' — Stable content (services, about)
 *   'yearly'  — Near-static (legal pages)
 */

import { SITE_URL } from './seo.config';

export default function sitemap() {
  const now = new Date();

  return [
    // ── Homepage ──────────────────────────────────────────────────
    {
      url:             SITE_URL,
      lastModified:    now,
      changeFrequency: 'weekly',
      priority:        1.0,
    },

    // ── Core pages ────────────────────────────────────────────────
    {
      url:             `${SITE_URL}/about`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${SITE_URL}/products`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${SITE_URL}/gallery`,
      lastModified:    now,
      changeFrequency: 'weekly',
      priority:        0.8,
    },
    {
      url:             `${SITE_URL}/blog`,
      lastModified:    now,
      changeFrequency: 'weekly',
      priority:        0.7,
    },
    {
      url:             `${SITE_URL}/contact`,
      lastModified:    now,
      changeFrequency: 'yearly',
      priority:        0.7,
    },

    // ── Product category pages (add as pages are created) ─────────
    // {
    //   url:             `${SITE_URL}/products/engineered-wood-flooring`,
    //   lastModified:    now,
    //   changeFrequency: 'monthly',
    //   priority:        0.9,
    // },
    // {
    //   url:             `${SITE_URL}/products/wall-panels`,
    //   lastModified:    now,
    //   changeFrequency: 'monthly',
    //   priority:        0.9,
    // },
    // {
    //   url:             `${SITE_URL}/products/spc-lvt-flooring`,
    //   lastModified:    now,
    //   changeFrequency: 'monthly',
    //   priority:        0.9,
    // },
  ];
}
