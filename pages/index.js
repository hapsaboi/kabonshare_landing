import Head from 'next/head'
import HeroNew from '../components/HeroNew'
import Features from '../components/Features'
import AIFeatures from '../components/AIFeatures'
import Analytics from '../components/Analytics'
import UseCases from '../components/UseCases'
import Platforms from '../components/Platforms'
import DeveloperExperience from '../components/DeveloperExperience'
import Pricing from '../components/Pricing'
import StatsTestimonials from '../components/StatsTestimonials'
import ContactSupport from '../components/ContactSupport'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>KabonShare — Publish Once, Reach Everyone</title>
        <meta name="description" content="Multi-platform social media publishing. Publish to Instagram, Facebook, Threads, TikTok, and YouTube from one dashboard or API. Schedule, manage, and grow your social presence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="social media management, multi-platform publishing, Instagram scheduling, TikTok publishing, YouTube publishing, Facebook API, Threads API, social media automation, content scheduling, KabonShare" />
        <link rel="canonical" href="https://kabonshare.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="KabonShare — Publish Once, Reach Everyone" />
        <meta property="og:description" content="Multi-platform social media publishing. Post to Instagram, Facebook, Threads, TikTok, and YouTube from one place." />
        <meta property="og:url" content="https://kabonshare.com" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="KabonShare — Publish Once, Reach Everyone" />
        <meta name="twitter:description" content="Multi-platform social media publishing. Post to Instagram, Facebook, Threads, TikTok, and YouTube from one place." />
      </Head>
      <main className="min-h-screen bg-white">
        <HeroNew />
        <Features />
        <AIFeatures />
        <Analytics />
        <Platforms />
        <UseCases />
        <DeveloperExperience />
        <Pricing />
        <StatsTestimonials />
        <ContactSupport />
        <Footer />
      </main>
    </>
  )
}
