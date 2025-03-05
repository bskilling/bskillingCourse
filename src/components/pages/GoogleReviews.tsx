'use client';
import { Star, MessageCircle } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleReviews() {
  // Static Data
  const placeId = process.env.NEXT_PUBLIC_PLACE_ID; // Replace with your actual Place ID
  const rating = 4.5;
  const totalReviews = 34;
  const reviews = [
    {
      author_name: 'Budha Dev',
      local_guide: true,
      reviews_count: 5,
      photos_count: 15,
      rating: 5,
      text: 'I recently completed the Cloud Engineering course on bSkilling, and I must say it exceeded my expectations. The content was comprehensive, covering everything from basic concepts to advanced techniques. The hands-on labs were particularly valuable, providing real-world experience in setting up and managing cloud infrastructure. The instructors were knowledgeable and supportive, always available to answer questions and provide guidance. Overall, I highly recommend this course to anyone looking to build a solid foundation in cloud engineering.',
      time: 'a year ago',
    },
    {
      author_name: 'Ayesha Yousufee',
      local_guide: true,
      reviews_count: 11,
      photos_count: 27,
      rating: 5,
      text: "Bskilling offers the best cloud engineering courses. From fundamentals to advanced topics, their curated content and expert instructors ensure you're equipped for success in this dynamic field.",
      time: 'a year ago',
    },
    {
      author_name: 'Pradheep Eswaramoorthi',
      reviews_count: 4,
      rating: 5,
      text: "I'm Pradheep from Non IT background, my friend referred this institute I joined here SAP BTP course. The training went well the concepts are clearly delivered with practical examples. Every day task helped me a lot. I got good knowledge. SAP BTP is easy and interesting, end of the course I'm satisfied with the training.",
      time: 'a year ago',
    },
    {
      author_name: 'COMPUTER BY VIRENDER',
      reviews_count: 5,
      rating: 5,
      text: "Bskilling's learning platform is a game-changer. As a trainer, I appreciate the platform's user-friendly interface and robust features that enhance the training experience. It's a valuable resource for both trainers and learners.",
      time: 'a year ago',
    },
    {
      author_name: 'Ashwin ks',
      reviews_count: 1,
      rating: 5,
      text: 'Instructors are Experienced trainers - clear, helpful, and patient. Course content is spot-on for real-world applications. Highly recommend for anyone diving into cloud tech!',
      time: 'a year ago',
    },
  ];

  return (
    <div className=" pt-0 max-w-lg bg-gray-900 text-white shadow-lg rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex  gap-2">
          <FcGoogle size={24} />
          Google Reviews
        </h2>
      </div>

      {/* Rating Overview */}
      <div className="flex items-center text-lg font-semibold">
        <span className="ml-1">{rating.toFixed(1)}</span>
        <div className="flex items-center gap-x-1 pl-4">
          <FaStar className="text-yellow-400" size={20} />
          <FaStar className="text-yellow-400" size={20} />
          <FaStar className="text-yellow-400" size={20} />
          <FaStar className="text-yellow-400" size={20} />
          <FaRegStarHalfStroke className="text-yellow-400" size={20} />
        </div>
        {/* <span className="text-gray-400 ml-2">({totalReviews} reviews)</span> */}
      </div>

      <div className="mt-6">
        <a
          href={`https://search.google.com/local/reviews?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 "
        >
          (34) View More Reviews on Google
        </a>
      </div>
    </div>
  );
}
