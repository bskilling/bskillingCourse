import Layout from "components/Layout";
import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import "../../style/globals.css";
import Head from "next/head";
import { MyProvider } from "context/PageContext";
import FloatWindow from "modules/leadChat/components/FloatWindow";

function MyApp({ Component, pageProps }: AppProps) {
  const [chatIconVisible, setChatIconVisible] = useState(false);
  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentDay = currentTime.getDay(); // Sunday: 0, Monday: 1, ..., Saturday: 6

    if (
      currentDay >= 1 && // Monday
      currentDay <= 5 && // Friday
      currentHour >= 10 &&
      currentHour < 18
    ) {
      const timeout = setTimeout(() => {
        setChatIconVisible(true);
      }, 4000);

      return () => clearTimeout(timeout);
    } else {
      setChatIconVisible(false);
    }
  }, []);
  return (
    <MyProvider>
      <Layout>
        <Head>
          <title>bSkilling</title>
          <meta name="bSkilling" content="bSkilling" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
        <FloatWindow />
      </Layout>
    </MyProvider>
  );
}

export default MyApp;
