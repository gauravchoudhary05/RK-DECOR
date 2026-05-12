import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar      from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import GlobalGrain from "@/components/GlobalGrain";
import { QuoteModalProvider } from "@/components/QuoteModalContext";
import { SITE_URL, BRAND, OG_IMAGE, KEYWORDS } from "./seo.config";

// ─── Fonts ──────────────────────────────────────────────────────────────────
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets:  ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets:  ["latin"],
});

// ─── Root Metadata ──────────────────────────────────────────────────────────
/**
 * Next.js App Router metadata export.
 *
 * Title template: sub-pages use "%s | RK Decor" automatically.
 * Example: page exports `title: "About"` → renders "About | RK Decor"
 *
 * metadataBase: required for absolute URL resolution of OG images,
 * canonical URLs, and Twitter cards when deployed.
 */
export const metadata = {
  // ── Canonical base ──────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),

  // ── Title template ──────────────────────────────────────────────
  title: {
    default:  `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },

  // ── Core meta ───────────────────────────────────────────────────
  description: BRAND.description,
  keywords:    KEYWORDS,
  authors:     [{ name: BRAND.name, url: SITE_URL }],
  creator:     BRAND.name,
  publisher:   BRAND.name,

  // ── Canonical URL ───────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Robots ──────────────────────────────────────────────────────
  robots: {
    index:            true,
    follow:           true,
    googleBot: {
      index:          true,
      follow:         true,
      'max-image-preview': 'large',
      'max-snippet':  -1,
    },
  },

  // ── Open Graph ──────────────────────────────────────────────────
  openGraph: {
    type:        'website',
    locale:      BRAND.locale,
    url:         SITE_URL,
    siteName:    BRAND.name,
    title:       `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.shortDesc,
    images: [
      {
        url:    OG_IMAGE.url,
        width:  OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt:    OG_IMAGE.alt,
        type:   'image/jpeg',
      },
    ],
  },

  // ── Twitter / X Card ────────────────────────────────────────────
  twitter: {
    card:        'summary_large_image',
    title:       `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.shortDesc,
    images:      [OG_IMAGE.url],
    // creator: '@rkdecor',  // Add when Twitter handle is set up
  },

  // ── Favicon / Icons ─────────────────────────────────────────────
  // Next.js auto-serves app/favicon.ico — no explicit config needed.
  // To add additional icon sizes, place files in app/ directory:
  //   apple-icon.png → apple-touch-icon
  //   icon.png       → standard favicon
  icons: {
    icon:             [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png',    type: 'image/png',  sizes: '32x32'  },
    ],
    apple:            [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut:         '/favicon.ico',
  },

  // ── Verification (add when accounts are ready) ──────────────────
  // verification: {
  //   google: 'GOOGLE_SEARCH_CONSOLE_TOKEN',
  //   yandex: 'YANDEX_TOKEN',
  // },

  // ── App info ────────────────────────────────────────────────────
  applicationName: BRAND.name,
  category:        'Interior Design',
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
/**
 * LocalBusiness schema improves rich results in Google Search,
 * Google Maps, and local pack rankings for "interior decor Gurugram".
 * Rendered as an inline <script> in <head> by Next.js.
 */
const jsonLd = {
  '@context':   'https://schema.org',
  '@type':      'LocalBusiness',
  name:         BRAND.name,
  description:  BRAND.description,
  url:          SITE_URL,
  email:        BRAND.email,
  telephone:    BRAND.phone[0],
  image:        OG_IMAGE.url,
  priceRange:   '₹₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  address: {
    '@type':          'PostalAddress',
    streetAddress:    BRAND.address.street,
    addressLocality:  BRAND.address.city,
    addressRegion:    BRAND.address.state,
    postalCode:       BRAND.address.pincode,
    addressCountry:   BRAND.address.country,
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   28.4595,   // DLF Phase 1, Gurugram
    longitude:  77.0266,
  },
  openingHoursSpecification: [
    {
      '@type':    'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens:     '09:00',
      closes:    '19:00',
    },
  ],
  sameAs: [
    // Add social profile URLs when available:
    // 'https://www.instagram.com/rkdecor',
    // 'https://www.facebook.com/rkdecor',
  ],
};

// ─── Root Layout ────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data — LocalBusiness schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GlobalGrain />
        <SmoothScroll>
          <QuoteModalProvider>
            <Navbar />
            {children}
          </QuoteModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
