import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Next Eventos app</title>
        <meta name='description' content='Next js eventos' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
