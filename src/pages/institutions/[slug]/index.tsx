import { GetServerSideProps } from 'next';
import { ICourse } from '@/component/types/Course.types';
import CourseLandingPage from '@/components/pages/institution/_components/Course-Preview';
import Script from 'next/script';
import Head from 'next/head';
interface IMetadata {
  _id?: string;
  courseId?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  metaUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: 'website' | 'article' | 'course';
  ogImage?: {
    _id?: string;
    viewUrl?: string;
  };
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: {
    _id?: string;
    viewUrl?: string;
  };
  robotsIndex?: boolean;
  robotsFollow?: boolean;
  schemaMarkup?: string;
  sitemapPriority?: number;
  isPublished?: boolean;
}
interface CourseDetailsProps {
  course: {
    data: {
      course: ICourse;
      metadata: IMetadata | null;
    };
  };
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  const courseData = course?.data?.course;
  const metadata = course?.data?.metadata;

  // Extract and generate SEO data intelligently
  // For title: Use meta title if available, otherwise use course title
  const title = metadata?.metaTitle ?? courseData?.title ?? 'Course Details';

  // For description: Use meta description or truncate course description
  const description =
    metadata?.metaDescription ??
    (courseData?.description && courseData.description.length > 160
      ? courseData.description.substring(0, 157) + '...'
      : courseData?.description) ??
    'Explore our comprehensive online course';

  // For images: Use OG image if available, otherwise use course preview image or banner
  const ogImage =
    metadata?.ogImage?.viewUrl ??
    courseData?.previewImage?.viewUrl ??
    courseData?.banner?.viewUrl ??
    '';

  // For keywords: Use meta keywords or generate from course skills/category
  const defaultKeywords = [
    courseData?.title,
    ...(courseData?.skills ?? []).slice(0, 5),
    ...(courseData?.category ?? []).slice(0, 3),
  ]
    .filter(Boolean)
    .join(', ');

  const keywords =
    metadata?.metaKeywords && metadata.metaKeywords.length > 0
      ? metadata.metaKeywords.join(', ')
      : defaultKeywords;

  // OG Type
  const ogType = metadata?.ogType ?? 'course';

  // Robots directives
  const robotsDirectives = [];
  if (metadata?.robotsIndex !== undefined) {
    robotsDirectives.push(metadata.robotsIndex ? 'index' : 'noindex');
  }
  if (metadata?.robotsFollow !== undefined) {
    robotsDirectives.push(metadata.robotsFollow ? 'follow' : 'nofollow');
  }
  const robotsContent = robotsDirectives.length > 0 ? robotsDirectives.join(', ') : 'index, follow';

  // Parse provided JSON-LD schema or create a detailed one
  let jsonLd = null;
  if (metadata?.schemaMarkup) {
    try {
      jsonLd = JSON.parse(metadata.schemaMarkup);
    } catch (e) {
      console.error('Invalid JSON-LD schema:', e);
    }
  }

  // Generate comprehensive JSON-LD if none exists or parsing failed
  if (!jsonLd && courseData) {
    const price =
      courseData.price && typeof courseData.price === 'object'
        ? (courseData.price.amount ?? courseData.price.amount ?? null)
        : null;

    const currency =
      courseData.price && typeof courseData.price === 'object'
        ? (courseData.price.currency ?? 'USD')
        : 'USD';

    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: courseData.title,
      description: courseData.description,
      provider: {
        '@type': 'Organization',
        name: process.env.NEXT_PUBLIC_SITE_NAME ?? 'Academy',
      },
      // Add duration if available
      ...(courseData.durationHours
        ? {
            timeRequired: `PT${courseData.durationHours}H`,
          }
        : {}),
      // Add course instance if we have dates and price
      ...(courseData.startTime && courseData.endTime
        ? {
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'online',
              startDate: courseData.startTime,
              endDate: courseData.endTime,
              ...(price
                ? {
                    offers: {
                      '@type': 'Offer',
                      price: price.toString(),
                      priceCurrency: currency,
                      availability: 'https://schema.org/InStock',
                    },
                  }
                : {}),
            },
          }
        : {}),
    };
    // Add skills/competencies if available
    if (courseData.skills && Array.isArray(courseData.skills) && courseData.skills.length > 0) {
      // Don't add properties that aren't in the type definition
    }

    // Add outcomes if available
    if (
      courseData.outcomes &&
      Array.isArray(courseData.outcomes) &&
      courseData.outcomes.length > 0
    ) {
      // Don't add properties that aren't in the type definition
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/institutions/${courseData?.slug}`}
        />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content={robotsContent} />

        {/* Course-specific meta tags */}
        {courseData?.durationHours && (
          <meta name="duration" content={`${courseData.durationHours} hours`} />
        )}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={metadata?.ogTitle || title} />
        <meta property="og:description" content={metadata?.ogDescription || description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/courses/${courseData?.slug || courseData?._id}`}
        />

        {/* Twitter card tags */}
        <meta name="twitter:card" content={metadata?.twitterCard || 'summary_large_image'} />
        <meta name="twitter:title" content={metadata?.twitterTitle || metadata?.ogTitle || title} />
        <meta
          name="twitter:description"
          content={metadata?.twitterDescription || metadata?.ogDescription || description}
        />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Head>

      {/* Schema.org markup for Google */}
      {jsonLd && (
        <Script
          id="course-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: typeof jsonLd === 'string' ? jsonLd : JSON.stringify(jsonLd),
          }}
        />
      )}

      <div>
        <CourseLandingPage courseData={courseData} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  // @ts-expect-error error
  const { slug } = context.params; // Get slug from params instead of query

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/courses/slug/${slug}`);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return { props: { course: data } };
};

export default CourseDetails; // ✅ Ensure there is a default export
