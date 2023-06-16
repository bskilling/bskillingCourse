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
          <meta
            name="bSkilling"
            content="bSkilling is a pioneer in technology training and we focus on
                offering top-notch IT and fintech education and skill
                development programs. We work hard to help people and
                organizations with the information and skills necessary to
                prosper in the quickly changing digital landscape. We aim and
                deliver excellence in all fields."
          />
          <meta
            name="p:domain_verify"
            content="7bb84546e514612864b5b9d71d1649e4"
          />
          <link rel="icon" href="/favicon.png" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-3PVZC9K8BH"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3PVZC9K8BH');
            `,
            }}
          />
        </Head>

        <Component {...pageProps} />
        <FloatWindow />
      </Layout>
    </MyProvider>
  );
}

export default MyApp;
