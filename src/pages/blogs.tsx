/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/next-script-for-ga */
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Script from 'next/script';
import NavbarSection from '@/component/navbar/NavbarSection';

interface BlogType {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  status: string;
  featuredImage?: {
    viewUrl: string;
  };
  createdAt: string;
  readTime: number;
  viewCount: number;
  categories: Array<{
    name: string;
    slug: string;
    color: string;
  }>;
}

interface BlogResponse {
  success: boolean;
  message: string;
  data: {
    blogs: BlogType[];
    pagination: {
      totalBlogs: number;
      totalPages: number;
      currentPage: number;
      pageSize: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
  error: null | string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<BlogResponse>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?status=published`
        );
        console.log('API Response:', response.data);

        if (response.data.success && response.data.data.blogs) {
          setBlogs(response.data.data.blogs);
        } else {
          setError('Failed to load blogs');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to fetch blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  // Filter only published blogs
  const publishedBlogs = blogs.filter(blog => blog.status === 'published');

  return (
    <>
      <Head>
        <title>bSkilling Blogs</title>
        <meta
          name="description"
          content="Stay Updated with Our Blog | Read Informative Articles on the Latest Trends in Online Learning"
        />
        <meta name="p:domain_verify" content="7bb84546e514612864b5b9d71d1649e4" />
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

      <section className="text-black bg-gray-50 body-font min-h-screen">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col flex-wrap text-center w-full mb-12">
            <h1 className="text-4xl tracking-wide mb-10 text-center font-bold text-gray-900">
              Latest Blog Posts
            </h1>
          </div>

          {publishedBlogs.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-500 text-lg">No published blogs available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedBlogs.map(
                ({
                  _id,
                  title,
                  featuredImage,
                  slug,
                  createdAt,
                  summary,
                  readTime,
                  viewCount,
                  categories,
                }) => (
                  <div
                    key={_id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-full h-[500px]"
                  >
                    {/* Image Section - Fixed Height */}
                    <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                      <img
                        className="w-full h-full object-cover transition duration-300 hover:scale-105"
                        src={featuredImage?.viewUrl || '/default-blog-image.jpg'}
                        alt={title}
                      />
                    </div>

                    {/* Content Section - Flexible Height */}
                    <div className="p-6 flex flex-col flex-grow h-full">
                      {/* Categories - Fixed Height */}
                      <div className="flex flex-wrap gap-2 mb-3 h-6">
                        {categories.slice(0, 2).map(category => (
                          <span
                            key={category.slug}
                            className="inline-block px-2 py-1 text-xs rounded-full text-white h-fit"
                            style={{ backgroundColor: category.color }}
                          >
                            {category.name}
                          </span>
                        ))}
                      </div>

                      {/* Title - Fixed Height */}
                      <h2 className="title-font text-lg font-bold text-gray-900 mb-3 line-clamp-2 h-12 leading-6">
                        {title}
                      </h2>

                      {/* Summary - Fixed Height */}
                      <div className="h-16 mb-4">
                        <p className="text-gray-600 text-sm line-clamp-3 leading-5">
                          {summary || 'No description available...'}
                        </p>
                      </div>

                      {/* Spacer to push footer content to bottom */}
                      <div className="flex-grow"></div>

                      {/* Footer Section - Fixed Height */}
                      <div className="mt-auto">
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                          <span>{new Date(createdAt).toLocaleDateString()}</span>
                          <span>{readTime} min read</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">{viewCount} views</span>
                          <Link
                            href={`/blog/${slug}`}
                            className="text-white bg-blue-600 transition duration-300 hover:bg-blue-700 py-2 px-4 rounded font-medium text-sm"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
