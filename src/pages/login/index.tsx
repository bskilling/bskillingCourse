// import axios from 'axios';
// import { useRouter } from 'next/router';
// import React, { Suspense, useEffect, useMemo } from 'react';

export default function Login() {
  // const router = useRouter();
  // const searchParams = router;
  // // const { query } = router;

  // const query = useMemo(() => {
  //   return {
  //     // @ts-expect-error
  //     token: searchParams.token,
  //   };
  // }, [searchParams]);

  // async function getAuthorization() {
  //   try {
  //     const res = axios.post(
  //       process.env.NEXT_PUBLIC_TRAINING_BASE_URL + 'api/v1/authorisation' + `?token=${query.token}`
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   if (query?.token) {
  //     getAuthorization();
  //     return;
  //   }
  //   window.location.href = 'https://bskilling.edmingle.com/login';
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query]);

  return (
    <div>
      <h1 className="text-3xl text-center">Login</h1>
    </div>
  );
}
