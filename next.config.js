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
        source: '/courses/course-details/prince2%C2%AE-7th-edition-foundation-certification',
        destination: '/course/prince2-foundation',
        permanent: true,
      },
      {
        source:
          '/courses/course-details/project-management-professional-(pmp)%C2%AE-certification-course',
        destination: '/course/project-management-professional-course',
        permanent: true,
      },
      {
        source: '/courses/course-details/itil%C2%AE-v4-foundation-certification',
        destination: '/course/itil-4-foundation-certification-training',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
