'use client'
import Head from 'next/head'
import LegalPage from '../components/LegalPage'
import { siteConfig } from '../config/siteConfig'

const LAST_UPDATED = 'September 2, 2026'

/**
 * Refund Policy.
 *
 * A standalone page because payment providers ask for one by name in merchant
 * review, and a section buried inside the Terms is easy for a reviewer — or a
 * customer — to miss.
 *
 * Every rule here is taken from what the billing code actually does
 * (utils/billingCycleUtils.js), not from a template: the 7-day window measured
 * per payment, the pro-rata treatment of add-on slots, which purchase types have
 * no refund path at all, and how each provider returns money. Where this page
 * and the Terms overlap they must agree, so the Terms section links here.
 */
const sections = [
  {
    id: 'summary',
    title: 'The Short Version',
    content: [
      {
        items: [
          'You can request a refund within <strong>7 days</strong> of a payment',
          'Requests go through our support team — refunds are not self-service',
          'Eligible subscription payments are refunded <strong>in full</strong>, not prorated',
          'Extra account slots are refunded for the <strong>unused portion</strong> of the period',
          'Post credits, AI credits and wallet top-ups are <strong>not refundable</strong>',
        ],
      },
    ],
  },
  {
    id: 'window',
    title: 'The 7-Day Window',
    content: [
      {
        text: 'You may request a refund within 7 days of the date a payment was taken. After 7 days that payment is no longer eligible.',
      },
      {
        text: 'The window is measured <strong>per payment</strong>, not per subscription. If you paid for a plan and later paid again to upgrade, each of those payments has its own 7-day window running from its own date. One can be refundable while the other is not.',
      },
      {
        text: 'The window exists because card and crypto providers stop accepting refund requests through their systems after a period. Payments we recorded manually — money sent by bank transfer, for example — are not bound by a provider deadline, so we can still reverse those after 7 days.',
      },
    ],
  },
  {
    id: 'what-is-refunded',
    title: 'What Gets Refunded',
    content: [
      {
        subtitle: 'Subscription payments',
        items: [
          'An eligible subscription payment is refunded <strong>in full</strong>',
          'We do not prorate unused time on a subscription or convert it into account credit — inside the window you receive the whole payment back, whether you are on day one or day six',
        ],
      },
      {
        subtitle: 'Extra account slots',
        items: [
          'Extra account slots work differently: they are refunded for the <strong>unused portion</strong> of the billing period they were bought for',
          'This mirrors how they are charged. Buying a slot part-way through a period costs only the remaining time, so refunding one returns only the time you did not use',
          'Slots are also released when the subscription they belong to is refunded, so you are not billed for them again',
        ],
      },
      {
        subtitle: 'Not refundable',
        items: [
          '<strong>Post credits</strong> and <strong>AI generation credits</strong> — these are consumable and are used the moment you publish or generate',
          '<strong>Wallet top-ups</strong> — wallet balance is non-refundable service credit. It can be spent on renewals, upgrades and slots, but it cannot be converted back to money',
        ],
      },
    ],
  },
  {
    id: 'how-to-request',
    title: 'How to Request a Refund',
    content: [
      {
        text: `Email <a href="mailto:${siteConfig.contact.support}">${siteConfig.contact.support}</a> from the address on your account, telling us which payment you would like refunded. Refunds are reviewed and processed by our team rather than being a button in the app, so that we can check the payment, confirm the window and handle the provider correctly.`,
      },
      {
        text: 'It helps if you include the payment reference or the date and amount, especially if you have more than one payment on the account.',
      },
    ],
  },
  {
    id: 'how-money-returns',
    title: 'How the Money Comes Back',
    content: [
      {
        items: [
          '<strong>Card payments</strong> are returned to the card that was charged. The payment provider typically settles this within <strong>3–5 business days</strong>, though your bank may take longer to show it',
          '<strong>Cryptocurrency payments</strong> are returned to a wallet address you provide. You are responsible for giving us a correct address — a transfer sent to a wrong address cannot be recovered',
          '<strong>Bank transfers and other manual payments</strong> are returned the same way they arrived, which we arrange with you directly',
        ],
      },
      {
        text: 'We refund in the currency you paid in. We do not convert between currencies, so a payment made in USD is returned in USD and a payment made in NGN is returned in NGN.',
      },
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancelling vs Pausing',
    content: [
      {
        text: 'Cancelling and refunding are separate things.',
      },
      {
        items: [
          '<strong>Cancelling</strong> ends your subscription immediately and permanently, and does not by itself produce a refund. If the payment is still inside its 7-day window you can request a refund as well',
          '<strong>Pausing</strong> is the reversible option and is available in your account settings. Access continues to the end of the period you have paid for, then billing stops and your data and connected accounts stay intact until you resume',
        ],
      },
      {
        text: 'If you only need a break, pausing is almost always the better choice.',
      },
    ],
  },
  {
    id: 'disputes',
    title: 'If Something Goes Wrong',
    content: [
      {
        text: `If a refund has not arrived when you expect it, or you believe a payment was taken in error, contact us at <a href="mailto:${siteConfig.contact.support}">${siteConfig.contact.support}</a> before raising a dispute with your bank or card issuer. We can usually resolve it faster directly, and a chargeback typically freezes the account while it is investigated.`,
      },
      {
        text: 'This policy sits alongside our <a href="/terms">Terms of Service</a>. Where the Terms describe billing in more general language, this page is the detailed statement of how refunds work.',
      },
    ],
  },
]

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>{`Refund Policy - ${siteConfig.name}`}</title>
        <meta
          name="description"
          content={`${siteConfig.name}'s refund policy: a 7-day window measured per payment, how subscriptions and add-on slots are treated, what is not refundable, and how refunds are returned.`}
        />
        <link rel="canonical" href="https://kabonshare.com/refund-policy/" />
        <meta property="og:title" content={`Refund Policy - ${siteConfig.name}`} />
        <meta property="og:description" content={`How refunds work at ${siteConfig.name} — the 7-day window, what is covered, and how money is returned.`} />
        <meta property="og:url" content="https://kabonshare.com/refund-policy/" />
      </Head>

      <LegalPage
        title="Refund Policy"
        description="How refunds work, what is eligible, and how to request one."
        lastUpdated={LAST_UPDATED}
        intro="This page sets out when a payment can be refunded, what happens to subscriptions and add-ons, and how the money is returned. If anything here is unclear, ask us before you buy — we would rather answer the question than process the refund."
        sections={sections}
        contactPrompt="Questions about a payment or a refund? Email us at"
      />
    </>
  )
}
