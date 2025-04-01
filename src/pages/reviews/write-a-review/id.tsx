/* eslint-disable @next/next/no-img-element */
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GiveAReviewPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query; // Accessing the dynamic `id` parameter from the URL

  useEffect(() => {
    if (status === 'unauthenticated') {
      // If the user is not authenticated, redirect them to login
      signIn('linkedin');
    }
  }, [status]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p>Please sign in to leave a review.</p>;
  }

  return (
    <div className="container">
      <h1 className="text-xl font-bold mb-4">Give a Review for Item: {id}</h1>

      {/* Displaying the user's LinkedIn profile details */}
      <div className="profile-info">
        <h2 className="text-lg font-semibold">Hello, {session?.user?.name}</h2>
        <p>Email: {session?.user?.email}</p>
        {session?.user?.image && (
          <img
            src={session.user.image}
            alt="Profile"
            className="rounded-full w-20 h-20"
          />
        )}
      </div>

      {/* Your review form */}
      <div className="review-form mt-4">
        <textarea
          placeholder="Write your review here..."
          className="w-full h-32 border border-gray-300 p-2"
        />
        <button className="mt-2 bg-blue-500 text-white p-2 rounded">
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default GiveAReviewPage;
