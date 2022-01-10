import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "react-loading-skeleton/dist/skeleton.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>dream's website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/images/dream" />
        <meta name="og:title" content="dream's website" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="dreamstudio.me" />
          <meta name="og:description" content="dream#3387's portfolio" />
          <meta name="og:image" content="/images/ogimage" />
      </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp