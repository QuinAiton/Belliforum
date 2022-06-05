import '../styles/globals.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link href="dist/hamburgers.css" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
