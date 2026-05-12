/**
 * seo.config.js — Centralised SEO configuration
 *
 * Single source of truth for all metadata across the site.
 * Import from layout.js, page-level metadata exports, and
 * sitemap/robots files to ensure consistency.
 *
 * Update this file when:
 * – The domain changes
 * – Business info changes
 * – Target keywords evolve
 */

export const SITE_URL = 'https://www.rkdecor.in';

export const BRAND = {
  name:        'RK Decor',
  legalName:   'RK Decor',
  tagline:     'Luxury Interior Decor Solutions',
  description: 'Premium flooring, wall panels, soffit panels, and bespoke interior decor solutions for luxury residential and commercial spaces in Delhi NCR, Gurugram, and across India.',
  shortDesc:   'Premium interior decor — flooring, wall panels, and bespoke surfaces for luxury spaces.',
  address: {
    street:    '55/12, Block A, DLF Phase 1',
    city:      'Gurugram',
    state:     'Haryana',
    pincode:   '122002',
    country:   'IN',
  },
  phone:  ['+919911460844', '+919990390600'],
  email:  'info@rkdecor.in',
  locale: 'en_IN',
};

export const OG_IMAGE = {
  url:    `${SITE_URL}/og-image.jpg`,
  width:  1200,
  height: 630,
  alt:    'RK Decor — Luxury Interior Decor Solutions',
};

/** Primary keywords — drives title templates and meta descriptions */
export const KEYWORDS = [
  'premium interior decor',
  'luxury interior design Gurugram',
  'wall panels Delhi NCR',
  'engineered wood flooring India',
  'SPC flooring',
  'LVT flooring',
  'soffit ceiling panels',
  'luxury flooring solutions',
  'laminated flooring',
  'bespoke interior surfaces',
  'premium wall cladding',
  'interior decor Gurugram',
  'luxury interiors Delhi',
  'interior materials India',
].join(', ');
