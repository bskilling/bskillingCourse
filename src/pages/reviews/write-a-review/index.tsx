/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/compat/router';
import axios from 'axios';
import ReviewForm from '@/components/global/ReviewForm';
import Link from 'next/link';
import NavbarSection from '@/component/navbar/NavbarSection';
import { FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
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
          `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/auth/callback/linkedin?code=${code}`
        );
        setUserData(response.data); // Backend should return { name, image }
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    const code = router?.query.code as string;
    if (code) {
      fetchLinkedInData(code);
    } else {
      setLoading(false);
    }
  }, [router?.query.code]);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div>
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
        <div className="min-h-[60vh]">
          <p className="text-4xl text-center mt-40">
            <FaLinkedin size={40} className="text-blue-600 text-center m-auto my-5 bg-card" />
            Something Went Wrong!!
          </p>
          <div className="flex flex-col justify-center ">
            <p className="text-center my-4">
              Profile Fetching from linkedin failed. Please try again or contact our team
            </p>
            <Button onClick={() => router?.back()} className="m-auto text-center">
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );

  return (
    <>
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
      <div className="flex flex-col items-center justify-center min-h-screen">
        {userData && (
          <ReviewForm
            user={{
              name: userData?.name || '',
              profilePic: userData?.picture || '',
            }}
          />
        )}
        {/* {!userData && !loading && !error && (
          <>
            <div>
              <div className="sticky top-0 z-[50] bg-card shadow-md">
                <nav className="text-[#1f1f1f] bg-card 2xl:w-[80vw] px-5  md:w-[90vw] w-full 2xl:m-auto flex justify-between items-center text-sm font-medium md:py-2  ">
                  <div className="text-3xl font-bold inline-flex items-center">
                    <Link href="/">
                      <div className="relative w-[80px] h-[30px] md:w-[150px] md:h-[50px] ">
                        <img
                          src="/logo.png"
                          alt="Logo"
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  </div>
                  <NavbarSection />
                </nav>
              </div>
              <div className="min-h-[60vh]">
                <p className="text-4xl text-center mt-40">
                  <FaLinkedin
                    size={40}
                    className="text-blue-600 text-center m-auto my-5 bg-card"
                  />
                  Something Went Wrong!!
                </p>
                <div className="flex flex-col justify-center ">
                  <p className="text-center my-4">
                    Profile Fetching from linkedin failed. Please try again or
                    contact our team
                  </p>
                  <Button
                    onClick={() => router?.back()}
                    className="m-auto text-center"
                  >
                    Go Back
                  </Button>
                </div>
              </div>
            </div>
          </>
        )} */}
      </div>
    </>
  );
}
