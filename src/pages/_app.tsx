import Layout from "components/Layout";
import { AppProps } from "next/app";
import "../../style/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Bskilling</title>
        <meta name="Bskilling" content="Bskilling" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
