import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { initAnalytics, capturePageview } from '../lib/analytics'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    initAnalytics()
    capturePageview() // initial load

    const handleRouteChange = () => capturePageview()
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      {/* Global viewport — without this, pages that don't set it render at
          desktop width on mobile and look zoomed-out / oversized. */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
