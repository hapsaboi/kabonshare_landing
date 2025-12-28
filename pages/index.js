import Head from 'next/head'
import HeroNew from '../components/HeroNew'
import Features from '../components/Features'
import UseCases from '../components/UseCases'
import Platforms from '../components/Platforms'
import DeveloperExperience from '../components/DeveloperExperience'
import StatsTestimonials from '../components/StatsTestimonials'
import ContactSupport from '../components/ContactSupport'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Media Share - Publish Once, Reach Everyone</title>
        <meta name="description" content="Multi-platform social media publishing API and app. Publish to Instagram, Facebook, Threads, TikTok, and YouTube with one API. Includes OAuth, scheduling, asset library, and workspaces." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="social media API, multi-platform posting, Instagram API, TikTok API, YouTube API, Facebook API, Threads API, social media automation, content management API, developer tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white">
        <HeroNew />
        <Features />
        <UseCases />
        <Platforms />
        <DeveloperExperience />
        <StatsTestimonials />
        <ContactSupport />
        <Footer />
      </main>
    </>
  )
}
