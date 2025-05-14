/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/next-script-for-ga */
import FixedFooterBar from '@/component/fixedFooterBar';
import Layout from '@/component//Layout';
import { MyProvider } from '@/component/context/PageContext';
import { motion } from 'framer-motion';
import useChat from '@/component/modules/leadChat/zustand';
// import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/compat/router';
import { useEffect, useState } from 'react';
import '../../style/globals.css';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { SessionProvider } from 'next-auth/react';

import { AppProps } from 'next/app';
import React, { Component } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <MyProvider>
            <Layout>
              <div>
                <Component {...pageProps} />
                <Toaster richColors position="top-right" />
              </div>
            </Layout>
          </MyProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </SessionProvider>
  );
}
