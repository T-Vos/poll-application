import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/layout/footer';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Poll-application</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  );
}

export default MyApp;