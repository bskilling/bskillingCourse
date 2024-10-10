import React from 'react';

const Gateway = () => {
  const images = [
    '/images/gateway1.jfif',
    '/images/gateway2.jfif',
    '/images/gateway3.jfif',
    '/images/gateway4.jfif',
    '/images/gateway5.jfif',
    '/images/gateway6.jfif'
  ];
  const texts = [
    {
      heading: "Dynamic Learning",
      description: "Engage with interactive content, and collaborate with peers and experienced instructors in real-time.",
    },
    {
      heading: "Live Interactive Class",
      description: "Take part in engaging educational experiences with dynamic interaction and real-time engagement.",
    },
    {
      heading: "Accessible Learning",
      description: "Access free programs and flexible learning, tailored to fit your busy schedule and learning pace.",
    },
    {
      heading: "Experienced Faculty",
      description: "Our seasoned subject matter experts are here to guide you with their knowledge base and practical insights!",
    },
    {
      heading: "Upskilling Programs",
      description: "Gain a competitive edge in the job market through programs that will propel you towards success in your field.",
    },
    {
      heading: "Doubt Support",
      description: "Get personalised guidance, from 9 AM to 9 PM, encompassing both theoretical concepts and practical applications.",
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 mt-10 py-10">
      <div className="text-center mt-8">
        <h1 className="text-xl md:text-3xl font-bold">Your Gateway to Transformative Learning Experiences</h1>
        <p className="mt-4 text-sm md:text-sm">
          With innovative online classes led by seasoned instructors, personalised placement support, and access to expert <br/>
          faculty, BSkilling empowers you to unlock your full potential and achieve your career goals with confidence.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`gateway-${index + 1}`} className="w-full h-auto opacity-85" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-70 text-white">
              <h2 className="text-lg font-semibold text-center">{texts[index].heading}</h2>
              <p className="mt-2 text-sm text-center">{texts[index].description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gateway;
