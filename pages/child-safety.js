'use client'
import Head from 'next/head'
import LegalPage from '../components/LegalPage'
import { siteConfig } from '../config/siteConfig'

const LAST_UPDATED = 'October 6, 2026'

/**
 * Child safety standards (CSAE).
 *
 * Google Play requires every app in the Social category to publish standards
 * against child sexual abuse and exploitation at a stable, world-readable URL
 * that is not a PDF and not user-editable. Reviewers read this page and compare
 * it to how the product actually behaves, so it describes KabonShare as it is:
 * a publishing tool where accounts post to their own connected social profiles,
 * with no user-to-user messaging, no public feed, and no way for one customer
 * to see another's content.
 *
 * Every commitment below has to stay true of the product. If reporting,
 * moderation or retention changes, this page changes with it.
 */
const sections = [
  {
    id: 'commitment',
    title: 'Our Commitment',
    content: [
      {
        text: 'KabonShare has zero tolerance for child sexual abuse and exploitation (CSAE). Content that sexualises, exploits or endangers a minor is prohibited on our platform without exception, and we act on it whether it is reported to us or found by our own checks.',
      },
      {
        text: 'This page sets out what is prohibited, how we enforce it, how to report a concern, and what we do when a report is substantiated.',
      },
    ],
  },
  {
    id: 'what-kabonshare-is',
    title: 'How KabonShare Works',
    content: [
      {
        text: 'Understanding the product matters for understanding where risk sits. KabonShare is a scheduling and publishing tool for businesses and creators:',
      },
      {
        items: [
          'Customers connect <strong>their own</strong> social media accounts and publish to them',
          'There is <strong>no user-to-user messaging</strong>, no direct messages and no comments between customers',
          'There is <strong>no public feed</strong> — one customer cannot browse, search or view another customer\'s content',
          'Content uploaded to KabonShare is private to the workspace that uploaded it until that workspace publishes it to its own connected profiles',
        ],
      },
      {
        text: 'KabonShare is not a social network and is not directed at children. Our Terms of Service require every account holder to be at least 18 years old.',
      },
    ],
  },
  {
    id: 'prohibited',
    title: 'Prohibited Content and Conduct',
    content: [
      {
        text: 'The following are prohibited on KabonShare, in uploaded media, in scheduled posts, in captions and in any other content passing through our systems:',
      },
      {
        items: [
          'Child sexual abuse material (CSAM) in any form',
          'Sexualised depictions of minors, including computer-generated, illustrated or AI-generated imagery',
          'Content that sexualises a real minor, including through captions, hashtags or framing of otherwise innocuous imagery',
          'Grooming, solicitation or sextortion of a minor',
          'Trafficking, advertising or facilitating access to any of the above',
          'Links, handles or references directing people to CSAE material hosted elsewhere',
        ],
      },
      {
        text: 'This applies regardless of intent, claimed artistic purpose, or whether the content was ultimately published.',
      },
    ],
  },
  {
    id: 'reporting',
    title: 'How to Report',
    content: [
      {
        text: 'Anyone — customer or not — can report suspected child safety violations, and reports are reviewed by a person.',
      },
      {
        items: [
          `<strong>Email</strong>: <a href="mailto:${siteConfig.contact.support}">${siteConfig.contact.support}</a> with "CHILD SAFETY" in the subject line`,
          '<strong>In the app</strong>: tap the flag icon on any post, or go to More &rarr; Support &amp; Legal &rarr; Report a child safety concern',
          `<strong>Urgent cases</strong>: mark the email URGENT and we will prioritise it ahead of all other support`,
        ],
      },
      {
        text: 'You do not need a KabonShare account to report. Please include any link, workspace name or account handle you have, but <strong>do not attach or forward the material itself</strong> — describing where it is located is enough, and reproducing it may itself be unlawful.',
      },
      {
        text: 'Reports are acknowledged within 24 hours and are not disclosed to the account being reported.',
      },
    ],
  },
  {
    id: 'enforcement',
    title: 'What Happens After a Report',
    content: [
      {
        text: 'When we receive a report or detect a violation ourselves:',
      },
      {
        items: [
          'The content is <strong>removed and scheduled publishing is halted</strong> immediately, before any review is complete',
          'The account is <strong>suspended</strong> pending investigation',
          'We <strong>preserve the evidence</strong> required by law, in a restricted-access form, even where the account is otherwise being deleted',
          'Substantiated cases are <strong>reported to the relevant authorities</strong> — including the National Center for Missing &amp; Exploited Children (NCMEC) in the United States, and the equivalent national body in other jurisdictions where we are required to report',
          'Confirmed violations result in <strong>permanent termination</strong>, and we block attempts to re-register',
        ],
      },
      {
        text: 'We do not accept appeals that ask us to reinstate content prohibited by this policy.',
      },
    ],
  },
  {
    id: 'prevention',
    title: 'Prevention and Detection',
    content: [
      {
        items: [
          'Accounts must be <strong>18 or older</strong> under our Terms of Service',
          'Connected social accounts are authenticated through each platform\'s official OAuth flow, so publishing is tied to a verified identity on that platform',
          'Content published through KabonShare is additionally subject to the receiving platform\'s own CSAE detection',
          'Reports are handled by trained staff, not automated closure',
          'We cooperate with lawful requests from authorities investigating child exploitation',
        ],
      },
    ],
  },
  {
    id: 'contact',
    title: 'Point of Contact',
    content: [
      {
        text: `Our designated contact for child safety and CSAM prevention matters is <a href="mailto:${siteConfig.contact.support}">${siteConfig.contact.support}</a>. This address is monitored and is able to discuss our prevention practices and compliance with regulators, platform partners and law enforcement.`,
      },
      {
        text: 'For emergencies involving a child in immediate danger, contact your local emergency services first.',
      },
    ],
  },
]

export default function ChildSafety() {
  return (
    <>
      <Head>
        <title>{`Child Safety Standards - ${siteConfig.name}`}</title>
        <meta
          name="description"
          content={`${siteConfig.name}'s standards against child sexual abuse and exploitation: what is prohibited, how to report a concern, how we enforce, and who to contact.`}
        />
        <link rel="canonical" href="https://kabonshare.com/child-safety/" />
        <meta property="og:title" content={`Child Safety Standards - ${siteConfig.name}`} />
        <meta
          property="og:description"
          content={`Our zero-tolerance standards against child sexual abuse and exploitation, how to report, and what happens next.`}
        />
        <meta property="og:url" content="https://kabonshare.com/child-safety/" />
      </Head>

      <LegalPage
        eyebrow="Safety"
        title="Child Safety Standards"
        description="Our standards against child sexual abuse and exploitation (CSAE), how to report a concern, and what we do about it."
        lastUpdated={LAST_UPDATED}
        intro="KabonShare has zero tolerance for child sexual abuse and exploitation. This page explains what is prohibited, how anyone can report a concern, what happens when we receive one, and how to reach the person responsible for these matters."
        sections={sections}
        contactPrompt="To report a child safety concern, or for questions about these standards, email us at"
      />
    </>
  )
}
