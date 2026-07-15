import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
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

  return <Component {...pageProps} />
}
