/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { FaLinkedin, FaStar } from 'react-icons/fa'; // Import icons
import axios from 'axios';
import { useRouter } from 'next/compat/router';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import NavbarSection from '@/component/navbar/NavbarSection';
import Head from 'next/head';

export async function getServerSideProps() {
  return {
    props: {
      title: 'Share Your Feedback - bSkilling',
      description: 'Help us improve by sharing your review on bSkilling!',
      image: '/public/place.png', // Change to actual image URL
      url: 'https://i.postimg.cc/Nfpgwnq0/Teal-And-White-Modern-Client-Testimonial-Instagram-Post.png',
    },
  };
}

const fetchReviews = async (page: number) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/reviews?page=${page}&limit=9&isPublished=true`
  );
  return data;
};

const LinkedInLogin = ({ title, description, image, url }: any) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const router = useRouter();

  const [page, setPage] = useState(1);

  const {
    data: reviews,
    isLoading,
    isError,
    error: err,
  } = useQuery({
    queryKey: ['reviews', page],
    queryFn: () => fetchReviews(page),
  });

  // if (isLoading) return <p className="text-center">Loading reviews...</p>;
  // if (isError)
  //   return <p className="text-red-500 text-center">{(err as Error).message}</p>;

  const handleLogin = () => {
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URL}&scope=openid%20profile`;

    // Redirect the user to LinkedIn OAuth page
    window.location.href = authUrl;
  };

  const fetchLinkedInData = async (code: string) => {
    setLoading(true);
    try {
      // Call the backend to exchange the code for user data
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/auth/callback/linkedin?code=${code}`
      );
      setUserData(response.data); // Save user data to state
      setDialogOpen(false); // Close dialog after successful fetch
    } catch (err) {
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  // Check for the authorization code in the URL query params when the page loads
  if (typeof window !== 'undefined' && window.location.search.includes('code=')) {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      fetchLinkedInData(code); // Fetch user data with the code
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <div className="sticky top-0 z-[50] bg-card shadow-md">
        <nav className="text-[#1f1f1f] bg-card 2xl:w-[80vw] px-5  md:w-[90vw] w-full 2xl:m-auto flex justify-between items-center text-sm font-medium md:py-2  ">
          <div className="text-3xl font-bold inline-flex items-center">
            <Link href="/">
              <div className="relative w-[80px] h-[30px] md:w-[150px] md:h-[50px] ">
                <img src="/logo.png" alt="Logo" className="object-cover" />
              </div>
            </Link>
          </div>
          <NavbarSection />
        </nav>
      </div>
      <div className="min-h-screen bg-gray-50">
        {/* Banner Section */}
        <div className="bg-blue-600 text-white py-20 text-center">
          <h2 className="text-4xl font-semibold">We&apos;d Love Your Feedback!</h2>
          <p className="mt-3 text-lg">
            Share your experience by writing a review with your LinkedIn profile.
          </p>
          <button
            className="bg-white text-blue-600 flex items-center p-4 rounded-lg text-xl mt-6 hover:bg-gray-200 transition duration-200 mx-auto"
            onClick={handleLogin}
          >
            {/* <FaLinkedin className="mr-3" size={24} /> Proceed to LinkedIn Login */}
            Give a Feedback
          </button>
        </div>

        {/* Reviews Section */}
        <div className="container mx-auto md:px-6 px-3  py-12 pb-0">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            What People Are Saying
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {reviews?.reviews?.map((review: any, index: number) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center">
                  <img
                    src={review.userProfilePic}
                    alt={review.userName}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{review.userName}</h3>
                    <a
                      href={review.linkedinProfile}
                      target="_blank"
                      className="text-blue-500 text-sm"
                    >
                      View LinkedIn
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <h4 className="text-xl font-medium mt-2">{review.title}</h4>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
          {reviews?.reviews.length === 0 && (
            <div className="flex justify-center items-center  bg-gray-50">
              <h2 className="text-3xl font-semibold text-blue-500 mt-20">No Reviews Yet</h2>
            </div>
          )}
          {/* Load More Button */}
          {page < reviews?.totalPages && (
            <div className="flex justify-center mt-8">
              {/* <button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800 transition duration-200"
                onClick={loadMoreReviews}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More'}
              </button> */}
              <button
                onClick={() => setPage(prev => prev + 1)}
                disabled={reviews?.reviews.length === 0}
                className="bg-blue-600 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-800"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LinkedInLogin;
