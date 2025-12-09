// pages/sitemap.xml.ts

import { GetServerSideProps } from 'next';

const SITE_URL = 'https://www.bskilling.com';

interface Course {
  slug: string;
}

// Static pages from your website
const staticPages = [
  { url: '', priority: '1.0', changefreq: 'daily' }, // Homepage
  { url: '/courses', priority: '0.9', changefreq: 'daily' },
  { url: '/corporate-training', priority: '0.8', changefreq: 'weekly' },
  { url: '/government-training-program', priority: '0.8', changefreq: 'weekly' },
  {
    url: '/government-training-program/karnataka-skill-development-corporation',
    priority: '0.7',
    changefreq: 'monthly',
  },
  { url: '/government-training-program/naan-mudhalvan', priority: '0.7', changefreq: 'monthly' },
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
  { url: '/terms-conditions', priority: '0.3', changefreq: 'yearly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/refundpolicy', priority: '0.3', changefreq: 'yearly' },
  { url: '/student-skillgen-ai', priority: '0.8', changefreq: 'weekly' },
];

function generateSiteMap(courseSlugs: string[]): string {
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticPages
       .map(page => {
         return `
     <url>
       <loc>${SITE_URL}${page.url}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>${page.changefreq}</changefreq>
       <priority>${page.priority}</priority>
     </url>`;
       })
       .join('')}
     
     ${courseSlugs
       .map(slug => {
         return `
     <url>
       <loc>${SITE_URL}/course/${slug}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>`;
       })
       .join('')}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    if (!backendUrl) {
      throw new Error('NEXT_PUBLIC_BACKEND_URL is not defined');
    }

    // Fetch all published course slugs
    const response = await fetch(`${backendUrl}/api/courses/slugs/all?isPublished=true`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch courses: ${response.statusText}`);
    }

    const data = await response.json();
    const courseSlugs: string[] = data.data?.slugs || [];

    console.log(`✅ Sitemap generated with ${courseSlugs.length} courses`);

    // Generate the XML sitemap
    const sitemap = generateSiteMap(courseSlugs);

    // Set response headers
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');

    // Write the sitemap
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);

    // Return a basic sitemap with only static pages on error
    const basicSitemap = generateSiteMap([]);
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.write(basicSitemap);
    res.end();

    return {
      props: {},
    };
  }
};

// Default export to prevent Next.js errors
const Sitemap = () => null;
export default Sitemap;
