// pages/auth.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AuthPage = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchTokens = async () => {
      const code = router.query.code as string;

      if (!code) return;

      try {
        const res = await axios.post('/api/zoho/exchange-token', { code });
        console.log('✅ Tokens fetched:', res.data);

        // Redirect or notify
        // router.push('/dashboard'); // or wherever you want
      } catch (error: any) {
        console.error('❌ Failed to fetch tokens', error.response?.data || error.message);
      }
    };

    if (router.isReady) {
      fetchTokens();
    }
  }, [router.isReady, router.query.code]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-xl font-bold text-gray-700">Authenticating with Zoho...</h1>
        <p className="text-sm text-gray-500 mt-2">Please wait, we're logging you in 🔐</p>
      </div>
    </div>
  );
};

export default AuthPage;
