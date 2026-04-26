import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Analytics — Plausible (privacy-friendly, no cookies) */}
        <script defer data-domain="kabonshare.com" src="https://plausible.io/js/script.js"></script>

        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Default OG tags (pages can override) */}
        <meta property="og:site_name" content="KabonShare" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kabonshare.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kabonshare" />
        <meta name="twitter:image" content="https://kabonshare.com/logo.png" />

        {/* Theme color */}
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'KabonShare',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, Android, iOS',
              description: 'Multi-platform social media publishing. Publish to Instagram, Facebook, Threads, TikTok, and YouTube from one platform.',
              url: 'https://kabonshare.com',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free tier available'
              },
              author: {
                '@type': 'Organization',
                name: 'KabonShare',
                url: 'https://kabonshare.com',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '13A Hospital Road, Yola North',
                  addressLocality: 'Adamawa State',
                  addressCountry: 'NG'
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+234-903-332-6993',
                  contactType: 'customer service',
                  email: 'support@kabonshare.com'
                }
              }
            })
          }}
        />

        {/* WebSite schema — tells Google to use "KabonShare" as the site name instead of the domain */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Kabon Share',
              alternateName: 'KabonShare',
              url: 'https://kabonshare.com',
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
