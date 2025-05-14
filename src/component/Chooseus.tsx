import Link from 'next/link';
import { Briefcase, Users, GraduationCap, Shield } from 'lucide-react';
import React from 'react';

const Chooseus = () => {
  const features = [
    {
      icon: <Briefcase size={40} className="text-blue-500" />, // Adjusted color to match theme
      title: '13+ Years of Experience',
      description: 'Empowering individuals with top-tier technical training and placement support.',
    },
    {
      icon: <Users size={40} className="text-purple-500" />,
      title: 'Expert Mentors',
      description: 'Learn from seasoned industry professionals with real-world expertise.',
    },
    {
      icon: <GraduationCap size={40} className="text-green-500" />,
      title: 'Interactive Learning',
      description: 'Engage in dynamic online classes with hands-on experience and projects.',
    },
    {
      icon: <Shield size={40} className="text-red-500" />,
      title: 'Guaranteed Placement Assistance',
      description: 'We provide personalized support to help you secure your dream job.',
    },
  ];

  return (
    <div className="relative w-full px-6 md:px-12 py-12 rounded-2xl shadow-lg flex flex-col items-center text-center bg-gradient-to-br from-blue-900 to-blue-600 text-white overflow-hidden">
      {/* Background Geometrical Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-40 h-40 bg-white/10 rounded-full absolute top-10 left-10"></div>
        <div className="w-24 h-24 bg-white/10 rounded-full absolute bottom-10 right-10"></div>
        <div className="w-32 h-32 bg-white/10 rotate-45 absolute top-20 right-1/4"></div>
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold mb-6">WHY CHOOSE US?</h1>
      <p className="text-lg max-w-2xl mb-8 text-gray-200">
        bSkilling is your go-to destination for comprehensive technical training, development, and
        placement solutions. Join us to enhance your skills and advance your career with expert
        guidance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex items-center space-x-4 p-6 bg-white/20 backdrop-blur-md shadow-lg rounded-xl transform transition-all hover:scale-105"
          >
            <div>{feature.icon}</div>
            <div className="text-left">
              <h2 className="text-lg font-semibold">{feature.title}</h2>
              <p className="text-sm text-gray-200">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/aboutus">
        <button className="mt-8 px-8 py-3 bg-yellow-400 text-black font-medium text-lg rounded-full shadow-md transition duration-300 hover:bg-yellow-500 hover:shadow-lg">
          Know More
        </button>
      </Link>
    </div>
  );
};

export default Chooseus;
