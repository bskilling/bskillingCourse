/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
interface RootObject {
  name: string;
  sub: string;
  locale: Locale;
  given_name: string;
  family_name: string;
  picture: string;
}
interface Locale {
  country: string;
  language: string;
}
export default function Profile() {
  const router = useRouter();
  const [userData, setUserData] = useState<RootObject | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchLinkedInData = async (code: string) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/auth/callback/linkedin?code=${code}`
        );
        setUserData(response.data); // Backend should return { name, image }
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    const code = router.query.code as string;
    if (code) {
      fetchLinkedInData(code);
    } else {
      setLoading(false);
    }
  }, [router.query.code]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {userData ? (
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <img src={userData.picture} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
          <h2 className="mt-4 text-xl font-semibold">{userData.name}</h2>
        </div>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
}
