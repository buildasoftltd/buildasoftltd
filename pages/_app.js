import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={'Buildasoft Ltd'} />
        <meta property="og:image" content={'/buildasoft-logos_white.png'} />
        <meta property="og:image:alt" content={`Buildasoft Ltd Logo`} />
        <meta
          property="og:description"
          content="Innovative software solutions for a brighter digital future."
        />
        <link rel="icon" href="/buildasoft-logos_white.png" />
        <title>Buildasoft Ltd |</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
