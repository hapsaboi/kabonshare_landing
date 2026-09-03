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
    id: 'why',
    title: 'Why We Built It',
    content: [
      {
        text: 'KabonShare started as our own problem. We were running social accounts across several platforms and doing the same job by hand every time: export the video, crop it for one app, rewrite the caption for another, remember that one platform rejects that aspect ratio, post, then repeat five more times. The actual work took minutes. The posting took the evening.',
      },
      {
        text: 'The tools that solve this exist, but most of them are built for a marketing department with a budget to match, and they tend to treat anything beyond the big four networks as an afterthought. We wanted one place that handled every network we actually post to, priced for people who are not a marketing department.',
      },
      {
        text: 'So we built it, and then kept building the parts we kept needing — a way to hand a client an invite instead of asking for their password, approvals that do not live in a group chat, and an API for the times a person should not be in the loop at all.',
      },
    ],
  },
  {
    id: 'what-we-do',
    title: 'What KabonShare Does',
    content: [
      {
        text: 'One composer, nine networks. You write a post once, adapt it per platform where it matters, and KabonShare publishes it everywhere at the right time — checking each platform&rsquo;s formats, limits and rules before it goes out rather than failing silently afterwards.',
      },
      {
        text: 'The nine, in full: <strong>Instagram, TikTok, YouTube, Facebook, Threads, X (Twitter), LinkedIn, Bluesky and Pinterest.</strong> Bluesky and Pinterest in particular are ones most tools skip.',
      },
      {
        text: 'Around that sits the rest of the job — a scheduling calendar and bulk scheduler, analytics and follower tracking, AI-assisted captions written from the media itself, live streaming to several platforms at once from a desktop studio, and a documented REST API with webhooks and an MCP server for people building on top of it.',
      },
    ],
  },
  {
    id: 'built-for',
    title: 'Who We Build For',
    content: [
      {
        text: 'Most social tools are designed for one brand posting to its own accounts. That case is easy. We built for the harder one first — someone managing accounts that are not theirs.',
      },
      {
        items: [
          '<strong>Agencies, freelancers and social media managers</strong> running many clients from one login, with separate workspaces, roles and per-client reporting. Clients connect their own accounts through an invite link, so nobody has to share a password',
          '<strong>Creators</strong> publishing to every platform they are on without opening every app',
          '<strong>Businesses and teams</strong> that need a post reviewed before it goes out, with the approval and the comments attached to the post rather than scattered across email',
          '<strong>Developers</strong> putting social publishing inside their own product, without owning nine OAuth integrations and their breaking changes',
        ],
      },
    ],
  },
  {
    id: 'principles',
    title: 'How We Work',
    content: [
      {
        subtitle: 'We never hold your passwords',
        items: [
          'Every account connection uses the platform&rsquo;s own authorisation flow. We receive permission to post, never a password',
          'You can revoke that permission at any time from the platform&rsquo;s own settings, without asking us',
          'The same applies to a client connecting through an invite — they authorise the platform directly, and the link expires',
        ],
      },
      {
        subtitle: 'We publish what you asked for, and nothing else',
        items: [
          'Nothing is posted that you did not schedule or approve',
          'We do not post promotional content from your accounts, and we do not sell your data. The full detail is in our <a href="/privacy">Privacy Policy</a>',
        ],
      },
      {
        subtitle: 'We try to be clear about money',
        items: [
          'A free tier that is genuinely usable, and prices published on the <a href="/pricing">pricing page</a> rather than hidden behind a sales call',
          'A <a href="/refund-policy">refund policy</a> that says plainly what is refundable and what is not, including the parts that are not',
        ],
      },
    ],
  },
  {
    id: 'where-we-are',
    title: 'Where We Are',
    content: [
      {
        text: `${siteConfig.name} is built by a small, distributed team. The platforms we publish to are global, our pricing is available in more than one currency, and nothing in the product assumes where you are.`,
      },
      {
        // Registration jurisdiction is deliberately not stated here. It appears
        // once, factually, in Company Details below — where a payment provider's
        // KYB review looks for it — rather than twice in the prose.
        text: `The company behind it is <strong>${siteConfig.legalName}</strong>. Registration and contact details are below.`,
      },
    ],
  },
  {
    id: 'contact',
    title: 'Talking To Us',
    content: [
      {
        text: 'There is no support queue that ends at a bot. A person reads these.',
      },
      {
        items: [
          `<strong>Support</strong> — <a href="mailto:${siteConfig.contact.support}">${siteConfig.contact.support}</a>, or Support inside your account. Account questions, bugs, billing`,
          `<strong>Business and partnerships</strong> — <a href="mailto:${siteConfig.contact.info}">${siteConfig.contact.info}</a>`,
          `<strong>Phone</strong> — <a href="tel:${siteConfig.phone.replace(/\s/g, '')}">${siteConfig.phone}</a>, Monday to Friday, 9 AM – 6 PM WAT`,
          '<strong>Documentation</strong> — <a href="https://docs.kabonshare.com">docs.kabonshare.com</a>',
        ],
      },
      {
        text: 'Email reaches us at any hour and we usually reply within a few hours. More ways to reach us are on the <a href="/contact">Contact page</a>.',
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
          content={`Why ${siteConfig.name} exists, what it does, and who builds it. ${siteConfig.legalName} — a social media management platform for publishing, scheduling and analytics across nine networks.`}
        />
        <link rel="canonical" href="https://kabonshare.com/about/" />
        <meta property="og:title" content={`About Us - ${siteConfig.name}`} />
        <meta property="og:description" content={`Who we are, what ${siteConfig.name} does, and how to reach us.`} />
        <meta property="og:url" content="https://kabonshare.com/about/" />
      </Head>

      <LegalPage
        eyebrow="Company"
        title="About Us"
        description="We got tired of posting the same thing to nine apps by hand, so we built one place that does it."
        lastUpdated={LAST_UPDATED}
        intro="This page is the plain version: why KabonShare exists, what it actually does, who we built it for, and the details of the company behind it."
        sections={sections}
        contactPrompt="Questions about the company or the platform? Email us at"
      />
    </>
  )
}
