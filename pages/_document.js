import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Apply the saved theme before paint to avoid a light/dark flash.
            No stored choice → leaves data-theme unset so the OS preference
            (prefers-color-scheme media query) wins. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Analytics — Plausible (privacy-friendly, no cookies) */}
        <script defer data-domain="kabonshare.com" src="https://plausible.io/js/script.js"></script>

        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Blog RSS feed */}
        <link rel="alternate" type="application/rss+xml" title="KabonShare Blog" href="/rss.xml" />

        {/* Default OG tags (pages can override) */}
        <meta property="og:site_name" content="KabonShare" />
        <meta property="og:type" content="website" />
        {/* 1200x630. WhatsApp, Twitter and LinkedIn all crop to ~1.91:1 — the
            old square logo.png got letterboxed into a card instead of filling
            it, which is why the preview showed an icon rather than a banner.
            Declaring width/height lets WhatsApp render the card immediately
            instead of waiting to fetch and measure the file. */}
        <meta property="og:image" content="https://kabonshare.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="KabonShare — publish once, reach everyone" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kabonshare" />
        <meta name="twitter:image" content="https://kabonshare.com/og-image.png" />

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
              name: 'KabonShare',
              alternateName: 'Kabon Share',
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
