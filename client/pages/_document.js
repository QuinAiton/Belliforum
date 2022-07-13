import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <title> Accelerate your vision with Belliforum</title>
        <meta
          name="description"
          content="Belliforum connects successful entrepreneurs with the country’s best strategic partners in tax planning, business succession planning, partnerships, philanthropy, and private equity. We work to compliment your current team and optimize your goals to accelerate your vision."
        ></meta>
        <meta name="robots" content="index, about"></meta>
        <link href="dist/hamburgers.css" rel="stylesheet"></link>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
