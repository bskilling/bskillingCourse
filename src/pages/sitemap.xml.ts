// pages/sitemap.xml.ts

import { GetServerSideProps } from 'next';

const SITE_URL = 'https://www.bskilling.com';

/* ---------------------------------------------
 Types
--------------------------------------------- */

interface SlugResponse {
  data?: {
    slugs?: string[];
  };
}

/* ---------------------------------------------
 Static Pages
--------------------------------------------- */

const staticPages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/courses', priority: '0.9', changefreq: 'daily' },
  { url: '/corporate-training', priority: '0.8', changefreq: 'weekly' },
  { url: '/government-training-program', priority: '0.8', changefreq: 'weekly' },

  {
    url: '/government-training-program/karnataka-skill-development-corporation',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    url: '/government-training-program/naan-mudhalvan',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    url: '/government-training-program/nasscom-future-skills',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    url: '/government-training-program/national-skill-development-corporation',
    priority: '0.7',
    changefreq: 'monthly',
  },

  { url: '/institutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/institutions/skill-development-programs', priority: '0.7', changefreq: 'monthly' },
  { url: '/institutions/job-assisting-programs', priority: '0.7', changefreq: 'monthly' },

  { url: '/reviews', priority: '0.6', changefreq: 'weekly' },

  { url: '/student-skillgen-ai', priority: '0.8', changefreq: 'weekly' },

  { url: '/terms-conditions', priority: '0.3', changefreq: 'yearly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/refundpolicy', priority: '0.3', changefreq: 'yearly' },
];

/* ---------------------------------------------
 Sitemap Generator
--------------------------------------------- */

function generateSiteMap(courseSlugs: string[], blogSlugs: string[]): string {
  const lastmod = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  ${staticPages
    .map(
      page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}

  ${courseSlugs
    .map(
      slug => `
  <url>
    <loc>${SITE_URL}/course/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}

  ${blogSlugs
    .map(
      slug => `
  <url>
    <loc>${SITE_URL}/blog/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}

</urlset>`;
}

/* ---------------------------------------------
 Server Side
--------------------------------------------- */

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    if (!backendUrl) {
      throw new Error('NEXT_PUBLIC_BACKEND_URL is not defined');
    }

    // Fetch Course Slugs
    const courseRes = await fetch(`${backendUrl}/api/courses/slugs/all?isPublished=true`);
    const courseJson: SlugResponse = await courseRes.json();
    const courseSlugs = courseJson.data?.slugs || [];

    // Fetch Blog Slugs
    const blogRes = await fetch(`${backendUrl}/api/blogs/slugs/all?status=published`);
    const blogJson: SlugResponse = await blogRes.json();
    const blogSlugs = blogJson.data?.slugs || [];

    console.log(`✅ Sitemap generated: ${courseSlugs.length} courses, ${blogSlugs.length} blogs`);

    const sitemap = generateSiteMap(courseSlugs, blogSlugs);

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');

    res.write(sitemap);
    res.end();

    return { props: {} };
  } catch (error) {
    console.error('❌ Sitemap error:', error);

    const sitemap = generateSiteMap([], []);

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.write(sitemap);
    res.end();

    return { props: {} };
  }
};

/* ---------------------------------------------
 Default Export
--------------------------------------------- */

const Sitemap = () => null;
export default Sitemap;
