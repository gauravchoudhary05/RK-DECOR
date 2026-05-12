/**
 * robots.js — Dynamic robots.txt
 *
 * Next.js App Router generates /robots.txt automatically from this file.
 *
 * Rules:
 * – All crawlers allowed on all pages
 * – Sitemap URL declared for discovery
 * – Internal Next.js paths blocked (/_next/) to save crawl budget
 * – API routes blocked — not relevant for search indexing
 *
 * Verify at: https://www.rkdecor.in/robots.txt
 * Test in Google Search Console → URL Inspection → robots.txt tester
 */

import { SITE_URL } from './seo.config';

export default function robots() {
  return {
    rules: [
      {
        // Primary: all search engine crawlers
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',    // Next.js internals — no crawl value
          '/api/',      // API routes — not search-indexable
        ],
      },
    ],
    sitemap:  `${SITE_URL}/sitemap.xml`,
    host:     SITE_URL,
  };
}
