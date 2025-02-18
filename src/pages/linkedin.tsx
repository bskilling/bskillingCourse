import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const LinkedInLogin = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleLogin = () => {
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID}&redirect_uri=http://localhost:3000/profile&scope=openid%20profile`;

    // Redirect the user to LinkedIn OAuth page
    window.location.href = authUrl;
  };

  const fetchLinkedInData = async (code: string) => {
    setLoading(true);
    try {
      // Call the backend to exchange the code for user data
      const response = await axios.get(
        `http://localhost:3001/api/auth/callback/linkedin?code=${code}`
      );
      setUserData(response.data); // Save user data to state
    } catch (err) {
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  // Check for the authorization code in the URL query params when the page loads
  if (
    typeof window !== 'undefined' &&
    window.location.search.includes('code=')
  ) {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      fetchLinkedInData(code); // Fetch user data with the code
    }
  }

  return (
    <div>
      {!userData ? (
        <div>
          <button onClick={handleLogin}>Login with LinkedIn</button>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </div>
      ) : (
        <div>
          <h2>Welcome, {userData.name}</h2>
          <img src={userData.image} alt="Profile" />
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default LinkedInLogin;

// // review form . and linkedin login INTEGRATION FUNCTIONALITY
// import { signIn, signOut, useSession } from 'next-auth/react';

// const LinkedInLogin = () => {
//   const { data: session } = useSession();

//   return (
//     <div className="flex flex-col items-center">
//       {session ? (
//         <div>
//           <h2>Welcome, {session.user?.name}</h2>
//           <img src={session.user?.image || ''} alt="Profile" />
//           <p>Email: {session.user?.email}</p>
//           <button
//             onClick={() => signOut()}
//             className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <button
//           onClick={() => signIn('linkedin')}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Login with LinkedIn
//         </button>
//       )}
//     </div>
//   );
// };

// export default LinkedInLogin;
