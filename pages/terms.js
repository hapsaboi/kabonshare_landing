import Head from 'next/head'
import Link from 'next/link'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Media Share API</title>
        <meta name="description" content="Terms of Service for Media Share API" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-dark">
        {/* Header */}
        <header className="bg-gradient-primary text-white py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-sm hover:underline mb-2 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-purple-200 mt-2">Last Updated: November 24, 2025</p>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                By accessing and using the Media Share API service ("Service"), you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Media Share API provides a unified API for publishing content to multiple social media platforms including Instagram, TikTok, 
                YouTube, Facebook, Twitter/X, LinkedIn, and Threads. The Service includes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>API access for content publishing</li>
                <li>OAuth management and authentication</li>
                <li>Media upload and processing</li>
                <li>Scheduling and queuing features</li>
                <li>Analytics and reporting</li>
                <li>Webhook notifications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Account Registration</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To use the Service, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your API keys and credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. API Usage and Rate Limits</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Your use of the API is subject to rate limits based on your subscription tier:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Free Tier:</strong> 100 posts/month, 3 connected accounts</li>
                <li><strong>Starter:</strong> 1,000 posts/month, 10 connected accounts</li>
                <li><strong>Professional:</strong> 10,000 posts/month, 50 connected accounts</li>
                <li><strong>Enterprise:</strong> Custom limits as per your agreement</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Exceeding rate limits may result in temporary suspension of API access. We reserve the right to modify rate limits 
                with reasonable notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Acceptable Use Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit spam, malware, or malicious content</li>
                <li>Engage in abusive or harassing behavior</li>
                <li>Impersonate others or misrepresent your identity</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Resell or redistribute the Service without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Payment and Billing</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Subscription Fees:</strong> Paid plans are billed monthly or annually in advance. All fees are in USD unless otherwise stated.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Payment Methods:</strong> We accept major credit cards and other payment methods as displayed on our website.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Refunds:</strong> We offer a 14-day money-back guarantee for new subscriptions. Refunds after this period are at our discretion.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Price Changes:</strong> We may change our pricing with 30 days notice. Changes will not affect your current billing cycle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The Service, including all content, features, and functionality, is owned by Media Share API and is protected by 
                international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You retain all rights to the content you publish through our Service. By using the Service, you grant us a limited 
                license to process, store, and transmit your content as necessary to provide the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Third-Party Platforms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our Service integrates with third-party social media platforms. Your use of these platforms through our Service is 
                subject to their respective terms of service and policies. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Changes to third-party platform APIs or policies</li>
                <li>Content moderation decisions by third-party platforms</li>
                <li>Account suspensions or bans by third-party platforms</li>
                <li>Data handling practices of third-party platforms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Service Availability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We strive to maintain 99.9% uptime but cannot guarantee uninterrupted access. We may perform maintenance, updates, 
                or modifications that temporarily affect service availability. We are not liable for any damages resulting from 
                service interruptions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Data and Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our collection and use of personal information is described in our <Link href="/privacy" className="text-primary hover:text-secondary underline">Privacy Policy</Link>. 
                By using the Service, you consent to such collection and use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Disclaimers and Limitations of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES 
                INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Termination</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You may terminate your account at any time through your account settings. We may suspend or terminate your access 
                for violations of these Terms or for any other reason at our discretion, with or without notice.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Upon termination, your right to use the Service will immediately cease. We may delete your data after a reasonable period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material changes via email or 
                through the Service. Continued use of the Service after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard 
                to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">15. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                For questions about these Terms, please contact us:
              </p>
              <ul className="list-none text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Email:</strong> legal@media-share.io</li>
                <li><strong>Support:</strong> support@media-share.io</li>
                <li><strong>Address:</strong> [Your Company Address]</li>
              </ul>
            </section>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mt-8">
              <p className="text-sm text-blue-900 dark:text-blue-300">
                <strong>Note:</strong> This is a template Terms of Service document. You should have this reviewed by a legal 
                professional and customized for your specific business needs and jurisdiction.
              </p>
            </div>

          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-primary">Home</Link>
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/security" className="hover:text-primary">Security</Link>
              <Link href="mailto:legal@media-share.io" className="hover:text-primary">Contact Legal</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
