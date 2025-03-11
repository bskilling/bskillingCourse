'use client';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleReviews() {
  const placeId = process.env.NEXT_PUBLIC_PLACE_ID;
  const rating = 4.5;
  const totalReviews = 34;

  return (
    <div className="max-w-md bg-transparent text-white  rounded-xl p-4 pr-8 pt-0">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <FcGoogle size={22} />
        <h2 className="text-lg font-semibold">Google Reviews</h2>
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
          href={`https://search.google.com/local/reviews?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline text-sm"
        >
          ({totalReviews}) View More Reviews on Google
        </a>
      </div>

      {/* Address */}
      <div>
        <p className="text-sm text-gray-300 leading-relaxed">
          B-Block 4th Floor, COMMERCIAL BUILDING, UMA SREE DREAM WORLD, Unit -2,
          Hosur Rd, Kudlu Gate, Industrial Layout, Garvebhavi Palya, Bengaluru,
          Karnataka 560068
        </p>
      </div>
    </div>
  );
}
