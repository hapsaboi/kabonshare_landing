'use client'
import Head from 'next/head'
import LegalPage from '../components/LegalPage'

const LAST_UPDATED = 'July 12, 2026'

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide',
        items: [
          '<strong>Account Information:</strong> Name, email address, company name',
          '<strong>Payment Information:</strong> Handled by our payment processors (Paystack for cards, Heleket for cryptocurrency) — we store billing history and card metadata (last four digits, expiry), never full card numbers; for crypto refunds we process the wallet address you provide',
          '<strong>Social Media Credentials:</strong> OAuth tokens for connected social media accounts',
          '<strong>Content Data:</strong> Posts, images, videos, live streams, and other content you publish through our platform',
          '<strong>Team Data:</strong> Workspace membership, roles, comments, and approval activity',
          '<strong>Integration Files:</strong> Files you explicitly select from connected services such as Google Drive, Dropbox, or Canva',
          '<strong>Communication Data:</strong> Messages you send to our support team'
        ]
      },
      {
        subtitle: 'Information From Connected Platforms',
        items: [
          '<strong>Analytics Data:</strong> Follower counts, engagement metrics, and post performance retrieved from platforms you connect, used to power your analytics and reports',
          '<strong>Profile Data:</strong> Account names, usernames, and profile pictures of your connected accounts'
        ]
      },
      {
        subtitle: 'Automatically Collected Information',
        items: [
          '<strong>API Usage Data:</strong> API calls, endpoints accessed, request/response data, timestamps',
          '<strong>Device Information:</strong> IP address, browser type, operating system',
          '<strong>Cookies and Tracking:</strong> Session cookies, analytics cookies'
        ]
      }
    ]
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: [
      {
        items: [
          'Provide, operate, and maintain our Service',
          'Process and complete transactions',
          'Authenticate social media accounts and publish content on your behalf',
          'Retrieve analytics from your connected accounts to power your reports and insights',
          'Power AI-assisted features such as caption generation when you use them',
          'Send you technical notices, updates, security alerts',
          'Respond to your comments, questions, and customer service requests',
          'Analyze usage patterns to improve our Service',
          'Detect, prevent, and address technical issues and fraudulent activity'
        ]
      }
    ]
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing',
    content: [
      {
        subtitle: 'We may share your information with:',
        items: [
          '<strong>Social Media Platforms:</strong> We share content with platforms you\'ve connected (Instagram, TikTok, YouTube, Facebook, Twitter/X, LinkedIn, Threads, Bluesky, Pinterest)',
          '<strong>Service Providers:</strong> Cloud hosting, payment processors (Paystack, Heleket), and analytics (PostHog — to understand how visitors interact with our site, measured anonymously by default until you create an account)',
          '<strong>AI Providers:</strong> Content you submit to AI features may be processed by third-party AI service providers solely to deliver the feature — it is not used to train their models',
          '<strong>Workspace Members:</strong> Content, comments, approvals, and activity in a workspace are visible to its members according to their roles',
          '<strong>Legal Requirements:</strong> When required by law or to protect our rights',
          '<strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets'
        ]
      },
      {
        subtitle: 'We do NOT:',
        items: [
          'Sell your personal information to third parties',
          'Share your OAuth tokens with anyone',
          'Use your content for our own marketing without permission',
          'Use your content or data to train AI models'
        ]
      }
    ]
  },
  {
    id: 'third-party-apis',
    title: 'Third-Party Platform & API Services',
    content: [
      {
        items: [
          '<strong>YouTube:</strong> KabonShare uses YouTube API Services. By connecting a YouTube account you agree to the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a>, and Google\'s handling of your data is described in the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. You can revoke KabonShare\'s access to your YouTube data at any time via <a href="https://security.google.com/settings/security/permissions" target="_blank" rel="noopener noreferrer">Google security settings</a>',
          '<strong>Google APIs:</strong> Our use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements',
          '<strong>Other Platforms:</strong> Data from Meta (Instagram, Facebook, Threads), TikTok, Twitter/X, LinkedIn, Bluesky, and Pinterest is accessed only to provide the publishing and analytics features you use, in accordance with each platform\'s developer policies',
          '<strong>Media Integrations:</strong> Google Drive, Dropbox, and Canva integrations only access the specific files you select — we never browse or scan your storage',
          '<strong>Revoking Access:</strong> You can disconnect any platform from your account settings at any time, or revoke access from the platform\'s own security settings'
        ]
      }
    ]
  },
  {
    id: 'ai-features',
    title: 'AI Features',
    content: [
      {
        items: [
          'When you use AI-assisted features (such as caption generation), the content you submit is processed to generate the result you asked for',
          'This processing may involve third-party AI service providers acting on our behalf, bound by confidentiality and data-protection obligations',
          'Your content and data are not used to train our or anyone else\'s AI models',
          'AI features are optional — your content is only processed by them when you actively use them'
        ]
      }
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: [
      {
        items: [
          '<strong>Encryption:</strong> All data in transit is encrypted using TLS',
          '<strong>OAuth Security:</strong> Social media tokens are encrypted at rest and refreshed regularly',
          '<strong>Payment Security:</strong> Card details are handled entirely by our PCI-DSS-compliant payment processors and never touch our servers',
          '<strong>Access Controls:</strong> Strict access controls and authentication for our systems',
          '<strong>Ongoing Review:</strong> We regularly review and improve our security practices'
        ]
      }
    ]
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: [
      {
        subtitle: 'You have the right to:',
        items: [
          '<strong>Access:</strong> Request a copy of your personal data',
          '<strong>Correction:</strong> Update or correct inaccurate information',
          '<strong>Deletion:</strong> Request deletion of your account and associated data',
          '<strong>Export:</strong> Download your content and data in a portable format',
          '<strong>Opt-out:</strong> Unsubscribe from marketing communications',
          '<strong>Revoke Access:</strong> Disconnect social media accounts at any time'
        ]
      }
    ]
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: [
      {
        items: [
          '<strong>Active Accounts:</strong> Data retained as long as your account is active',
          '<strong>Deleted Accounts:</strong> Most data deleted within 30 days; some logs retained for 90 days for security',
          '<strong>Backups:</strong> Backup data may persist for up to 180 days',
          '<strong>Legal Obligations:</strong> Some data may be retained longer to comply with legal requirements'
        ]
      }
    ]
  },
  {
    id: 'international-transfers',
    title: 'International Data Transfers',
    content: [
      {
        text: 'KabonShare is operated from Nigeria, and our service providers (cloud hosting, payment processors, AI providers, and the social platforms you connect) may process data in other countries. Wherever your data is processed, we apply the protections described in this policy and require our providers to safeguard it under their own data-protection commitments.'
      }
    ]
  },
  {
    id: 'children',
    title: 'Children\'s Privacy',
    content: [
      {
        text: 'The Service is not directed at children and requires users to be at least 18 years old. We do not knowingly collect personal information from anyone under 18. If we learn that we have collected personal information from a person under 18, we will delete it promptly. If you believe a minor has provided us with personal information, please contact us.'
      }
    ]
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: [
      {
        text: 'We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email or through the Service before the changes take effect. The "Last updated" date at the top of this page reflects the current version.'
      }
    ]
  }
]

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - KabonShare</title>
        <meta name="description" content="Privacy Policy for KabonShare - How we collect, use, and protect your data" />
        <link rel="canonical" href="https://kabonshare.com/privacy/" />
        <meta property="og:title" content="Privacy Policy - KabonShare" />
        <meta property="og:description" content="Privacy Policy for KabonShare - How we collect, use, and protect your data" />
        <meta property="og:url" content="https://kabonshare.com/privacy/" />
      </Head>

      <LegalPage
        title="Privacy Policy"
        description="How KabonShare collects, uses, and protects your information — including your content and the social accounts you connect."
        lastUpdated={LAST_UPDATED}
        intro={<>At KabonShare (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.</>}
        sections={sections}
        contactPrompt="Questions about this policy or how we handle your data? Email us at"
      />
    </>
  )
}
