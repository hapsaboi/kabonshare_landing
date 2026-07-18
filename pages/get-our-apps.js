'use client'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Downloads from '../components/Downloads'
import Footer from '../components/Footer'

export default function GetOurApps() {
  return (
    <>
      <Head>
        <title>Get Our Apps — KabonShare</title>
        <meta name="description" content="Download KabonShare apps for Android, iOS, Windows, macOS, and more. Publish to all your social channels from any device." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kabonshare.com/get-our-apps" />
        <meta property="og:title" content="Get Our Apps — KabonShare" />
        <meta property="og:description" content="Download KabonShare apps for Android, iOS, Windows, macOS, and more." />
        <meta property="og:url" content="https://kabonshare.com/get-our-apps" />
      </Head>
      <main className="min-h-screen bg-white">
        <Navbar />
        {/* Dark header so navbar text is visible before scroll */}
        <div className="bg-page pt-16" />
        <Downloads />
        <Footer />
      </main>
    </>
  )
}
