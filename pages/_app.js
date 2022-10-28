import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <title>Smart Attendance </title> */}
        <meta name="description" content="This is how we do it." />
        <link rel="icon" href="/icons8-immigration-64.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
