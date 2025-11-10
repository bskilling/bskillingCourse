import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Script from 'next/script';
import NavbarSection from '@/component/navbar/NavbarSection';

interface BlogType {
  _id: string;
  title: string;
  content: string;
  slug: string;
  summary: string;
  status: string;
  featuredImage?: {
    viewUrl: string;
  };
  createdAt: string;
  publishedAt: string;
  readTime: number;
  viewCount: number;
  likeCount: number;
  shareCount: number;
  difficulty: string;
  categories: Array<{
    _id: string;
    name: string;
    slug: string;
    color: string;
  }>;
  tags: Array<{
    _id: string;
    name: string;
    slug: string;
    color: string;
  }>;
  contentBlocks: any[];
  relatedBlogs: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    focusKeyword: string;
    canonicalUrl: string;
  };
}

interface BlogResponse {
  success: boolean;
  message: string;
  data: {
    blog: BlogType;
  };
  error: null | string;
}

export default function SingleBlogPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [blog, setBlog] = useState<BlogType | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug || typeof slug !== 'string') return;

    const fetchBlog = async () => {
      try {
        setLoading(true);

        // Fetch single blog by slug
        const response = await axios.get<BlogResponse>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${slug}`
        );

        console.log('Blog Response:', response.data);

        if (response.data.success && response.data.data.blog) {
          setBlog(response.data.data.blog);

          // Fetch related blogs if available
          if (response.data.data.blog.relatedBlogs?.length > 0) {
            fetchRelatedBlogs(response.data.data.blog.relatedBlogs);
          }
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const fetchRelatedBlogs = async (blogIds: string[]) => {
    try {
      const requests = blogIds
        .slice(0, 3)
        .map(id => axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/id/${id}`));

      const responses = await Promise.all(requests);
      const related = responses.map(res => res.data.data?.blog).filter(Boolean);

      setRelatedBlogs(related);
    } catch (err) {
      console.error('Error fetching related blogs:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
        <p className="text-gray-600 mb-8">
          {error || 'The blog post you are looking for does not exist.'}
        </p>
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{blog.seo?.metaTitle || blog.title}</title>
        <meta name="description" content={blog.seo?.metaDescription || blog.summary} />
        <meta name="keywords" content={blog.seo?.keywords?.join(', ') || ''} />
        {blog.seo?.canonicalUrl && <link rel="canonical" href={blog.seo.canonicalUrl} />}

        {/* Open Graph */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.summary} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/blog/${blog.slug}`}
        />
        {blog.featuredImage && <meta property="og:image" content={blog.featuredImage.viewUrl} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.summary} />
        {blog.featuredImage && <meta name="twitter:image" content={blog.featuredImage.viewUrl} />}

        <link rel="icon" href="/favicon.png" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3PVZC9K8BH"></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3PVZC9K8BH');
            `,
          }}
        />
      </Head>

      {/* Navbar */}
      <div className="sticky top-0 z-[50] bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50">
        <nav className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-[100px] h-[40px] lg:w-[150px] lg:h-[50px]">
              <img src="/logo.png" alt="Logo" className="object-contain" />
            </div>
          </Link>
          <NavbarSection />
        </nav>
      </div>

      {/* Main Content */}
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/blog" className="hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-800 font-medium">{blog.title}</li>
            </ol>
          </nav>

          {/* Blog Header */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Featured Image */}
            {blog.featuredImage && (
              <div className="w-full h-64 md:h-96 overflow-hidden">
                <img
                  src={blog.featuredImage.viewUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-6 md:p-8">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.categories.map(category => (
                  <span
                    key={category._id}
                    className="inline-block px-3 py-1 text-sm rounded-full text-white font-medium"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.name}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {blog.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>

                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {blog.readTime} min read
                </span>

                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {blog.viewCount} views
                </span>

                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    blog.difficulty === 'beginner'
                      ? 'bg-green-100 text-green-800'
                      : blog.difficulty === 'intermediate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                  }`}
                >
                  {blog.difficulty}
                </span>
              </div>

              {/* Summary */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-xl text-gray-700 leading-relaxed font-light">{blog.summary}</p>
              </div>

              {/* Content Blocks */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map(tag => (
                      <span
                        key={tag._id}
                        className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Share */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Share this article</h3>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Twitter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                    LinkedIn
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map(relatedBlog => (
                  <Link
                    key={relatedBlog._id}
                    href={`/blog/${relatedBlog.slug}`}
                    className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {relatedBlog.featuredImage && (
                      <img
                        src={relatedBlog.featuredImage.viewUrl}
                        alt={relatedBlog.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{relatedBlog.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to All Blogs
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
