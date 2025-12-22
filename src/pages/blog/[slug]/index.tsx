import React from 'react';
import { Metadata } from 'next';
import SingleBlogPage from './_components/Page';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  banner?: string;
  featuredImage?: string;
  categories: Array<{
    _id: string;
    name: string;
    slug: string;
    color?: string;
  }>;
  tags: Array<{
    _id: string;
    name: string;
    slug: string;
    color?: string;
  }>;
  status: string;
  publishedAt?: string;
  readTime: number;
  viewCount: number;
  likeCount: number;
  shareCount: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  language: string;
  series?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    focusKeyword?: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const fetchBlogData = async (slug: string): Promise<Blog | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/blogs/slug/${slug}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error('Failed to fetch blog data:', error);
    return null;
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlogData(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const heroImage = blog.banner || blog.featuredImage;
  const publishedDate = blog.publishedAt || blog.createdAt;
  const categories = blog.categories.map(cat => cat.name).join(', ');
  const tags = blog.tags.map(tag => tag.name).join(', ');

  // Create structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.seo.metaTitle || blog.title,
    description: blog.seo.metaDescription || blog.summary,
    image: heroImage ? [heroImage] : [],
    datePublished: publishedDate,
    dateModified: blog.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'Your Blog Name', // Replace with your actual blog/company name
    },
    publisher: {
      '@type': 'Organization',
      name: 'Your Blog Name', // Replace with your actual blog/company name
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.sfjbs.com/blog/${blog.slug}`,
    },
    articleSection: categories,
    keywords: blog.seo.keywords.join(', '),
    wordCount: blog.content.split(' ').length,
    timeRequired: `PT${blog.readTime}M`,
    inLanguage: blog.language || 'en',
  };

  return {
    title: blog.seo.metaTitle || blog.title,
    description: blog.seo.metaDescription || blog.summary,
    keywords: blog.seo.keywords.join(', '),
    authors: [{ name: 'Your Blog Name' }], // Replace with actual author info
    creator: 'Your Blog Name', // Replace with actual creator
    publisher: 'Your Blog Name', // Replace with actual publisher

    // Open Graph metadata
    openGraph: {
      title: blog.seo.metaTitle || blog.title,
      description: blog.seo.metaDescription || blog.summary,
      url: `https://www.sfjbs.com/blog/${blog.slug}`,
      siteName: 'Your Blog Name', // Replace with your site name
      images: heroImage
        ? [
            {
              url: heroImage,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
      locale: blog.language || 'en_US',
      type: 'article',
      publishedTime: publishedDate,
      modifiedTime: blog.updatedAt,
      section: categories,
      tags: tags,
    },

    // Twitter Card metadata
    twitter: {
      card: 'summary_large_image',
      title: blog.seo.metaTitle || blog.title,
      description: blog.seo.metaDescription || blog.summary,
      images: heroImage ? [heroImage] : [],
      creator: '@yourtwitterhandle', // Replace with your Twitter handle
      site: '@yourtwitterhandle', // Replace with your Twitter handle
    },

    // Additional metadata
    alternates: {
      canonical: `https://www.sfjbs.com/blog/${blog.slug}`,
    },

    // Robots metadata
    robots: {
      index: blog.status === 'published',
      follow: blog.status === 'published',
      googleBot: {
        index: blog.status === 'published',
        follow: blog.status === 'published',
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Additional SEO metadata
    category: categories,
    classification: blog.difficulty || 'general',

    // Structured data as JSON-LD
    other: {
      'application/ld+json': JSON.stringify(structuredData),
    },
  };
}

export default function BlogPage() {
  return <SingleBlogPage />;
}
