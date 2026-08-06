import Head from 'next/head'
import HeroNew from '../components/HeroNew'
import Features from '../components/Features'
import AIFeatures from '../components/AIFeatures'
import Analytics from '../components/Analytics'
import UseCases from '../components/UseCases'
import Platforms from '../components/Platforms'
import DeveloperExperience from '../components/DeveloperExperience'
import ContactSupport from '../components/ContactSupport'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>KabonShare — Publish Once, Reach Everyone</title>
        <meta name="description" content="Multi-platform social media publishing across 9 networks. Publish to Instagram, TikTok, YouTube, Facebook, X, Threads, LinkedIn, Bluesky and Pinterest from one place. Schedule, manage and grow from one dashboard or API." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="social media management, multi-platform publishing, Instagram scheduling, TikTok publishing, YouTube publishing, Facebook API, Threads API, LinkedIn publishing, Bluesky, Pinterest scheduling, X Twitter publishing, social media automation, content scheduling, KabonShare" />
        <link rel="canonical" href="https://kabonshare.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="KabonShare — Publish Once, Reach Everyone" />
        <meta property="og:description" content="Publish once, reach 9 networks. Publish to Instagram, TikTok, YouTube, Facebook, X, Threads, LinkedIn, Bluesky and Pinterest from one place." />
        <meta property="og:url" content="https://kabonshare.com" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="KabonShare — Publish Once, Reach Everyone" />
        <meta name="twitter:description" content="Publish once, reach 9 networks. Publish to Instagram, TikTok, YouTube, Facebook, X, Threads, LinkedIn, Bluesky and Pinterest from one place." />
      </Head>
      <main className="min-h-screen bg-page">
        <HeroNew />
        <Features />
        <AIFeatures />
        <Analytics />
        <Platforms />
        <UseCases />
        <DeveloperExperience />
        <ContactSupport />
        <Footer />
      </main>
    </>
  )
}
