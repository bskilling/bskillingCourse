import FixedFooterBar from "components/fixedFooterBar";
import Layout from "components/Layout";
import { MyProvider } from "context/PageContext";
import { motion } from "framer-motion";
import useChat from "modules/leadChat/zustand";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../../style/globals.css";



function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
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
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      setFloatWindowMode("drop-a-query");
    }, 4000);

    return () => clearTimeout(timer);
  }, [route.pathname]);

  useEffect(() => {

    var styles = document.createElement("style");
    styles.innerHTML = `
      body .zsiq_floatmain {
        right: 40px !important;
        bottom: 50px !important;
      }
    `;
    document.head.appendChild(styles);
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
          {/* Facebook meta tag */}
          <meta property="og:title" content="bSkilling | Online Courses - Live Training and Certifications" />
          <meta property="og:description" content="Unlock success with bSkilling online courses and live training. Get certified in Generative AI, SAP BTP, Cloud Engineering, Prince2, PMP" />
          <meta property="og:image" content="https://www.bskilling.com/icon/facebook.svg" />
          <meta property="og:url" content="www.bskilling.com" />
          {/* facebook meta tag end */}

          {/* Twitter meta tags start */}
          <meta name="twitter:title" content="bSkilling | Online Courses - Live Training and Certifications" />
          <meta name="twitter:description" content="Unlock success with bSkilling online courses and live training. Get certified in Generative AI, SAP BTP, Cloud Engineering, Prince2, PMP" />
          <meta name="twitter:url" content="www.bskilling.com" />
          <meta name="twitter:card" content="summary" />
          {/* Twitter meta tags end */}

          <link rel="icon" href="/favicon.png" />
          {/* google tag manager start */}
          <script
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
            
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NT8WHZQZ"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* google Tag Manager End */}

          {/* salesIQ */}
          <script
            type="text/javascript"
            id="zsiqchat"
            dangerouslySetInnerHTML={{
              __html: `
                var $zoho = $zoho || {};
                $zoho.salesiq = $zoho.salesiq || {widgetcode: "siq808c9f0aec2179e3f6906ceb24906ee03d4fd55ab3a9515426e3ab8d00e568a0a8dd3011def5604c4779c2e3a5c0effa", values: {}, ready: function(){}};
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
          
          <script type="text/javascript"
            async
            src="https://crmplus.zoho.com/crm/javascript/zcga.js"
          ></script>
          
        </Head>

        <Component {...pageProps} />
        {/* <FloatWindow /> */}

        

        {showFixedFooter && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, ease: "easeInOut" }}
          >
            <FixedFooterBar />
          </motion.div>
        )}
      </Layout>
    </MyProvider>
  );
}

export default MyApp;
