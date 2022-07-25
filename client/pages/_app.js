import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Head>
        <title> Accelerate your vision with Belliforum</title>
        <meta
          name="description"
          content="Belliforum connects successful entrepreneurs with the country’s best strategic partners in tax planning, business succession planning, partnerships, philanthropy, and private equity. We work to compliment your current team and optimize your goals to accelerate your vision."
        ></meta>
        <meta name="robots" content="index, about"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
