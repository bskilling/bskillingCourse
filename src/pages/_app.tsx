import Layout from "components/Layout";
import { AppProps } from "next/app";
import "../../style/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>bSkilling</title>
        <meta name="bSkilling" content="bSkilling" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
