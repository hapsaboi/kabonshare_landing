'use client'
import Head from 'next/head'
import LegalPage from '../components/LegalPage'

const LAST_UPDATED = 'July 12, 2026'

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: [
      {
        text: 'By accessing and using the KabonShare service ("Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this Service.'
      }
    ]
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    content: [
      {
        items: [
          'You must be at least 18 years old to create an account and use the Service',
          'If you use the Service on behalf of a company or organization, you represent that you have the authority to bind that organization to these terms',
          'You must not be barred from using the Service under the laws of any applicable jurisdiction'
        ]
      }
    ]
  },
  {
    id: 'service',
    title: 'Description of Service',
    content: [
      {
        text: 'KabonShare provides a unified API and application for publishing content to multiple social media platforms including Instagram, TikTok, YouTube, Facebook, Twitter/X, LinkedIn, Threads, Bluesky, and Pinterest. The Service includes:',
        items: [
          'API access for content publishing',
          'OAuth management and authentication',
          'Media upload and processing',
          'Scheduling, queuing, and bulk publishing features',
          'Analytics, reporting, and follower tracking',
          'AI-assisted tools such as caption generation',
          'Live streaming to connected platforms',
          'Team workspaces and approval workflows',
          'Webhook notifications'
        ]
      },
      {
        text: 'We may add, change, or discontinue features of the Service at any time. Where a change materially reduces the Service you pay for, we will give reasonable notice.'
      }
    ]
  },
  {
    id: 'registration',
    title: 'Account Registration',
    content: [
      {
        text: 'To use the Service, you must:',
        items: [
          'Provide accurate, current, and complete information during registration',
          'Maintain and promptly update your account information',
          'Maintain the security of your API keys and credentials',
          'Accept responsibility for all activities under your account',
          'Notify us immediately of any unauthorized use'
        ]
      }
    ]
  },
  {
    id: 'billing',
    title: 'Billing and Credits',
    content: [
      {
        subtitle: 'Credit System',
        items: [
          'Each post costs 1 credit, regardless of media type (text, image, or video)',
          'Each post costs 1 credit, regardless of how many platforms it publishes to',
          'Monthly credits are allocated based on your subscription plan',
          'Unused credits do not roll over to the next billing period',
          'Additional credits can be purchased at the rate specified in your plan'
        ]
      },
      {
        subtitle: 'Billing',
        items: [
          'Subscription fees are billed in advance on a monthly or annual basis',
          'We accept card payments (processed by Paystack) and cryptocurrency payments (processed by Heleket); payment details are handled by these processors, not stored by us',
          'Renewals are charged automatically to your saved payment method unless you pause or cancel before the renewal date',
          'You authorize us to charge your payment method for all fees incurred, including renewals',
          'If a renewal charge fails, we will retry it over a short grace period before pausing your subscription',
          'Failure to pay may result in suspension or termination of service'
        ]
      }
    ]
  },
  {
    id: 'refunds',
    title: 'Refunds, Pausing & Cancellation',
    content: [
      {
        subtitle: 'Refunds',
        items: [
          'You may request a refund within 7 days of a payment by contacting our support team — refunds are reviewed and processed by us and are not available as a self-service action',
          'Refund eligibility is assessed per payment; a request made more than 7 days after that payment is not eligible',
          'An eligible <strong>subscription</strong> payment is refunded in full — we do not prorate unused time on a subscription or convert it into credit',
          '<strong>Extra account slots</strong> are the exception: they are refunded for the unused portion of the period, mirroring the way they are charged when bought part-way through one',
          'Post credits, AI generation credits and wallet top-ups are not refundable',
          'Card refunds are returned to the original payment method; cryptocurrency refunds are sent to the wallet address the payment came from, or to an address you provide if we cannot determine it',
          'Full details are in our <a href="/refund-policy">Refund Policy</a>'
        ]
      },
      {
        subtitle: 'Pausing your subscription',
        items: [
          'You can pause your subscription at any time from your account — this is self-service and reversible',
          'Access continues until the end of your current billing period; after that, billing stops and your account becomes dormant while your connected accounts and data remain intact',
          'You can resume at any time; if your paid period has already ended, resuming will charge your saved payment method for a new billing cycle'
        ]
      },
      {
        subtitle: 'Cancellation',
        items: [
          'Cancellation permanently and immediately ends your subscription without a refund, and is processed by our support team rather than self-service — contact us to cancel',
          'If you just need a break rather than a permanent end, pausing (above) is the reversible option'
        ]
      }
    ]
  },
  {
    id: 'third-party-platforms',
    title: 'Third-Party Platforms & Services',
    content: [
      {
        text: 'The Service connects to social media platforms and integrations on your behalf. Your use of each connected platform remains governed by that platform’s own terms and policies, and you are responsible for complying with them.',
        items: [
          'By connecting a YouTube account, you agree to be bound by the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a>, as KabonShare uses YouTube API Services',
          'By connecting accounts on Instagram, Facebook, Threads, TikTok, Twitter/X, LinkedIn, Bluesky, or Pinterest, you agree to comply with each platform’s terms of use and community guidelines',
          'Media integrations (such as Google Drive, Dropbox, and Canva) only access the files you explicitly select for use in your posts',
          'Platforms may change or restrict their APIs at any time; we are not liable for platform-imposed limitations, content removal, or account actions taken by a platform'
        ]
      }
    ]
  },
  {
    id: 'ai-features',
    title: 'AI Features',
    content: [
      {
        text: 'The Service includes AI-assisted features such as caption generation and content suggestions.',
        items: [
          'AI-generated output may be inaccurate, incomplete, or unsuitable — you are responsible for reviewing it before publishing',
          'Content you submit to AI features may be processed by third-party AI service providers solely to provide the feature',
          'You own the content you publish, including content you create with the help of AI features, to the extent permitted by applicable law',
          'You must not use AI features to generate unlawful, deceptive, or infringing content'
        ]
      }
    ]
  },
  {
    id: 'teams',
    title: 'Teams & Workspaces',
    content: [
      {
        items: [
          'Workspace owners control member access and are responsible for actions taken by members within their workspace',
          'Content, comments, approvals, and activity within a workspace are visible to its members according to their roles and permissions',
          'Removing a member revokes their access to the workspace but does not delete content they contributed',
          'Credits and billing belong to the workspace owner’s subscription'
        ]
      }
    ]
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use Policy',
    content: [
      {
        text: 'You agree not to use the Service to:',
        items: [
          'Violate any laws or regulations',
          'Infringe on intellectual property rights',
          'Transmit spam, malware, or malicious content',
          'Engage in abusive or harassing behavior',
          'Impersonate others or misrepresent your identity',
          'Attempt to gain unauthorized access to our systems',
          'Reverse engineer or attempt to extract source code',
          'Resell or redistribute the Service without permission'
        ]
      }
    ]
  },
  {
    id: 'content-liability',
    title: 'Content and Liability',
    content: [
      {
        subtitle: 'Your Content',
        items: [
          'You retain all rights to content you publish through the Service',
          'You grant us a license to process and transmit your content to social media platforms',
          'You are solely responsible for the content you publish',
          'You must have all necessary rights and permissions for the content you publish'
        ]
      },
      {
        subtitle: 'Our Liability',
        items: [
          'The Service is provided "as is" without warranties of any kind',
          'We are not responsible for content published through the Service',
          'We are not liable for platform-specific errors or limitations',
          'Our total liability is limited to the amount you paid in the last 12 months',
          'We are not liable for indirect, incidental, or consequential damages'
        ]
      }
    ]
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    content: [
      {
        text: 'You agree to indemnify and hold harmless KabonShare, its officers, employees, and agents from any claims, damages, losses, and expenses (including reasonable legal fees) arising from your content, your use of the Service, your violation of these terms, or your violation of any third-party rights or platform policies.'
      }
    ]
  },
  {
    id: 'termination',
    title: 'Termination',
    content: [
      {
        items: [
          'You may pause your subscription at any time through your account settings; to permanently cancel, contact our support team (see "Refunds, Pausing & Cancellation" above)',
          'We may suspend or terminate your account for violations of these terms',
          'Upon termination, your access to the Service will cease immediately',
          'We may retain certain data as required by law or for legitimate business purposes'
        ]
      }
    ]
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    content: [
      {
        text: 'We may update these terms from time to time. When we make material changes, we will notify you by email or through the Service before the changes take effect. The "Last updated" date at the top of this page reflects the current version. Continued use of the Service after changes take effect constitutes acceptance of the updated terms.'
      }
    ]
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Disputes',
    content: [
      {
        text: 'These terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-law principles. Any dispute arising from these terms or the Service will first be addressed in good faith between you and us; if it cannot be resolved informally, it will be subject to the exclusive jurisdiction of the courts of Nigeria.'
      }
    ]
  }
]

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - KabonShare</title>
        <meta name="description" content="Terms of Service for KabonShare - Rules and guidelines for using our service" />
        <link rel="canonical" href="https://kabonshare.com/terms/" />
        <meta property="og:title" content="Terms of Service - KabonShare" />
        <meta property="og:description" content="Terms of Service for KabonShare - Rules and guidelines for using our service" />
        <meta property="og:url" content="https://kabonshare.com/terms/" />
      </Head>

      <LegalPage
        title="Terms of Service"
        description="The rules for using KabonShare. Please read them — they cover billing, refunds, and what we expect from each other."
        lastUpdated={LAST_UPDATED}
        sections={sections}
        contactPrompt="Questions about these terms? Email us at"
      />
    </>
  )
}
