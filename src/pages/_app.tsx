import FixedFooterBar from 'components/fixedFooterBar';
import Layout from 'components/Layout';
import { MyProvider } from 'context/PageContext';
import { motion } from 'framer-motion';
import useChat from 'modules/leadChat/zustand';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import '../../style/globals.css';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Toaster } from 'sonner';
function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());
  const {
    floatWindowMode,
    isChatFormVisible,
    setFloatWindowMode,
    setupSocket,
    instanceState,
    closeChat,
  } = useChat();
  const [chatIconVisible, setChatIconVisible] = useState(false);
  const [showFixedFooter, setShowFixedFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const halfScreenHeight = window.innerHeight / 4.9;

      if (scrollPosition >= halfScreenHeight) {
        setShowFixedFooter(true);
      } else {
        setShowFixedFooter(false);
      }
    }

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setFloatWindowMode('drop-a-query');
    }, 4000);

    return () => clearTimeout(timer);
  }, [route.pathname]);

  useEffect(() => {
    var styles = document.createElement('style');
    styles.innerHTML = `
      body .zsiq_floatmain {
        right: 40px !important;
        bottom: 50px !important;
      }
    `;
    document.head.appendChild(styles);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
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
              {/* Facebook meta tag */}
              <meta
                property="og:title"
                content="bSkilling | Online Courses - Live Training and Certifications"
              />
              <meta
                property="og:description"
                content="Unlock success with bSkilling online courses and live training. Get certified in Generative AI, SAP BTP, Cloud Engineering, Prince2, PMP"
              />
              <meta
                property="og:image"
                content="https://www.bskilling.com/icon/facebook.svg"
              />
              <meta property="og:url" content="www.bskilling.com" />
              {/* facebook meta tag end */}
              {/* Twitter meta tags start */}
              <meta
                name="twitter:title"
                content="bSkilling | Online Courses - Live Training and Certifications"
              />
              <meta
                name="twitter:description"
                content="Unlock success with bSkilling online courses and live training. Get certified in Generative AI, SAP BTP, Cloud Engineering, Prince2, PMP"
              />
              <meta name="twitter:url" content="www.bskilling.com" />
              <meta name="twitter:card" content="summary" />
              {/* Twitter meta tags end */}
              <meta
                name="google-site-verification"
                content="l3AerOmZFQ8qlPqtZ64bYdtXuKO2QrMD_R1jtzpSlVo"
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5H7RHNRM');`,
                }}
              />
              <link rel="icon" href="/favicon.png" />
              {/* google tag manager start */}
              {/*           <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-R3LT63CRN0"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R3LT63CRN0');
            `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NT8WHZQZ');
              `,
            }}
          /> 
      <noscript> 
            
          //   <iframe
          //     src="https://www.googletagmanager.com/ns.html?id=GTM-NT8WHZQZ"
          //     height="0"
          //     width="0"
          //     style={{ display: 'none', visibility: 'hidden' }}
          //   ></iframe>
          // </noscript>
          {/* google Tag Manager End */}
              {/*<!--Start of Tawk.to Script--> */}
              {/* <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}</script><script id="zsiqscript" src="https://salesiq.zohopublic.com/widget?wc=siqba043d49321d330a04edd51b439e5f75969a208346e176c79254bd8b093846bc" defer`,
            }}
          /> */}
              {/* <script
            type="text/javascript" 
            dangerouslySetInnerHTML={{
              __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/67358add4304e3196ae263e8/1ickicsdv';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })(); `,
            }}
          /> */}
              {/*<!--End of Tawk.to Script-->*/}=
              <script
                type="text/javascript"
                id="zsiqchat"
                dangerouslySetInnerHTML={{
                  __html: `
                var $zoho = $zoho || {};
                $zoho.salesiq = $zoho.salesiq || {widgetcode: "siqba043d49321d330a04edd51b439e5f75969a208346e176c79254bd8b093846bc", values: {}, ready: function(){}};
                var d = document;
                var s = d.createElement("script");
                s.type = "text/javascript";
                s.id = "zsiqscript";
                s.defer = true;
                s.src = "https://salesiq.zohopublic.com/widget";
                var t = d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s, t);
                var styles = document.createElement("style");
                
              `,
                }}
              />
              <script
                type="text/javascript"
                async
                src="https://crmplus.zoho.com/crm/javascript/zcga.js"
              ></script>
            </Head>
            <>
              <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-5H7RHNRM"
                  height="0"
                  width="0"
                  style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
              </noscript>

              <Component {...pageProps} />
              <Toaster />
            </>
          </Layout>
        </MyProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}

export default MyApp;
// import { AppProps } from 'next/app'
// import React, { Component } from 'react'

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <div>
//       <Component {...pageProps} />
//     </div>
//   )
// }
