import Layout from "components/Layout";
import { AppProps } from "next/app";
import "../../style/globals.css";
import Head from "next/head";
import { MyProvider } from "context/PageContext";
import FloatWindow from "modules/leadChat/components/FloatWindow";
function MyApp({ Component, pageProps }: AppProps) {
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
