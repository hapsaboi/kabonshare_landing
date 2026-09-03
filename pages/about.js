'use client'
import Head from 'next/head'
import LegalPage from '../components/LegalPage'
import { siteConfig } from '../config/siteConfig'

const LAST_UPDATED = 'September 2, 2026'

/**
 * About Us.
 *
 * Serves two readers at once. A prospective customer wants to know what the
 * product does and who it is for; a payment provider's KYB review wants to
 * confirm a real, identifiable company operates the site and that the entity
 * named here matches the one holding the merchant account.
 *
 * Ordered for the first reader and complete for the second: product and
 * audience first, registered company details last. Every fact here is sourced
 * from siteConfig or the Terms, so the pages cannot contradict each other —
 * which is the thing a reviewer actually checks.
 */
const sections = [
  {
    id: 'what-we-do',
    title: 'What KabonShare Is',
    content: [
      {
        text: 'KabonShare is a social media management platform. It lets one person — or a whole team — plan, schedule and publish content to every major social network from a single place, instead of posting to each app by hand.',
      },
      {
        text: 'The platform supports nine networks:',
        items: [
          'Instagram, TikTok, YouTube, Facebook and Threads',
          'X (Twitter), LinkedIn, Bluesky and Pinterest',
        ],
      },
      {
        text: 'It is available as a web dashboard, a mobile app for iOS and Android, a desktop studio for live streaming, and a public API for developers who want to build publishing into their own products.',
      },
    ],
  },
  {
    id: 'what-you-can-do',
    title: 'What You Can Do With It',
    content: [
      {
        items: [
          '<strong>Publish everywhere at once</strong> — write a post once and adapt it per platform, with the right format, caption and limits for each',
          '<strong>Schedule ahead</strong> — a visual calendar, bulk scheduling, and posts that fire whether or not you are online',
          '<strong>Work as a team</strong> — separate workspaces, granular roles, approval flows and comments on each post',
          '<strong>Onboard clients safely</strong> — send a link and a client connects their own accounts, without ever sharing a password',
          '<strong>Measure what worked</strong> — analytics, reporting and follower tracking across every connected account',
          '<strong>Go live</strong> — stream to several platforms simultaneously from the desktop studio',
          '<strong>Build on it</strong> — a documented REST API, webhooks and an MCP server',
        ],
      },
    ],
  },
  {
    id: 'who-we-serve',
    title: 'Who Uses KabonShare',
    content: [
      {
        items: [
          '<strong>Creators</strong> publishing their own content across several platforms',
          '<strong>Businesses</strong> coordinating a brand presence without a large marketing team',
          '<strong>Agencies and social media managers</strong> running many client accounts from one login',
          '<strong>Developers</strong> adding social publishing to their own products through the API',
        ],
      },
    ],
  },
  {
    id: 'how-we-work',
    title: 'How We Handle Your Accounts',
    content: [
      {
        text: 'Connecting a social account never involves giving us a password. Every connection uses the platform’s own official authorisation flow, and you can revoke our access at any time from the platform’s settings — you do not need to ask us.',
      },
      {
        text: 'We publish only what you schedule or ask us to publish. How we collect, use and protect your data is set out in full in our <a href="/privacy">Privacy Policy</a>, and the rules for using the service are in our <a href="/terms">Terms of Service</a>.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Getting In Touch',
    content: [
      {
        items: [
          `<strong>Support:</strong> <a href="mailto:${siteConfig.contact.support}">${siteConfig.contact.support}</a> — account questions, bug reports, anything technical`,
          `<strong>Business and partnerships:</strong> <a href="mailto:${siteConfig.contact.info}">${siteConfig.contact.info}</a>`,
          `<strong>Phone:</strong> <a href="tel:${siteConfig.phone.replace(/\s/g, '')}">${siteConfig.phone}</a>`,
          '<strong>Documentation:</strong> <a href="https://docs.kabonshare.com">docs.kabonshare.com</a>',
        ],
      },
      {
        text: 'Support hours are Monday to Friday, 9 AM – 6 PM WAT. Email reaches us at any time and we usually reply within a few hours. Full details are on our <a href="/contact">Contact page</a>.',
      },
    ],
  },
  {
    id: 'company',
    title: 'Company Details',
    content: [
      {
        items: [
          `<strong>Registered name:</strong> ${siteConfig.legalName}`,
          `<strong>Registered address:</strong> ${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.country}`,
          `<strong>Website:</strong> <a href="${siteConfig.url}">${siteConfig.url.replace('https://', '')}</a>`,
          `<strong>Email:</strong> <a href="mailto:${siteConfig.contact.support}">${siteConfig.contact.support}</a>`,
          `<strong>Phone:</strong> <a href="tel:${siteConfig.phone.replace(/\s/g, '')}">${siteConfig.phone}</a>`,
        ],
      },
    ],
  },
]

export default function About() {
  return (
    <>
      <Head>
        <title>{`About Us - ${siteConfig.name}`}</title>
        <meta
          name="description"
          content={`${siteConfig.legalName} operates ${siteConfig.name}, a social media management platform for publishing, scheduling and analytics across nine networks. Company details and contact information.`}
        />
        <link rel="canonical" href="https://kabonshare.com/about/" />
        <meta property="og:title" content={`About Us - ${siteConfig.name}`} />
        <meta property="og:description" content={`Who we are, what ${siteConfig.name} does, and how to reach us.`} />
        <meta property="og:url" content="https://kabonshare.com/about/" />
      </Head>

      <LegalPage
        eyebrow="Company"
        title="About Us"
        description={`${siteConfig.legalName} builds ${siteConfig.name} — one place to publish, schedule and measure social content across every major network.`}
        lastUpdated={LAST_UPDATED}
        intro={`${siteConfig.name} exists because managing a presence on nine social networks should not mean opening nine apps. This page explains what we build, who it is for, and how to reach the company behind it.`}
        sections={sections}
        contactPrompt="Questions about the company or the platform? Email us at"
      />
    </>
  )
}
