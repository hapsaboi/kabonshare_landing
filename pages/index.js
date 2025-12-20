import Head from 'next/head'
import HeroNew from '../components/HeroNew'
import Features from '../components/Features'
import UseCases from '../components/UseCases'
import Platforms from '../components/Platforms'
import Pricing from '../components/Pricing'
import DeveloperExperience from '../components/DeveloperExperience'
import StatsTestimonials from '../components/StatsTestimonials'
import ContactSupport from '../components/ContactSupport'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Media Share API - One API for All Social Media Platforms</title>
        <meta name="description" content="Professional API for Instagram, TikTok, YouTube, Facebook, Twitter & LinkedIn. Publish everywhere with one call. Trusted by 50K+ developers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="social media API, multi-platform publishing API, Instagram API integration, TikTok publishing API, social media automation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white">
        <HeroNew />
        <Features />
        <UseCases />
        <Platforms />
        <Pricing />
        <DeveloperExperience />
        <StatsTestimonials />
        <ContactSupport />
        <Footer />
      </main>
    </>
  )
}
