/* eslint-disable @next/next/no-img-element */
'use client';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleReviews() {
  const placeId = process.env.NEXT_PUBLIC_PLACE_ID;
  const rating = 4.5;
  const totalReviews = 34;

  return (
    <div className="max-w-md bg-transparent   rounded-xl pt-0 mt-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <FcGoogle size={22} />
        <h2 className="text-sm">Google Reviews</h2>
      </div>

      {/* Rating Overview */}
      <div className="flex items-center text-base font-medium">
        <span className="ml-1">{rating.toFixed(1)}</span>
        <div className="flex items-center gap-1 pl-3">
          <FaStar className="text-yellow-400" size={18} />
          <FaStar className="text-yellow-400" size={18} />
          <FaStar className="text-yellow-400" size={18} />
          <FaStar className="text-yellow-400" size={18} />
          <FaRegStarHalfStroke className="text-yellow-400" size={18} />
        </div>
      </div>

      {/* Review Link */}
      <div className="mt-3">
        <a
          href={`https://g.page/r/CXYsGIz6BzjzEBM/review`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400  text-sm"
        >
          Rate Us on Google
        </a>
      </div>
      <div className="flex gap-4 flex-wrap mt-5">
        {[
          {
            name: 'Instagram',
            icon: '/icon/insta.svg',
            link: 'https://www.instagram.com/bskillingindia/',
          },
          {
            name: 'Facebook',
            icon: '/icon/facebook.svg',
            link: 'https://www.facebook.com/bskillingindia/',
          },
          {
            name: 'LinkedIn',
            icon: '/icon/link.svg',
            link: 'https://www.linkedin.com/company/bskillingindia/',
          },
          {
            name: 'Twitter',
            icon: '/twitter.webp',
            link: 'https://twitter.com/b_SkillingIndia',
          },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            className="hover:opacity-75 transition"
          >
            <img src={social.icon} alt={social.name} className="w-7 h-7" />
          </a>
        ))}
      </div>

      {/* Address */}
    </div>
  );
}
