import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import { initAnalytics, capturePageview, setAttribution } from '../lib/analytics'
import { captureAttribution } from '../lib/analytics/attribution'
import { useAttributionLinks } from '../lib/analytics/useAttributionLinks'
import { siteConfig } from '../config/siteConfig'

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Attribution first: it becomes a PostHog super-property, so every event
    // fired afterwards carries the campaign without each call site knowing.
    const attr = captureAttribution()

    initAnalytics()
    setAttribution(attr)
    capturePageview() // initial load

    const handleRouteChange = () => capturePageview()
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  // Re-stamp dashboard links after every navigation — Next replaces the DOM on
  // route change, so a one-time pass would only cover the first page.
  useAttributionLinks(siteConfig.dashboard, [router.asPath])

  return (
    <>
      {/* Global viewport — without this, pages that don't set it render at
          desktop width on mobile and look zoomed-out / oversized. */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Meta domain verification. Required before Aggregated Event
            Measurement will let us rank Purchase as the priority event — without
            it, Apple's privacy rules leave us on Meta's default ranking. */}
        <meta name="facebook-domain-verification" content="wop5lbf56c4drcsfya3ds0bk3zknxf" />
      </Head>

      {/* Meta Pixel.
          `afterInteractive` so it never blocks first paint — this is an ad
          landing page and load time is the campaign's cost of entry.
          Renders nothing at all when the env var is unset, so dev and any
          un-configured environment stay clean. The snippet stubs `fbq` before
          the library arrives, so events fired early are queued, not lost. */}
      {META_PIXEL_ID && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      <Component {...pageProps} />
    </>
  )
}
