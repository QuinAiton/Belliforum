import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
    return (
        <Html className='smooth-scroll'>
            <Head>
                <link href="dist/hamburgers.css" rel="stylesheet"></link>
                <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
