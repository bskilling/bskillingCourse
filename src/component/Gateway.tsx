/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Gateway = () => {
  const features = [
    {
      image: '/images/gateway1.jfif',
      heading: 'Dynamic Learning',
      description:
        'Engage with interactive content, and collaborate with peers and experienced instructors in real-time.',
    },
    {
      image: '/images/gateway2.jfif',
      heading: 'Live Interactive Class',
      description:
        'Take part in engaging educational experiences with dynamic interaction and real-time engagement.',
    },
    {
      image: '/images/gateway3.jfif',
      heading: 'Accessible Learning',
      description:
        'Access free programs and flexible learning, tailored to fit your busy schedule and learning pace.',
    },
    {
      image: '/images/gateway4.jfif',
      heading: 'Experienced Faculty',
      description:
        'Our seasoned subject matter experts are here to guide you with their knowledge base and practical insights!',
    },
    {
      image: '/images/gateway5.jfif',
      heading: 'Upskilling Programs',
      description:
        'Gain a competitive edge in the job market through programs that will propel you towards success in your field.',
    },
    {
      image: '/images/gateway6.jfif',
      heading: 'Doubt Support',
      description:
        'Get personalised guidance, from 9 AM to 9 PM, encompassing both theoretical concepts and practical applications.',
    },
  ];

  return (
    <div className="relative py-16 px-6 bg-gray-50">
      {/* Abstract Design Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-gradient-to-r from-gray-200 to-transparent rounded-br-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-gradient-to-l from-gray-200 to-transparent rounded-tl-3xl"></div>

      <div className="text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Your Gateway to Transformative Learning
        </h1>
        <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
          With innovative online classes led by seasoned instructors,
          personalized placement support, and access to expert faculty,
          BSkilling empowers you to unlock your full potential and achieve your
          career goals with confidence.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={feature.image}
              alt={feature.heading}
              className="w-full h-52 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800">
                {feature.heading}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gateway;
