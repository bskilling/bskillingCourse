/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.bskilling.com'],
    loader: 'akamai',
    path: '/',
  },
  env: {
    PUBLIC_URL: '/',
  },

  async redirects() {
    return [
      {
        source: '/courses/course-details/prince2®-7th-edition-foundation-certification',
        destination: '/government-training-program/nasscom-future-skills/prince2-foundation',
        permanent: true,
      },
      {
        source:
          '/courses/course-details/project-management-professional-(pmp)®-certification-course',
        destination:
          '/government-training-program/nasscom-future-skills/project-management-professional-course',
        permanent: true,
      },
      {
        source: '/courses/course-details/itil®-v4-foundation-certification',
        destination:
          '/government-training-program/nasscom-future-skills/itil-4-foundation-certification-training',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
