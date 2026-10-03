'use client'
import Head from 'next/head'
import LegalPage from '../components/LegalPage'
import { siteConfig } from '../config/siteConfig'

const LAST_UPDATED = 'October 3, 2026'

/**
 * Account deletion.
 *
 * Google Play requires a publicly reachable URL that explains how to request
 * deletion and says exactly what is removed and what is kept — reviewers open
 * this page and compare it to the app's behaviour, so every statement here is
 * taken from services/accountDeletion.js rather than from a template: the
 * 30-day grace period, the fields the purge rewrites, the shortened display
 * name left on shared content, and the financial records retained.
 *
 * If that service changes, this page changes with it.
 */
const sections = [
  {
    id: 'summary',
    title: 'The Short Version',
    content: [
      {
        items: [
          'Delete your account from <strong>Settings &rarr; Account &rarr; Delete account</strong> in the app, or by emailing us',
          'Your account stops working <strong>immediately</strong> — scheduled posts are cancelled and connected social accounts are disconnected',
          'You have <strong>30 days</strong> to change your mind',
          'After 30 days your personal information is <strong>permanently erased</strong>',
          'Posts already published to Instagram, Facebook, YouTube and other platforms <strong>stay there</strong> — they belong to your accounts on those platforms, not to us',
          'Payment records are kept for <strong>7 years</strong>, because tax law requires it',
        ],
      },
    ],
  },
  {
    id: 'how',
    title: 'How to Delete Your Account',
    content: [
      {
        subtitle: 'In the app',
        text: 'Open <strong>Settings</strong>, choose <strong>Account</strong>, then <strong>Delete account</strong>. You will be asked to re-enter your password to confirm — this protects you if someone else gets hold of your phone or your signed-in session.',
      },
      {
        subtitle: 'By email',
        text: `If you cannot sign in, email <a href="mailto:${siteConfig.contact.support}">${siteConfig.contact.support}</a> from the address on your account with the subject <strong>"Delete my account"</strong>. We will confirm your identity before acting on it, and complete the request within 30 days.`,
      },
      {
        subtitle: 'If you own a workspace with other people in it',
        text: 'You will be asked to decide what happens to that workspace first. Your teammates depend on it — their access, their scheduled posts and their connected accounts all sit inside it — so we will not take it down without you saying so explicitly.',
      },
    ],
  },
  {
    id: 'immediately',
    title: 'What Happens Immediately',
    content: [
      {
        text: 'The moment your request goes through, the account stops functioning. This is not queued or scheduled — it happens at once:',
      },
      {
        items: [
          'You are signed out everywhere, and your API key stops working',
          'Every scheduled and draft post is cancelled — nothing further is published in your name',
          'Live and scheduled streams are ended',
          'Connected social accounts are disconnected and their access tokens invalidated',
          'Your subscription stops renewing',
        ],
      },
      {
        text: 'During this period the account is dormant and inaccessible, but your data still exists — which is what makes the next section possible.',
      },
    ],
  },
  {
    id: 'grace',
    title: 'The 30-Day Window',
    content: [
      {
        text: 'For <strong>30 days</strong> after your request, your account can be restored. Email support from your registered address and we will reinstate it.',
      },
      {
        subtitle: 'Why we wait',
        text: 'Two reasons, and neither is reluctance to delete your data. People change their mind, and more seriously, deleting an account is something an attacker does after taking one over — if deletion were instant and irreversible, a stolen account could never be recovered. The 30-day window closes that off.',
      },
      {
        text: 'You can also ask us to erase everything straight away rather than waiting out the window. Say so in your email and we will do it.',
      },
      {
        subtitle: 'What restoring does not bring back',
        text: 'Connected social accounts stay disconnected — their access tokens were invalidated when you asked us to delete, and we cannot un-invalidate them. You would reconnect those platforms as you did when you first signed up.',
      },
    ],
  },
  {
    id: 'erased',
    title: 'What Is Permanently Erased',
    content: [
      {
        text: 'After 30 days, the following is deleted and cannot be recovered:',
      },
      {
        items: [
          '<strong>Your name, email address and profile photo</strong>',
          '<strong>Your password</strong> and any linked Google sign-in',
          '<strong>Your API keys</strong> and registered devices',
          '<strong>Connected social accounts</strong> and all stored access tokens',
          '<strong>Uploaded media</strong> — images, videos and generated images, removed from our storage',
          '<strong>AI chat history and saved preferences</strong>',
          '<strong>Saved payment methods</strong> (we never stored full card numbers — only the card brand and last four digits)',
          '<strong>Unpublished posts</strong> — drafts and anything scheduled',
        ],
      },
    ],
  },
  {
    id: 'kept',
    title: 'What Is Kept, and Why',
    content: [
      {
        text: 'Two things outlive the account. We would rather state them plainly than let you find out later.',
      },
      {
        subtitle: 'Posts already published',
        text: 'A post published to Instagram, Facebook, YouTube, TikTok, LinkedIn, X, Threads, Bluesky or Pinterest lives on that platform, under your account there. We only ever held a reference to it. Deleting your KabonShare account does not remove it, and we deliberately do not try — reaching into your social accounts to delete your own public content is not something you asked for. You can delete those posts yourself on each platform, before or after closing your account.',
      },
      {
        subtitle: 'Payment records',
        text: 'Invoices, transactions and billing history are retained for <strong>7 years</strong>. Tax and accounting law requires a company to keep records of money it received, and that obligation does not end when a customer leaves. These records hold the transaction, not your profile.',
      },
      {
        subtitle: 'Your name on shared work',
        text: 'If you worked in a shared workspace, content you created for that team — posts, comments, ideas, approvals — stays with the team, because it is their record as much as yours. Your name on it is shortened to a first name and initial, for example <strong>"Amara O."</strong>, so colleagues can still follow the history of their own work. Your email address, photo, profile and any way of contacting you are gone. If you would rather appear only as <strong>"Former member"</strong>, email us and we will do that instead.',
      },
    ],
  },
  {
    id: 'team',
    title: 'If You Are Part of a Team',
    content: [
      {
        subtitle: 'You are a member of someone else\'s workspace',
        text: 'Deleting your account removes your access. The workspace, and the posts you made in it, belong to the workspace owner and stay with them.',
      },
      {
        subtitle: 'You own a workspace other people use',
        text: 'This is the case we will not let you walk into by accident. The workspace, its subscription and its connected accounts all belong to you, so deleting your account would cut off everyone in it. Before we proceed you will be told how many people are affected, and asked either to hand the workspace to another member or to confirm that it should be deleted with you.',
      },
    ],
  },
  {
    id: 'questions',
    title: 'Questions and Complaints',
    content: [
      {
        text: `If anything here is unclear, or you want your data erased on different terms than this page describes, email <a href="mailto:${siteConfig.contact.support}">${siteConfig.contact.support}</a> and a person will answer.`,
      },
      {
        text: 'KabonShare is operated by <strong>Kabon Share Limited</strong> (RC 9478291), Nigeria. If you are in the EU or UK and believe your request has not been handled properly, you have the right to complain to your local data protection authority.',
      },
    ],
  },
]

export default function DeleteAccount() {
  return (
    <>
      <Head>
        <title>Delete Your Account - {siteConfig.name}</title>
        <meta
          name="description"
          content={`How to delete your ${siteConfig.name} account: where to find it in the app, what happens immediately, the 30-day window to change your mind, and exactly what is erased and what is kept.`}
        />
        <link rel="canonical" href="https://kabonshare.com/delete-account/" />
        <meta property="og:title" content={`Delete Your Account - ${siteConfig.name}`} />
        <meta property="og:description" content={`What happens when you delete your ${siteConfig.name} account — what is erased, what is kept, and how to change your mind.`} />
        <meta property="og:url" content="https://kabonshare.com/delete-account/" />
      </Head>

      <LegalPage
        eyebrow="Your Data"
        title="Delete Your Account"
        description="How to close your KabonShare account, and exactly what happens to your data when you do."
        lastUpdated={LAST_UPDATED}
        intro="You can delete your KabonShare account at any time, from inside the app or by emailing us. This page explains what happens the moment you ask, what you can still undo, what is permanently erased, and the two things we keep — so there are no surprises afterwards."
        sections={sections}
        contactPrompt="Questions about deleting your account or your data? Email us at"
      />
    </>
  )
}
