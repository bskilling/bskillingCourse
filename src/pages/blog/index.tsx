import React from 'react';
import BlogLandingPage from './_components/Page';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'SFJBS Blog | IT Staffing, Training & EdTech Insights',
  description:
    'Stay updated with the SFJBS blog. Discover expert articles, industry insights, and the latest trends in IT staffing, professional services, corporate training, EdTech Insights and technology.',
  keywords:
    'SFJBS blog, IT industry insights, tech articles, IT staffing trends, corporate training news, technology blog, professional services insights, IT expert advice, IT news, industry trends',

  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    url: 'https://www.sfjbs.com/blog',
    title: 'SFJBS Blog | IT Staffing, Training & EdTech Insights',
    description:
      'Stay updated with the SFJBS blog. Discover expert articles, industry insights, and the latest trends in IT staffing, professional services, corporate training, EdTech Insights and technology.',
    siteName: 'SFJBS',
    locale: 'en_US',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'SFJBS Blog | IT Staffing, Training & EdTech Insights',
    description:
      'Stay updated with the SFJBS blog. Discover expert articles, industry insights, and the latest trends in IT staffing, professional services, corporate training, EdTech Insights and technology.',
    creator: '@sfjbs',
    site: '@sfjbs',
  },

  // Additional SEO
  alternates: {
    canonical: 'https://www.sfjbs.com/blog',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Additional meta tags
  other: {
    // Replace with your actual verification code or remove if not needed
    // "google-site-verification": "your-actual-verification-code-here",
  },
};

export default function page() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.sfjbs.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://www.sfjbs.com/blog',
              },
            ],
          }),
        }}
      />
      <BlogLandingPage />
    </>
  );
}
